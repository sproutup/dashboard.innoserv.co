'use strict';

(function() {

    angular
        .module('company')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['$scope', 'CompanyService', 'TrialService', '$state', 'CampaignService', '$location', 'Authentication'];

    function CompanyController($scope, CompanyService, TrialService, $state, CampaignService, $location, Authentication) {
        var vm = this;
        vm.success = false;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.find = find;
        vm.findOne = findOne;
        vm.findMyCompany = findMyCompany;

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            $scope.$broadcast('show-errors-check-validity', 'companyForm');

            return false;
          } else {
            vm.invalid = false;
          }

          // Create new Company object
          var company = new CompanyService({
            name: this.name,
            url: this.url
          });

          // Redirect after save
          company.$save(function (response) {
            $location.path('admin/company/' + response.id);

            // Clear form fields
            vm.name = '';
            vm.url = '';
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function remove(company) {
          if (company) {
            company.$remove();

            for (var i in vm.companies) {
              if (vm.companies[i] === company) {
                vm.companies.splice(i, 1);
              }
            }
          } 
          // else {
            // test this 
            // vm.company.$remove(function () {
            //   $location.path('user.company');
            // });
          // }
        }

        function update(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            $scope.$broadcast('show-errors-check-validity', 'articleForm');

            return false;
          } else {
            vm.invalid = false;
          }

          var company = vm.company;

          company.$update(function() {
            vm.success = true;
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function find() {
          vm.companies = CompanyService.query();
        }

        function findOne() {
          var company = CompanyService.get({
            companyId: Authentication.user.sessionCompany.id 
          }, function() {
            vm.company = company;
          }, function(err) {
            $state.go('landing.default');
          });

          var campaigns = CampaignService.listByCompany().query({
            companyId: $state.params.companyId
          }, function() {
            vm.campaigns = campaigns;
          });
        }

        function findMyCompany() {
          var company = CompanyService.get({
            id: Authentication.user.sessionCompany.id 
          }, function() {
            vm.company = company;
          }, function(err) {
            $state.go('landing.default');
          });
        }
   }
})();
