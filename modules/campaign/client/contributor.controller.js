'use strict';

(function() {

  angular
    .module('campaign')
    .controller('ContributorController', ContributorController);

  ContributorController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService'];

  function ContributorController($scope, $rootScope, $state, CampaignService) {
    var contributor = this;
    contributor.getDetails = getDetails;
    contributor.approveRequest = approveRequest;

    function getDetails() {
      CampaignService.contribution().get({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, function(response) {
        contributor.item = response;
      }, function(err) {
        console.log(err);
      });
    }

    function approveRequest(request) {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { state: 1 }, function(response) {
        var user = contributor.item.user;
        contributor.item = response;
        contributor.item.user = user;
        request.state = 1;
      }, function(err) {
        console.log(err);
      });
    }
  }

})();