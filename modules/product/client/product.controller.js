'use strict';

angular
  .module('product')
  .controller('ProductController', ProductController);

ProductController.$inject = ['$scope', 'TrialService', '$state', 'ProductService', '$location', 'Authentication', 'TeamService', '$rootScope', '$uibModal', 'CampaignService'];

function ProductController($scope, TrialService, $state, ProductService, $location, Authentication, TeamService, $rootScope, $modal, CampaignService) {
  var vm = this;
  vm.create = create;
  vm.remove = remove;
  vm.update = update;
  vm.find = find;
  vm.findOne = findOne;
  vm.editProduct = editProduct;
  vm.openModal = openModal;
  vm.findCampaigns = findCampaigns;
  vm.closePanel = closePanel;
  vm.ProductService = ProductService;

  function create() {
    var item = {
      companyId: $scope.company.company.id,
      name: vm.name,
      description: vm.description,
      tagline: vm.tagline,
      video: vm.video,
      url: vm.url
    };

    ProductService.add(item)
      .then(function(result) {
        vm.description = '';
        vm.name = '';
        vm.tagline = '';
        vm.video = '';
        vm.url = '';
      }, function(reason) {
        vm.error = reason;
      });
  }

  function remove() {
    if (vm.product) {
      ProductService.remove(vm.product)
        .then(function(result) {
          $state.go('slug.company.navbar.product.list');
          vm.success = true;
        }, function(reason) {
          vm.error = reason;
        });
    }
    // else {
      // test this
      // vm.product.$remove(function () {
      //   $location.path('user.product');
      // });
    // }
  }

  function update() {
    ProductService.update(vm.product)
      .then(function(result) {
        $state.go('slug.company.navbar.product.list');
      }, function(reason) {
        vm.error = reason;
      });
  }

  function find() {
    if ($scope.company.company.id) {
      makeCall();
    } else {
      $scope.$watch('company.company.id', function(val) {
        if(val) makeCall();
      });
    }

    function makeCall() {
      ProductService.listByCompany($scope.company.company.id)
        .then(function() {
          vm.success = true;
        }, function(reason) {
          vm.error = reason;
        });
    }
  }

  function findOne() {
    ProductService.findOne($state.params.productId)
      .then(function(result) {
        vm.product = result;
        vm.productInit = true;
      }, function(reason) {
        vm.error = reason;
      });
  }

  function editProduct() {
    $state.go('slug.company.navbar.product.edit', { productId: $state.params.productId });
  }

  function openModal(item) {
    var modalInstance = $modal.open({
      templateUrl: 'modules/core/client/delete-confirmation.html',
      controller: 'DeleteController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'This product will be gone forever.'; }
      }
    });

    modalInstance.result.then(function () {
      remove(item);
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function findCampaigns() {
    CampaignService.listByProduct().query({
      productId: $state.params.productId
    }, function(res) {
      vm.campaigns = res;
      vm.campaignInit = true;
    }, function(error) {
      vm.error = error;
      console.log(error);
    });
  }

  function closePanel() {
    vm.productInit = false;
    var currentState = $state.current.name;
    var index = currentState.lastIndexOf('.');
    var nextState = currentState.slice(0, index);
    $state.go(nextState);
  }

}
