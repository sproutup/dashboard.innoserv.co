'use strict';

(function() {

    angular
        .module('company')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['$scope', 'CompanyService', 'TrialService', '$state', 'CampaignService', '$location', 'Authentication', 'Menus'];

    function CompanyController($scope, CompanyService, TrialService, $state, CampaignService, $location, Authentication, Menus) {
        var vm = this;
        vm.success = false;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.find = find;
        vm.findOne = findOne;
        vm.findMyCompany = findMyCompany;
        vm.findByStateParam = findByStateParam;
        vm.authentication = Authentication;
        vm.company = {};

        // Get the topbar menu
        vm.menu = Menus.getMenu('user.company.profile.menu');
console.log('menu:', vm.menu);

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            //$scope.$broadcast('show-errors-check-validity', 'companyForm');

            return false;
          } else {
            vm.invalid = false;
          }

          // Create new Company object
          var CompanyObj = CompanyService.company();
          var company = new CompanyObj({
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
        }

        function update(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            //$scope.$broadcast('show-errors-check-validity', 'articleForm');

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
          CompanyService.company().query(function(data){
            vm.companies = data;
          });
        }

        function findByStateParam() {
          console.log('find by state');
          vm.company1 = CompanyService.companyBySlug()
            .get({companySlug: $state.params.companySlug}, function(data){
              vm.company = data;
            });
        }

        function select(company) {
          vm.authentication.setCompany(company);
        }

        function findOne() {
          var company;
          if (Authentication.user.sessionCompany) {
            company = CompanyService.company().get({
              companyId: Authentication.user.sessionCompany.id
            }, function() {
              vm.company = company;
            }, function(err) {
              $state.go('landing.default');
            });
          } else if ($state.params.companyId) {
            company = CompanyService.company().get({
              companyId: $state.params.companyId
            }, function() {
              vm.company = company;
            }, function(err) {
              $state.go('landing.default');
            });
          }

          var campaigns = CampaignService.listByCompany().query({
            companyId: $state.params.companyId
          }, function() {
            vm.campaigns = campaigns;
          });
        }

        function findMyCompany() {
          var company = CompanyService.company().get({
            companyId: Authentication.user.sessionCompany.id
            //id: Authentication.user.sessionCompany.id
          }, function() {
            vm.company = company;
          }, function(err) {
            $state.go('landing.default');
          });
        }
   }
})();
