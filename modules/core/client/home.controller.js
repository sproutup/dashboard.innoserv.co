'use strict';

angular
  .module('core')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$state', 'CompanyService', '$http', 'Authentication'];

function HomeController($scope, $state, CompanyService, $http, Authentication) {
  var vm = this;
  // This provides Authentication context.
  vm.authentication = Authentication;
  vm.getStarted = getStarted;
  vm.init = true;

  function getStarted() {

    vm.credentials = {
      email: vm.email
    };

    Authentication.emailSentTo = vm.email;

    $http.post('/api/auth/join', vm.credentials).success(function (response) {
      $state.go('landing.confirmation');
    }).error(function (response) {
      $scope.error = response.message;
    });
  }
}

