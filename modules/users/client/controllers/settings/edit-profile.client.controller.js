'use strict';

angular.module('users').controller('EditProfileController', ['$scope', '$http', '$location', 'Users', 'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    var vm = this;
    vm.user = {};

    vm.user.displayName = Authentication.user.displayName;
    vm.user.email = Authentication.user.email;
    vm.user.username = Authentication.user.username;
    vm.user.description = Authentication.user.description;
    vm.user.phone = Authentication.user.phone;
    vm.user.address = Authentication.user.address;

    // Update a user profile
    $scope.updateUserProfile = function (isValid) {
      $scope.success = $scope.error = null;
      var user = new Users($scope.user);

      user.$update(function (response) {
        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };

    // Send another email confirmation
    $scope.emailConfirmation = function() {
        $http.post('/api/users/email/confirmation').success(function (response) {
            $scope.message = 'Email sent successfully';
            $scope.success = true;
        }).error(function (response) {
            $scope.message = 'Email failed to send';
        });
    };
  }
]);
