'use strict';

(function() {

  angular
    .module('file')
    .controller('FileController', FileController);

  FileController.$inject = ['$scope', '$state', 'FileService', '$location', 'Authentication'];

 function FileController($scope, $state, FileService, $location, Authentication) {
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
          var File = FileService.files();
          var file = new File({
            userId: Authentication.user.id,
            name: vm.name,
            bucket: vm.bucket,
            type: vm.type
          });

          // Redirect after save
          file.$save(function (response) {
            $location.path('file/' + response.id + '/edit');

            // Clear form fields
            vm.name = '';
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function remove(file) {
          if (file) {
            file.$remove({
              fileId: file.id
            }, function() {
              $state.go('user.file.list');
            });

            for (var i in vm.files) {
              if (vm.files[i] === file) {
                vm.files.splice(i, 1);
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

          var file = vm.file;

          file.$update({
            fileId: $state.params.fileId
          }, function () {
            $location.path('files');
          }, function (errorResponse) {
            vm.success = null;
            vm.error = errorResponse.data.message;
          });
        }

        function cancel() {
          $location.path('files');
        }

   function find() {
        console.log('files find');
        vm.files = FileService.listByUser().query({
          userId: Authentication.user.id
        }, function(res) {
          console.log('files found', res);
        }, function(err) {
          console.log(err);
        });
    }

        function findOne() {
          vm.success = false;

          var file = FileService.files().get({
            fileId: $state.params.fileId
          }, function() {
            vm.file = file;
          }, function(err) {
            $state.go('landing.default');
          });
        }

        function editProduct() {
          $state.go('user.file.edit', { fileId: $state.params.fileId });
        }
    }
})();
