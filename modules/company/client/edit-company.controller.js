'use strict';

angular
  .module('company')
  .controller('EditCompanyController', EditCompanyController);

EditCompanyController.$inject = ['$scope', 'CompanyService', 'item'];

function EditCompanyController($scope, CompanyService, item) {
  var vm = this;
  vm.oldCompany = item;
  vm.company = {
    id: vm.oldCompany.id,
    name: vm.oldCompany.name,
    tagline: vm.oldCompany.tagline,
    url: vm.oldCompany.url,
    address: vm.oldCompany.address,
    phone: vm.oldCompany.phone
  };
  vm.update = update;

  function update() {
    var CompanyObj = CompanyService.company();
    var company = new CompanyObj(vm.company);

    CompanyService.updateCompany(company)
      .then(function(result) {
        $scope.$parent.$parent.company.company = result;
        vm.success = true;
      }, function(reason) {
        vm.error = reason;
      });
  }
}