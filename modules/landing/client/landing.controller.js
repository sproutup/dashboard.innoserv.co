'use strict';

(function() {

  angular
    .module('landing')
    .controller('landingController', landingController);

landingController.$inject = ['$scope', '$state', '$location', 'CompanyService', '$http', 'Authentication'];

function landingController($scope, $state, $location, CompanyService, $http, Authentication) {
  var vm = this;
  vm.authentication = Authentication;
  vm.getStarted = getStarted;
  vm.init = true;

  if($state.params.url){
    vm.url = decodeURIComponent($state.params.url);
  }

  function getStarted() {
    var userEmail = String(vm.email + '@' + $scope.company.company.domain);

    vm.credentials = {
      email: userEmail,
      company: $scope.company.company
    };

    Authentication.emailSentTo = userEmail;

    $http.post('/api/auth/join', vm.credentials).success(function (response) {
      $state.go('company.landing.confirmation', {url: response.data[':url'][0]} );
    }).error(function (response) {
      $scope.error = response.message;
    });
  }
}

})();
