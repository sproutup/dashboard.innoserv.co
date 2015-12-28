'use strict';

(function() {

    angular
        .module('campaign')
        .controller('CampaignController', CampaignController);

    CampaignController.$inject = ['$scope', 'TrialService', '$state', 'CampaignService', '$location'];

    function CampaignController($scope, TrialService, $state, CampaignService, $location) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
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

          console.log('here');

          // Create new campaign object
          var CampaignObj = CampaignService.Campaigns();
          var campaign = new CampaignObj({
            companyId: 6085161590821224448,
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
            campaign.$remove();

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
            $location.path('campaign/' + campaign.id);
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function find() {
          vm.campaigns = CampaignService.query();
        }

        function findOne() {
          console.log($state.params);
          var campaign = CampaignService.Campaigns().query({
            campaignId: $state.params.campaignId
          }, function() {
            vm.campaign = campaign;
          }, function(err) {
            $state.go('landing.default');
          });

          // var campaigns = CampaignService.listCampaigns().query({
          //   id: $state.params.campaignId
          // }, function() {
          //   vm.campaigns = campaigns;
          // });
        }
    }
})();