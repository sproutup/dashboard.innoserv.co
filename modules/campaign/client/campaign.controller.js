'use strict';

angular
  .module('campaign')
  .controller('CampaignController', CampaignController);

CampaignController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService', '$location', 'Authentication', 'Menus', 'ProductService', '$uibModal', 'ContentService', '$http', 'company'];

function CampaignController($scope, $rootScope, $state, CampaignService, $location, Authentication, Menus, ProductService, $modal, ContentService, $http, company) {
  var vm = this;
  vm.create = create;
  // vm.initTemplate = initTemplate;
  vm.remove = remove;
  vm.update = update;
  vm.cancel = cancel;
  vm.find = find;
  vm.findOne = findOne;
  vm.redirect = redirect;
  vm.redirectToEdit = redirectToEdit;
  vm.findContent = findContent;
  vm.findOneContent = findOneContent;
  vm.openModal = openModal;
  vm.startCampaign = startCampaign;
  vm.stopCampaign = stopCampaign;
  vm.returnMatch = returnMatch;
  vm.viewDetails = viewDetails;
  vm.closeDetails = closeDetails;
  vm.approveRequest = approveRequest;
  vm.findContributors = findContributors;
  vm.findProducts = findProducts;
  vm.saveBannerPicture = saveBannerPicture;
  vm.state = $state;
  vm.ProductService = ProductService;
  vm.socialOptions = [
    {  title: 'YouTube',
       type: 'yt',
       selected: true },
    {  title: 'Vine',
       type: 'vi' },
    {  title: 'Instagram',
       type: 'ig' },
     {  title: 'Blogger',
       type: 'bl' }
  ];

  // Get the topbar menu
  vm.menu = Menus.getMenu('company.campaign.menu');
  vm.trialmenu = Menus.getMenu('campaign.trial.menu');

  function create(item) {
    // // temporary hack
    item.typeOfContent = [];
    for (var s = 0; s < vm.socialOptions.length; s++) {
      if (vm.socialOptions[s].type) {
        item.typeOfContent.push(vm.socialOptions[s].type);
      }
    }

    if (vm.banner) {
      item.banner = {
        fileId: vm.banner.id
      };
    }

    item.$save(function (response) {
      item = {};
      $state.go('slug.company.navbar.campaign.edit.trial', { campaignId: response.id });
      // Clear form fields
    }, function (errorResponse) {
      vm.error = errorResponse.data.message;
    });
  }

  function remove(campaign) {
    if (campaign) {
      campaign.$remove({
        campaignId: campaign.id
      }, function() {
        $state.go('slug.company.navbar.campaign.list');
      });

      for (var i in vm.companies) {
        if (vm.companies[i] === campaign) {
          vm.companies.splice(i, 1);
        }
      }
    }
  }

  function update() {
    vm.error = null;
    CampaignService.updateCampaign(vm.item)
      .then(function(result) {
        $state.go('slug.company.navbar.campaign.list');
      }, function(reason) {
        vm.error = reason;
      });
  }

  function startCampaign () {
    vm.item.status = 1;
    CampaignService.updateCampaign(vm.item)
      .then(function(result) {
        $state.go('slug.company.navbar.campaign.confirmation', { campaignId: vm.item.id });
      }, function(reason) {
        vm.error = reason;
      });
  }

  function stopCampaign () {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj(vm.item);
    campaign.status = -1;
    campaign.$update({
      campaignId: $state.params.campaignId
    }, function (response) {
      vm.succes = true;
      $state.go('slug.company.navbar.campaign.list');
    }, function (errorResponse) {
      vm.success = null;
      vm.error = errorResponse.data.message;
    });
  }

  function cancel() {
    $state.go('slug.company.navbar.campaign.list');
  }

  function find() {
    console.log('campaign.find: ', company.id);
    CampaignService.listByCompany().query({
      companyId: company.id
    }, function(response) {
      vm.campaigns = response;
    }, function(err) {
      console.log(err);
    });
  }

  function findOne() {
    vm.success = false;
    vm.item = {};

    CampaignService.campaigns().get({
      campaignId: $state.params.campaignId
    }, function(res) {
      vm.item = res;
    }, function(err) {
      $state.go('landing.default');
    });
  }

  function redirect() {
    if (vm.item.type) {
      makeCall();
    } else {
      $scope.$watch('vm.item.type', function(val) {
        if(val) makeCall();
      });
    }

    function makeCall() {
      console.log('type:', vm.item.type);
      switch(vm.item.type){
        case 'trial':
          $state.go('slug.company.navbar.campaign.view.trial.requests', {}, {location: 'replace'});
          break;
        case 'contest':
          $state.go('slug.company.navbar.campaign.view.contest.requests', {}, {location: 'replace'});
          break;
        default:
          $state.go('slug.company.navbar.campaign.list', {}, {location: 'replace'});
      }
    }
  }

  function redirectToEdit() {
    if (!vm.item.type) {
      var listener = $scope.$watch('vm.item.type', function(val) {
        if(val) {
          listener();
          redirectToEdit();
        }
      });
      return;
    }

    switch(vm.item.type){
      case 'trial':
        $state.go('slug.company.navbar.campaign.edit.trial', {}, {location: 'replace'});
        break;
      case 'contest':
        $state.go('slug.company.navbar.campaign.edit.contest', {}, {location: 'replace'});
        break;
      default:
        $state.go('slug.company.navbar.campaign.list', {}, {location: 'replace'});
    }
  }

  function findContent() {
    vm.success = false;
    vm.content = {};

    CampaignService.content().query({
      campaignId: $state.params.campaignId
    }, function(res) {
      vm.content = res;
    }, function(err) {
      $state.go('landing.default');
    });
  }

  function findOneContent() {
    ContentService.content().get({
      contentId: $state.params.contentId
    }, function(res) {
      vm.contentItem = res;
    }, function(err) {
      $state.go('landing.default');
    });
  }

  function findContributors() {
    CampaignService.contributors().get({
      campaignId: $state.params.campaignId
    }, function(res) {
      vm.item = res.campaign;
      vm.contributors = res.items;
      filterContributors();
    }, function(err) {
      $state.go('landing.default');
    });
  }

  function filterContributors() {
    vm.requested = vm.contributors.filter(function(item) {
      return item.state === 0;
    });

    vm.approved = vm.contributors.filter(function(item) {
      return item.state === 1;
    });

    vm.completed = vm.contributors.filter(function(item) {
      return item.state === 10;
    });
  }

  function findProducts() {
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


  function openModal(item) {
    var modalInstance = $modal.open({
      templateUrl: 'modules/core/client/delete-confirmation.html',
      controller: 'DeleteController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'Deleting a campaign is risky business.'; }
      }
    });

    modalInstance.result.then(function () {
      remove(item);
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function returnMatch (actual, expected) {
    return angular.equals(expected, actual);
  }

  function viewDetails(request) {
    vm.request = request;
  }

  function closeDetails() {
    vm.details = false;
  }

  function approveRequest(request) {
    console.log(request);
    request.state = 1;
    request.$update(function(response) {
      console.log(response);
      vm.success = true;
    }, function (errorResponse) {
      console.log(errorResponse);
      vm.error = errorResponse.data.message;
    });
  }

  function saveBannerPicture(fileId, campaignId) {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj();
    campaign.banner = { fileId: fileId };
    campaign.id = campaignId;

    CampaignService.updateCampaign(campaign)
      .then(function(result) {
        vm.succes = true;
      }, function(reason) {
        vm.error = reason;
      });
  }
}
