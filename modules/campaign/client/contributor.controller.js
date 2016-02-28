'use strict';

(function() {

  angular
    .module('campaign')
    .controller('ContributorController', ContributorController);

  ContributorController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService'];

  function ContributorController($scope, $rootScope, $state, CampaignService) {
    var vm = this;
    vm.getDetails = getDetails;
    vm.getCampaign = getCampaign;
    vm.approveRequest = approveRequest;
    vm.productShipped = productShipped;
    vm.userId = null;
    vm.campaignId = null;

    function getDetails() {
      CampaignService.contribution().get({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, function(response) {
        vm.item = response;
        vm.userId = 5;//response.userId;
        vm.campaignId = response.campaignId;
        sortLog();
      }, function(err) {
        console.log(err);
      });
    }

    function getCampaign() {
      return vm.campaignId;
    }

    function sortLog() {
      if (vm.item.log) {
        // Find approved logs
        vm.item.approved = vm.item.log.filter(function(item) {
          return item.state === 1;
        });

        // Find completed logs
        vm.item.completed = vm.item.log.filter(function(item) {
          return item.state === 10 || item.state === '10';
        });

      // vm.item.approved.sort(function(a,b){
      //   return b.created - a.created;
      // });

      // vm.item.approved.sort(function(a,b){
      //   return b.created - a.created;
      // });
      }
    }

    function approveRequest(request) {
      updateRequestState(1, request);
    }

    function updateRequestState(state, request) {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { state: state }, function(response) {
        var user = vm.item.user;
        vm.item = response;
        vm.item.user = user;
        sortLog();
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
        var user = vm.item.user;
        vm.item = response;
        vm.item.user = user;
        sortLog();
      }, function(err) {
        console.log(err);
      });
    }

  }
})();
