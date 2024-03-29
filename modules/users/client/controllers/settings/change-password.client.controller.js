'use strict';

angular.module('users').controller('ChangePasswordController', ['$scope', '$http', 'Authentication',
  function ($scope, $http, Authentication) {
    $scope.user = Authentication.user;

    // Change user password
    $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null;

      $http.put('/api/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.passwordDetails = null;
        $scope.changePasswordForm.newPassword.$touched = null;
        $scope.changePasswordForm.$submitted = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
