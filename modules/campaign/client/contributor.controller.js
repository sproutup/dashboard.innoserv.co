'use strict';

(function() {

  angular
    .module('campaign')
    .controller('ContributorController', ContributorController);

  ContributorController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService'];

  function ContributorController($scope, $rootScope, $state, CampaignService) {
    var vm = this;
    vm.getDetails = getDetails;
    vm.approveTrial = approveTrial;

    function getDetails() {
      CampaignService.contribution().get({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, function(response) {
        vm.item = response;
      }, function(err) {
        console.log(err);
      });
    }

    function approveTrial() {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { state: 1 }, function(response) {
        var user = vm.item.user;
        vm.item = response;
        vm.item.user = user;
      }, function(err) {
        console.log(err);
      });
    }
  }

})();