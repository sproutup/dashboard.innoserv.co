'use strict';

(function() {

    angular
        .module('company')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['$scope', 'CompanyService', 'TrialService', '$state', 'CampaignService', '$location'];

    function CompanyController($scope, CompanyService, TrialService, $state, CampaignService, $location) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.find = find;
        vm.findOne = findOne;

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
            $location.path('company/' + response.id);

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

          company.$update({
            companyId: $state.params.companyId
          }, function () {
            $location.path('company/' + company.id);
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
            companyId: $state.params.companyId
          }, function() {
            vm.company = company;
          }, function(err) {
            $state.go('landing.default');
          });

          var campaigns = CampaignService.listCampaigns().query({
            id: $state.params.companyId
          }, function() {
            vm.campaigns = campaigns;
          });
        }
    }
})();