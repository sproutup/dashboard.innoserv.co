'use strict';

(function() {

  angular
    .module('campaign')
    .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$scope', '$rootScope', 'TrialService', '$state', 'CampaignService', 'TemplateService', '$location', 'Authentication', 'TeamService', 'ProductService', '$cookieStore'];

    function TemplateController($scope, $rootScope, TrialService, $state, CampaignService, TemplateService, $location, Authentication, TeamService, ProductService, $cookieStore) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.cancel = cancel;
        vm.find = find;
        vm.load = load;
        vm.findOne = findOne;
        vm.item = {};
        vm.types = [
          { id: 'trial', 
            name: 'Product Trial'},
          { id: 'contents',
            name: 'Video Contest'}
        ];

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'campaignForm');

            return false;
          }

          // Create new campaign object
          var Template = TemplateService.template();
          var item = new Template({
            companyId: $scope.company.company.id,
            description: vm.description,
            type: vm.type,
            name: vm.name
          });

          // Redirect after save
          item.$save(function (response) {
            $state.go('company.navbar.template.list');
            // Clear form fields
            vm.description = '';
          }, function (errorResponse) {
            vm.error = errorResponse.data.message;
          });
        }

        function remove(campaign) {
          if (campaign) {
            campaign.$remove({
              campaignId: campaign.id
            }, function() {
              $state.go('user.campaign.list');
            });

            for (var i in vm.companies) {
              if (vm.companies[i] === campaign) {
                vm.companies.splice(i, 1);
              }
            }
          } 
          // else {
            // test this 
            // vm.campaign.$remove(function () {
            //   $location.path('user.campaign');
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

          var campaign = vm.campaign;

          campaign.$update({
            campaignId: $state.params.campaignId
          }, function () {
            $state.go('company.navbar.template.list');
          }, function (errorResponse) {
            vm.success = null;
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $state.go('company.navbar.template.list');
        }

        function find() {
          vm.campaigns = TemplateService.template().query({
          }, function() {
            console.log('campaigns found');
          }, function(err) {
            console.log(err);
          });
        }

        function load() {
          vm.success = false;

          CampaignService.campaigns().get({
            campaignId: $state.params.templateId
          }, function(val) {
            vm.item = val;
          }, function(err) {
            $state.go('landing.default');
          });
        }

        function findOne() {
          vm.success = false;

          var campaign = CampaignService.campaigns().get({
            campaignId: $state.params.campaignId
          }, function() {
            vm.campaign = campaign;
          }, function(err) {
            $state.go('landing.default');
          });
        }
    }
})();
