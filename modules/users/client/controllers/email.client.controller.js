'use strict';

angular.module('users').controller('EmailController', ['$scope', 'Authentication', 'ResendEmailConfirmation', '$http',
  function ($scope, Authentication, ResendEmailConfirmation, $http) {
    $scope.authentication = Authentication;
  
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