'use strict';

(function() {

  angular
    .module('landing')
    .controller('landingController', landingController);

landingController.$inject = ['$scope', '$state', '$location', 'CompanyService', '$http', 'Authentication', 'ContentService'];

function landingController($scope, $state, $location, CompanyService, $http, Authentication, ContentService) {
  var vm = this;
  vm.authentication = Authentication;
  vm.getStarted = getStarted;
  vm.findCompanyContent = findCompanyContent;

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
      $state.go('footer.company.landing.confirmation', {url: response.data[':url'][0]});
    }).error(function (response) {
      $scope.error = response.message;
    });
  }

  function findCompanyContent() {
    console.log('yo', $scope);
    if (!$scope.company.company.id) {
      var listener = $scope.$watch('company.company.id', function(val) {
        if(val) {
          listener();
          findCompanyContent();
        }
      });
      return;
    }

    ContentService.company().query({
      companyId: $scope.company.company.id
    }, function(res) {
      vm.content = res;
    }, function(err) {
      $state.go('landing.default');
    });
  }
}

})();