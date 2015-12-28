'use strict';

(function() {

    angular
        .module('campaign')
        .controller('CampaignController', CampaignController);

    CampaignController.$inject = ['$scope', 'TrialService', '$state', 'CampaignService', '$location', 'Authentication', 'TeamService'];

    function CampaignController($scope, TrialService, $state, CampaignService, $location, Authentication, TeamService) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.cancel = cancel;
        vm.find = find;
        vm.findOne = findOne;

        function create(isValid) {
          vm.error = null;

          // if (!isValid) {
          //   vm.invalid = true;
          //   $scope.$broadcast('show-errors-check-validity', 'campaignForm');

          //   return false;
          // } else {
          //   vm.invalid = false;
          // }

          // Create new campaign object
          var CampaignObj = CampaignService.campaigns();
          var campaign = new CampaignObj({
            companyId: Authentication.user.sessionCompany.companyId,
            description: vm.description
          });

          // Redirect after save
          campaign.$save(function (response) {
            $location.path('campaign/' + response.id + '/edit');

            // Clear form fields
            vm.description = '';
          }, function (errorResponse) {
            console.log(errorResponse);
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
          console.log('update being called');
          vm.error = null;

          // if (!isValid) {
          //   vm.invalid = true;
          //   $scope.$broadcast('show-errors-check-validity', 'articleForm');

          //   return false;
          // } else {
          //   vm.invalid = false;
          // }

          var campaign = vm.campaign;

          campaign.$update({
            campaignId: $state.params.campaignId
          }, function () {
            $location.path('campaign/' + campaign.id + '/edit');
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $location.path('campaign/' + vm.campaign.id + '/edit');
        }

        function find() {
          TeamService.listByUser().query({
            userId: Authentication.user.id
          },function() {
            Authentication.user.sessionCompany = $scope.myCompanies[0];
            vm.campaigns = CampaignService.listByCompany().query({
              companyId: Authentication.user.sessionCompany.companyId
            }, function() {
              console.log('coo');
            }, function(err) {
              console.log(err);
            });
          });
        }

        function findOne() {
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