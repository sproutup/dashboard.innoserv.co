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
    contributor.productShipped = productShipped;

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
      updateRequestState(1, request);
    }

    function updateRequestState(state, request) {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { state: state }, function(response) {
        var user = contributor.item.user;
        contributor.item = response;
        contributor.item.user = user;
        if (request) {
          request.state = state;
        }
      }, function(err) {
        console.log(err);
      });
    }

    function productShipped() {
      updateShippingState(1);
    }

    function updateShippingState(state) {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { trial: { shippingState: state } }, function(response) {
        var user = contributor.item.user;
        contributor.item = response;
        contributor.item.user = user;
      }, function(err) {
        console.log(err);
      });
    }

  }
})();