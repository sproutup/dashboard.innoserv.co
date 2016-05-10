'use strict';

angular
  .module('core')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$state', 'CompanyService', '$http', 'Authentication', 'SlugService'];

function HomeController($scope, $state, CompanyService, $http, Authentication, SlugService) {
  var vm = this;
  // This provides Authentication context.
  vm.authentication = Authentication;
  vm.getStarted = getStarted;
  vm.gotoMyCompany = gotoMyCompany;
  vm.item = null;
  vm.init = true;

  function gotoMyCompany() {
    $state.go('mycompany');
  }

  function getStarted() {
    vm.credentials = {
      email: vm.email,
      company: vm.company
    };

    Authentication.emailSentTo = vm.email;

    $http.post('/api/auth/join', vm.credentials).success(function (response) {
      var url = response.data[':url'] ? response.data[':url'][0] : null;
      if (vm.company) {
        $state.go('footer.company.landing.confirmation', { companySlug: vm.company.slug, url: url });
      } else {
        $state.go('footer.landing.confirmation', {url: url});
      }
    }).error(function (response) {
      $scope.error = response.message;
    });
  }
}
