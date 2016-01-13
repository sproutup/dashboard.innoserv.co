'use strict';

(function() {

    angular
        .module('campaign')
        .controller('CampaignController', CampaignController);

    CampaignController.$inject = ['$scope', '$rootScope', '$state', 'CampaignService', '$location', 'Authentication', 'Menus', 'ProductService'];

    function CampaignController($scope, $rootScope, $state, CampaignService, $location, Authentication, Menus, ProductService) {
        var vm = this;
        vm.create = create;
        vm.initTemplate = initTemplate;
        vm.remove = remove;
        vm.update = update;
        vm.cancel = cancel;
        vm.find = find;
        vm.findOne = findOne;

        // Get the topbar menu
        vm.menu = Menus.getMenu('company.campaign.menu');

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            $scope.$broadcast('show-errors-check-validity', 'campaignForm');

            return false;
          } else {
            vm.invalid = false;
          }

          // Create new campaign object
/*          var CampaignObj = CampaignService.campaigns();
          var campaign = new CampaignObj({
            companyId: $scope.company.company.id,
            description: vm.description,
            type: vm.type,
            name: vm.name
          }); */

          if (vm.product) {
            vm.item.productId = vm.product.id;
          }

          // Redirect after save
          vm.item.$save(function (response) {
            vm.item = {};
            $state.go('company.navbar.campaign.list');
            // Clear form fields
          }, function (errorResponse) {
            vm.error = errorResponse.data.message;
          });
        }

        function initTemplate() {
          vm.error = null;
          console.log('init template');

          if (!$scope.template.item.id) {
            console.log('wait for template');
            var listener = $scope.$watch('template.item.id', function(val) {
              if(val) {
                listener();
                initTemplate();
              }
            });
            return;
          }

          console.log('template loaded...!');
          // Create new campaign object
          var Campaign = CampaignService.campaigns();
          vm.item = new Campaign({
            companyId: $scope.company.company.id,
            description: $scope.template.item.description,
            type: $scope.template.item.type,
            name: $scope.template.item.name,
            status: 0
          });
        }


        function remove(campaign) {
          if (campaign) {
            campaign.$remove({
              campaignId: campaign.id
            }, function() {
              $state.go('company.navbar.campaign.list');
            });

            for (var i in vm.companies) {
              if (vm.companies[i] === campaign) {
                vm.companies.splice(i, 1);
              }
            }
          }
        }

        function update(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            $scope.$broadcast('show-errors-check-validity', 'articleForm');

            return false;
          } else {
            vm.invalid = false;
          }

          var campaign = vm.campaign;

          campaign.$update({
            campaignId: $state.params.campaignId
          }, function () {
           $state.go('company.navbar.campaign.view');
          }, function (errorResponse) {
            vm.success = null;
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $state.go('company.navbar.campaign.list');
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
            vm.campaigns = CampaignService.listByCompany().query({
              companyId: $scope.company.company.id
            }, function() {
              console.log('campaigns found');
            }, function(err) {
              console.log(err);
            });
          }
        }

          // TeamService.listByUser().query({
          //   userId: Authentication.user.id
          // },function() {
          //   Authentication.user.sessionCompany = $scope.myCompanies[0];
          //   vm.campaigns = CampaignService.listByCompany().query({
          //     companyId: Authentication.user.sessionCompany.companyId
          //   }, function() {
          //     console.log('coo');
          //   }, function(err) {
          //     console.log(err);
          //   });
          // });

        function findOne() {
          vm.success = false;

          var campaign = CampaignService.campaigns().get({
            campaignId: $state.params.campaignId
          }, function() {
            vm.campaign = campaign;
          }, function(err) {
            $state.go('landing.default');
          });
        }

        function findProducts() {
          if (Authentication.user.sessionCompany) {
            makeCall();
          } else {
            $scope.$watch(Authentication.user.sessionCompany.id, function() {
              makeCall();
            });
          }

          function makeCall() {
            vm.products = ProductService.listByCompany().query({
              companyId: Authentication.user.sessionCompany.id
            }, function() {
              console.log('products found');
            }, function(err) {
              console.log(err);
            });
          }

          // the code below will find companies for a normal user

          // TeamService.listByUser().query({
          //   userId: Authentication.user.id
          // },function() {
          //   Authentication.user.sessionCompany = $scope.myCompanies[0];
          //   vm.products = ProductService.listByCompany().query({
          //     companyId: Authentication.user.sessionCompany.companyId
          //   }, function() {
          //     console.log('products found');
          //   }, function(err) {
          //     console.log(err);
          //   });
          // });
        }

 //       findProducts();

 //       if ($rootScope.startingCampaign) {
 //         vm.product = $rootScope.startingCampaign;
 //       }
    }
})();
