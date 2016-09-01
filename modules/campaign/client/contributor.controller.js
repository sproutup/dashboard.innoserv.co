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
    vm.loadDetailsFinish = false;
    vm.price = {
      low: 0,
      high: 100
    };

    function findChannel(){
      console.log('find channel by ref: ', $state.params.campaignId);
      var channelKey = $state.params.campaignId + ':' + $state.params.userId;
      var myChannelRef = MessageService.myChannelRef();
      var item = new myChannelRef();
      // Use save to post a request. we are not really saving anything
      item.$save({id: channelKey}, function (channel) {
        if(channel.id){
          vm.channelId = channel.id;
        }
      }, function (errorResponse) {
        console.log(errorResponse);
        vm.error = errorResponse.data.message;
      });
    }

    function startChannel(){
      var campaignChannel = MessageService.campaignChannel();
      var item = new campaignChannel({
        userId: $state.params.userId
      });
      // Use save to post a request. we are not really saving anything
      item.$save({campaignId: $state.params.campaignId}, function (channel) {
        if(channel.id){
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
        vm.loadDetailsFinish = true;
        vm.item = response;
        vm.userId = 5;//response.userId;
        vm.campaignId = response.campaignId;
	if(vm.item.user.services.youtube && vm.item.user.services.youtube.metrics.followers < 100000){
	  vm.price.low = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.01;
	  vm.price.high = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.04;
	}
	else if(vm.item.user.services.youtube && vm.item.user.services.youtube.metrics.followers > 900000){
	  vm.price.low = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.06;
	  vm.price.high = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.10;
	}
	else if(vm.item.user.services.youtube){
	  vm.price.low = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.03;
	  vm.price.high = (vm.item.user.services.youtube.metrics.viewCount / vm.item.user.services.youtube.metrics.videoCount) * 0.07;
	}
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

    function productShipped(item) {
      if (item && !item.trial) {
         item.trial = {};
      }
      var now = Date.now();
      item.trial.shippingState = 1;
      item.trial.shippingDate = now;
      ContributorService.update(item);
    }

    function updateShippingState(state) {
      var now = new Date();
      CampaignService.contribution().update({
        userId: $state.params.userId,
        campaignId: $state.params.campaignId
      }, { trial: { shippingState: state, shippingDate: now } }, function(response) {
        var user = vm.item.user;
        vm.item = response;
        vm.item.user = user;
      }, function(err) {
        console.log(err);
      });
    }

  }
})();
