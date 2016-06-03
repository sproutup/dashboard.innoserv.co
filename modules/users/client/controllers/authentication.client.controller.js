'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication', '$analytics',
  function ($scope, $state, $http, $location, $window, Authentication, $analytics) {
    $scope.authentication = Authentication;
    $scope.credentials = {};

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    var saveTeamObject = function(userId, companyId) {
      var teamObj = {
        userId: userId,
        companyId: companyId
      };

      $http.post('/api/team', teamObj).success(function (team) {
        $scope.success = true;
      }).error(function (response) {
        // TODO display message with error message
        $scope.error = response.message;
      });
    };

    $scope.signup = function () {
      $scope.credentials.token = $state.params.token;
      $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
        $scope.authentication.user = response;
        $state.go('footer.select');
        $analytics.setAlias($scope.authentication.user.id);
        $analytics.setUserPropertiesOnce({ name: $scope.authentication.user.displayName });
      });
    };

    $scope.signin = function () {
      $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
        $scope.authentication.user = response;
        if($state.previous.state.name==='footer.home'){
          $state.previous.state.name = null;
        }
        $state.go($state.previous.state.name || 'footer.select', $state.previous.params);
        window.Intercom('update', {
          email: Authentication.user.email,
          name: Authentication.user.displayName,
          user_id: Authentication.user.id
        });
        $analytics.setUsername($scope.authentication.user.id);
        $analytics.setUserPropertiesOnce({ name: $scope.authentication.user.displayName });
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

    $scope.initCompany = function() {
      $scope.companyInit = true;
      $scope.newCompany = true;
    };

    $scope.verifyToken = function() {
      var credentials = {
        token: $state.params.token
      };
      $scope.company = {};

      $http.post('/api/auth/verifyToken', credentials).success(function (response) {
        $scope.credentials.email = response[0];
      }).error(function (errorResponse) {
        $scope.error = errorResponse.message;
      });
    };


    $scope.verifyInviteToken = function() {
      var credentials = {
        token: $state.params.token
      };
      $scope.company = {};

      $http.post('/api/auth/verifyInviteToken', credentials).success(function (response) {
        $scope.credentials.email = response[0];
        $scope.credentials.token = $state.params.token;
      }).error(function (errorResponse) {
        $scope.error = errorResponse.message;
      });
    };
  }
]);
