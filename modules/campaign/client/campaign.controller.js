'use strict';

(function() {

    angular
        .module('campaign')
        .controller('CampaignController', CampaignController);

    CampaignController.$inject = ['$scope', '$rootScope', 'TrialService', '$state', 'CampaignService', '$location', 'Authentication', 'TeamService', 'ProductService', '$cookieStore'];

    function CampaignController($scope, $rootScope, TrialService, $state, CampaignService, $location, Authentication, TeamService, ProductService, $cookieStore) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.cancel = cancel;
        vm.find = find;
        vm.findOne = findOne;

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
          var CampaignObj = CampaignService.campaigns();
          var campaign = new CampaignObj({
            companyId: Authentication.user.sessionCompany.id,
            description: vm.description,
            type: vm.type,
            name: vm.name
          });
          
          if (vm.product) {
            campaign.productId = vm.product.id;
          }

          // Redirect after save
          campaign.$save(function (response) {
            $location.path('campaign/' + response.id + '/edit');
            // Clear form fields
            vm.description = '';
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function remove(campaign) {
          if (campaign) {
            campaign.$remove({
              campaignId: campaign.id
            }, function() {
              $state.go('user.campaign.list');
            });

            for (var i in vm.companies) {
              if (vm.companies[i] === campaign) {
                vm.companies.splice(i, 1);
              }
            }
          } 
          // else {
            // test this 
            // vm.campaign.$remove(function () {
            //   $location.path('user.campaign');
            // });
          // }
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
            $location.path('campaigns');
          }, function (errorResponse) {
            vm.success = null;
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $location.path('campaigns');
        }

        function find() {
          if (Authentication.user.sessionCompany) {
            makeCall();
          } else {
            $scope.$watch(Authentication.user.sessionCompany.id, function() {
              makeCall();
            });
          }

          function makeCall() {
            vm.campaigns = CampaignService.listByCompany().query({
              companyId: Authentication.user.sessionCompany.id
            }, function() {
              console.log('coo');
            }, function(err) {
              console.log(err);
            });
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
        }

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

        findProducts();

        if ($rootScope.startingCampaign) {
          vm.product = $rootScope.startingCampaign;
        }
    }
})();