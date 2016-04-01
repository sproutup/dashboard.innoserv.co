'use strict';

(function() {

  angular
    .module('campaign')
    .controller('ContributorController', ContributorController);

  ContributorController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService', 'MessageService', 'ContributorService'];

  function ContributorController($scope, $rootScope, $state, CampaignService, MessageService, ContributorService) {
    var vm = this;
    vm.getDetails = getDetails;
    vm.getCampaign = getCampaign;
    vm.approveRequest = approveRequest;
    vm.productShipped = productShipped;
    vm.userId = null;
    vm.campaignId = null;
    vm.findChannel = findChannel;
    vm.startChannel = startChannel;

    function findChannel(){
      console.log('find channel by ref: ', $state.params.campaignId);
      var myChannelRef = MessageService.myChannelRef();
      var item = new myChannelRef({
        userId: $state.params.userId
      });
      // Use save to post a request. we are not really saving anything
      item.$save({refId: $state.params.campaignId}, function (channel) {
        if(channel.id){
          console.log('channel found: ', channel.id);
          vm.channelId = channel.id;
        }
      }, function (errorResponse) {
        console.log(errorResponse);
        vm.error = errorResponse.data.message;
      });
    }

    function startChannel(){
      console.log('start channel by ref: ', $state.params.campaignId);
      var campaignChannel = MessageService.campaignChannel();
      var item = new campaignChannel({
        userId: $state.params.userId
      });
      // Use save to post a request. we are not really saving anything
      item.$save({campaignId: $state.params.campaignId}, function (channel) {
        if(channel.id){
          console.log('channel created: ', channel.id);
          vm.channelId = channel.id;
        }
      }, function (errorResponse) {
        console.log(errorResponse);
        vm.error = errorResponse.data.message;
      });
    }

    function getDetails() {
      CampaignService.contribution().get({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, function(response) {
        vm.item = response;
        vm.userId = 5;//response.userId;
        vm.campaignId = response.campaignId;
      }, function(err) {
        console.log(err);
      });
    }

    function getCampaign() {
      return vm.campaignId;
    }

    function approveRequest(item) {
      item.state = 1;
      ContributorService.update(item)
        .then(function(result) {
          vm.success = true;
        }, function(reason) {
          vm.error = reason;
        });
    }

    function updateRequestState(state, request) {
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { state: state }, function(response) {
        var user = vm.item.user;
        vm.item = response;
        vm.item.user = user;
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
      }, function(err) {
        console.log(err);
      });
    }

  }
})();
