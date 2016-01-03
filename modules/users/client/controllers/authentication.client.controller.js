'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
  function ($scope, $state, $http, $location, $window, Authentication) {
    $scope.authentication = Authentication;
    $scope.credentials = {};

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    $scope.signUpAndClaimCompany = function() {
      $scope.credentials.email = $scope.email;
      $scope.credentials.companyId = $scope.company.id;

      // This tells the backend that we have a company to claim
      if ($state.params.token) {
        $scope.credentials.token = $state.params.token;
      } else {
        $scope.error = 'No token found';
        return;
      }

      $http.post('/api/auth/signUpAndClaimCompany', $scope.credentials).success(function (response) {
        $scope.authentication.user = response;
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.signup = function () {
      $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
        $scope.authentication.user = response;
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.signin = function () {
      $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
        $scope.authentication.user = response;
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // OAuth provider request
    $scope.callOauthProvider = function (url) {
      var redirect_to;

      if ($state.previous) {
        redirect_to = $state.previous.href;
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url + (redirect_to ? '?redirect_to=' + encodeURIComponent(redirect_to) : '');
    };

    $scope.verifyToken = function() {
      var credentials = {
        token: $state.params.token
      };

      $http.post('/api/auth/verifyCompanyToken', credentials).success(function (response) {
        $scope.email = response.userEmail;
        $scope.company = {
          id: response.id,
          name: response.name
        };
      }).error(function (errorResponse) {
        $scope.error = errorResponse.message;
      });
    };
  }
]);