'use strict';

(function() {

  angular
    .module('campaign')
    .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$scope', '$rootScope', 'TrialService', '$state', 'CampaignService', 'TemplateService', '$location', 'Authentication', 'TeamService', 'ProductService', '$cookieStore', '$uibModal'];

    function TemplateController($scope, $rootScope, TrialService, $state, CampaignService, TemplateService, $location, Authentication, TeamService, ProductService, $cookieStore, $modal) {
      var vm = this;
      vm.init = init;
      vm.create = create;
      vm.remove = remove;
      vm.update = update;
      vm.cancel = cancel;
      vm.find = find;
      vm.load = load;
      vm.findOne = findOne;
      vm.item = {};
      vm.openModal = openModal;
      vm.types = [
        { id: 'trial',
          name: 'Product Trial'},
        { id: 'contents',
          name: 'Video Contest'}
      ];
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

      if ($state.params.productId) {
        vm.productId = $state.params.productId;
      }

      function init(type) {
        vm.item = {};
        vm.item.type = type;
      }

      function create(isValid) {
        vm.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'campaignForm');

          return false;
        }

        // Create new template
        var Template = TemplateService.template();
        var item = new Template(vm.item);
        item.companyId = $scope.company.company.id;
        item.productId = vm.productId;
        // for each social option selected, push it onto the typeOfContent array
        item.typeOfContent = [];
        for (var s = 0; s < vm.socialOptions.length; s++) {
          if (vm.socialOptions[s].selected) {
            item.typeOfContent.push(vm.socialOptions[s].type);
          }
        }

        // Redirect after save
        item.$save(function (response) {
          console.log('created this: ', response);
          $state.go('slug.company.navbar.template.list');
          // Clear form fields
        vm.description = '';
        }, function (errorResponse) {
          vm.error = errorResponse.data.message;
        });
      }

      function remove(item) {
        if (item) {
          item.$remove({
            campaignId: item.id
          }, function() {
            $state.go('slug.company.navbar.template.list');
          });

          // for (var i in vm.companies) {
          //   if (vm.companies[i] === campaign) {
          //     vm.companies.splice(i, 1);
          //   }
          // }
        }
        // else {
          // test this
          // vm.campaign.$remove(function () {
          //   $location.path('user.campaign');
          // });
        // }
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

        vm.item.$update(function () {
          console.log(vm.item);
          console.log(vm.item.tagline);
          $state.go('slug.company.navbar.template.list');
        }, function (errorResponse) {
          vm.success = null;
          vm.error = errorResponse.data.message;
        });
      }

      function cancel() {
        $state.go('slug.company.navbar.template.list');
      }

      function find() {
        vm.campaigns = TemplateService.template().query({
        }, function() {
          console.log('campaigns found');
        }, function(err) {
          console.log(err);
        });
      }

      function load() {
        vm.success = false;
        console.log('load');

        CampaignService.campaigns().get({
          campaignId: $state.params.templateId
        }, function(val) {
          vm.item = val;
          vm.item.id = null;
          vm.item.status = 0;
          vm.item.name = '';
          vm.item.description = '';
          vm.item.tagline = '';
          vm.item.start = '';
          vm.item.end = '';
          // for each option, mark it selected if it's in the vm.item's typeOfContent
          for (var s = 0; s < vm.socialOptions.length; s++) {
            if (vm.item.typeOfContent.indexOf(vm.socialOptions[s].type) > -1) {
             vm.socialOptions[s].selected = true;
            }
          }
        }, function(err) {
          $state.go('landing.default');
        });
      }

      function findOne() {
        vm.success = false;
        // vm.item = null;

        var campaign = TemplateService.template().get({
          campaignId: $state.params.campaignId
        }, function() {
          vm.item = campaign;
          // for each option, mark it selected if it's in the vm.item's typeOfContent
          for (var s = 0; s < vm.socialOptions.length; s++) {
            if (vm.item.typeOfContent.indexOf(vm.socialOptions[s].type) > -1) {
             vm.socialOptions[s].selected = true;
            }
          }
          console.log(vm.item);
        }, function(err) {
          $state.go('landing.default');
        });
      }

      function openModal(item) {
        var modalInstance = $modal.open({
          templateUrl: 'modules/core/client/delete-confirmation.html',
          controller: 'DeleteController',
          controllerAs: 'vm',
          resolve: {
            message: function() { return 'Deleting templates is risky business'; }
          }
        });

        modalInstance.result.then(function () {
          remove(item);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      }
    }
})();
