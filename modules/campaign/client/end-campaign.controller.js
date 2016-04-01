'use strict';

angular
  .module('core')
  .controller('EndCampaignController', EndCampaignController);

EndCampaignController.$inject = ['$scope', '$uibModalInstance', 'message'];

function EndCampaignController($scope, $modalInstance, message) {
  var vm = this;
  vm.message = message;

  vm.confirm = function() {
    $modalInstance.close('disconnected');
  };

  vm.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
}