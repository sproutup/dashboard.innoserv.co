'use strict';

angular
  .module('campaign')
  .controller('CampaignController', CampaignController);

CampaignController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService', '$location', 'Authentication', 'Menus', 'ProductService', '$uibModal', 'ContentService', '$http', 'company', 'ContributorService', 'slugitem', 'lodash'];

function CampaignController($scope, $rootScope, $state, CampaignService, $location, Authentication, Menus, ProductService, $modal, ContentService, $http, company, ContributorService, slugitem, _) {
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
  vm.metricQueryViews = metricQueryViews;
  vm.findOneContent = findOneContent;
  vm.openModal = openModal;
  vm.startCampaign = startCampaign;
  vm.stopCampaign = stopCampaign;
  vm.returnMatch = returnMatch;
  vm.returnDrafts = returnDrafts;
  vm.atLeast = atLeast;
  vm.viewDetails = viewDetails;
  vm.closeDetails = closeDetails;
  vm.approveRequest = approveRequest;
  vm.findContributors = findContributors;
  vm.findProducts = findProducts;
  vm.saveBannerPicture = saveBannerPicture;
  vm.state = $state;
  vm.ProductService = ProductService;
  vm.ContributorService = ContributorService;
  vm.openStopCampaignModal = openStopCampaignModal;
  vm.openApproveCampaignModal = openApproveCampaignModal;
  vm.openDisapproveCampaignModal = openDisapproveCampaignModal;
  vm.greaterThan = greaterThan;
  vm.filterRequested = filterRequested;
  vm.filterApproved = filterApproved;
  vm.updateContributor = updateContributor;
  vm.user = Authentication.user;
  vm.totalFollowers = 0;
  vm.totalViews = 0;
  vm.socialOptions = [
    {  title: 'YouTube',
       type: 'yt' },
    {  title: 'Instagram',
       type: 'ig' },
    {  title: 'Twitter',
       type: 'tw' },
    {  title: 'Periscope',
       type: 'ps' },
    {  title: 'Vine',
       type: 'vi' },
    {  title: 'Snapchat',
       type: 'sc' },
    {  title: 'Blog',
       type: 'bl' }
  ];

  // Get the topbar menu
  vm.menu = Menus.getMenu('company.campaign.menu');
  vm.trialmenu = Menus.getMenu('campaign.trial.menu');

  function create(item, socialOptions) {
    item.companyId = slugitem.data.item.id;

    // for each social option selected, push it onto the typeOfContent array
    item.typeOfContent = [];
    for (var s = 0; s < socialOptions.length; s++) {
      if (socialOptions[s].selected) {
        item.typeOfContent.push(socialOptions[s].type);
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
    // for each social option selected, push it onto the typeOfContent array
    vm.item.typeOfContent = [];
    for (var s = 0; s < vm.socialOptions.length; s++) {
      if (vm.socialOptions[s].selected) {
        vm.item.typeOfContent.push(vm.socialOptions[s].type);
      }
    }

    CampaignService.updateCampaign(vm.item)
      .then(function(result) {
        $state.go('slug.company.navbar.campaign.list');
      }, function(reason) {
        vm.error = reason;
      });
  }

  function startCampaign () {
    // for each social option selected, push it onto the typeOfContent array
    vm.item.typeOfContent = [];
    for (var s = 0; s < vm.socialOptions.length; s++) {
      if (vm.socialOptions[s].selected) {
        vm.item.typeOfContent.push(vm.socialOptions[s].type);
      }
    }
    vm.item.status = 1;
    CampaignService.updateCampaign(vm.item)
      .then(function(result) {
        $state.go('slug.company.navbar.campaign.confirmation', { campaignId: vm.item.id });
      }, function(reason) {
        vm.error = reason;
      });
  }

  function openStopCampaignModal() {
    var modalInstance = $modal.open({
      templateUrl: 'modules/campaign/client/end-campaign.html',
      controller: 'EndCampaignController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'This campaign won\'t be shown on SproutUp anymore after you end it.'; }
      }
    });

    modalInstance.result.then(function () {
      stopCampaign();
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function stopCampaign () {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj(vm.item);
    campaign.status = -5;
    campaign.ended = new Date();
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

  function openApproveCampaignModal() {
    var modalInstance = $modal.open({
      templateUrl: 'modules/campaign/client/approve-campaign.html',
      // We're using the endCampaignController because all we're doing in there is confirming or dismissing
      controller: 'EndCampaignController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'This campaign will go live on sproutup.co.'; }
      }
    });

    modalInstance.result.then(function () {
      approveCampaign();
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function approveCampaign () {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj(vm.item);
    campaign.status = 10;
    campaign.started = new Date();
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

  function openDisapproveCampaignModal() {
    var modalInstance = $modal.open({
      templateUrl: 'modules/campaign/client/disapprove-campaign.html',
      // We're using the endCampaignController because all we're doing in there is confirming or dismissing
      controller: 'EndCampaignController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'This campaign will be disapproved.'; }
      }
    });

    modalInstance.result.then(function () {
      disapproveCampaign();
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function disapproveCampaign () {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj(vm.item);
    campaign.disapproved = new Date();
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

  function cancel(form) {
    if (form.$dirty) {
      openExitModal();
    } else {
      $state.go('slug.company.navbar.campaign.list');
    }
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
    vm.item.typeOfContent = [];

    vm.item = CampaignService.campaigns().get({
      campaignId: $state.params.campaignId
    }, function(res) {
      // for each option, mark it selected if it's in the vm.item's typeOfContent
      //if(!vm.socialOptions) {
        for (var s = 0; s < vm.socialOptions.length; s++) {
          if (vm.item.typeOfContent && vm.item.typeOfContent.indexOf(vm.socialOptions[s].type) > -1) {
           vm.socialOptions[s].selected = true;
          }
        }
      //}
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

    metricQueryViews();

    vm.content = CampaignService.content().query({
      campaignId: $state.params.campaignId
    }, function(res) {
      vm.success = true;
    }, function(err) {
      $state.go('landing.default');
    });
  }

  function metricQueryViews() {
    vm.totalViews = 0;

    vm.content = CampaignService.metricQueryViews('views').query({
      campaignId: $state.params.campaignId
    }, function(res) {
      vm.viewsPerDay = res;
      vm.totalViews = res.views_per_day.buckets[res.views_per_day.buckets.length-1].cumulative.value;
      vm.labels = _.map(res.views_per_day.buckets, function(n){
        return n.key_as_string;
      });
      vm.series = ['Series A'];
      vm.data = [_.map(res.views_per_day.buckets, function(n){
        return n.cumulative.value;
      })];
      vm.onClick = function (points, evt) {
        console.log(points, evt);
      };
      vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      vm.optionsxx = {
      scales: {
        yAxes: [
          {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
          },
          {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
          }
        ]
      }
      };
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

  function findContributors(refreshing) {
    vm.fetchingRequests = true;
    ContributorService.listByCampaign($state.params.campaignId, refreshing)
      .then(function(result) {
        vm.fetchingRequests = false;
	vm.totalFollowers = _.reduce(result.items, function(sum, n){ 
          return sum + (n.user.services.followers ? n.user.services.followers : 0);
	}, 0);
        vm.success = true;
      }, function(reason) {
        vm.error = reason;
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

  function returnDrafts (actual, expected) {
    if (actual === 0 || actual === -1) {
      return true;
    } else {
      return false;
    }
  }

  function atLeast (actual, expected) {
    if (actual >= expected) {
      return true;
    } else {
      return false;
    }
  }

  function viewDetails(request) {
    vm.request = request;
  }

  function closeDetails() {
    vm.details = false;
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

  function saveBannerPicture(fileId, campaignId) {
    var CampaignObj = CampaignService.campaigns();
    var campaign = new CampaignObj();
    campaign.banner = { fileId: fileId };
    campaign.id = campaignId;

    CampaignService.updateCampaign(campaign)
      .then(function(result) {
        vm.succes = true;
        vm.item.banner.fileId = fileId;
      }, function(reason) {
        vm.error = reason;
      });
  }

  function openExitModal() {
    var modalInstance = $modal.open({
      templateUrl: 'modules/core/client/exit-confirmation.html',
      controller: 'DeleteController',
      controllerAs: 'vm',
      resolve: {
        message: function() { return 'Your changes will be lost if you exit.'; }
      }
    });

    modalInstance.result.then(function () {
      $state.go('slug.company.navbar.campaign.list');
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function greaterThan(property, value) {
    return function(item){
      return item[property] > value;
    };
  }

  function filterRequested() {
    console.log('here');
    vm.query = {};
    vm.query.state = 0;
    vm.filtering = 'requested';
  }

  function filterApproved() {
    console.log('yo');
    vm.query = vm.greaterThan('state', 0);
    vm.filtering = 'approved';
  }

  function updateContributor(item) {
    var ContributorObj = ContributorService.contributorResource();
    var contributor = new ContributorObj(item);

    ContributorService.update(contributor)
      .then(function(result) {
        console.log(result);
        vm.success = true;
      }, function(reason) {
        vm.error = reason;
      });
  }
}
