'use strict';

(function() {

    angular
        .module('product')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', 'TrialService', '$state', 'ProductService', '$location', 'Authentication', 'TeamService'];

    function ProductController($scope, TrialService, $state, ProductService, $location, Authentication, TeamService) {
        var vm = this;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.cancel = cancel;
        vm.find = find;
        vm.findOne = findOne;
        vm.editProduct = editProduct;

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            $scope.$broadcast('show-errors-check-validity', 'productForm');

            return false;
          } else {
            vm.invalid = false;
          }

          // Create new product object
          var ProductObj = ProductService.products();
          var product = new ProductObj({
            companyId: Authentication.user.sessionCompany.companyId,
            name: vm.name,
            description: vm.description,
            tagline: vm.tagline
          });

          // Redirect after save
          product.$save(function (response) {
            $location.path('product/' + response.id + '/edit');

            // Clear form fields
            vm.description = '';
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function remove(product) {
          if (product) {
            product.$remove({
              productId: product.id
            }, function() {
              $state.go('user.product.list');
            });

            for (var i in vm.companies) {
              if (vm.companies[i] === product) {
                vm.companies.splice(i, 1);
              }
            }
          } 
          // else {
            // test this 
            // vm.product.$remove(function () {
            //   $location.path('user.product');
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

          var product = vm.product;

          product.$update({
            productId: $state.params.productId
          }, function () {
            $location.path('products');
          }, function (errorResponse) {
            vm.success = null;
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $location.path('products');
        }

        function find() {
          TeamService.listByUser().query({
            userId: Authentication.user.id
          },function() {
            Authentication.user.sessionCompany = $scope.myCompanies[0];
            vm.products = ProductService.listByCompany().query({
              companyId: Authentication.user.sessionCompany.companyId
            }, function() {
              console.log('products found');
            }, function(err) {
              console.log(err);
            });
          });
        }

        function findOne() {
          vm.success = false;

          var product = ProductService.products().get({
            productId: $state.params.productId
          }, function() {
            vm.product = product;
          }, function(err) {
            $state.go('landing.default');
          });
        }

        function editProduct() {
          $state.go('user.product.edit', { productId: $state.params.productId });
        }
    }
})();