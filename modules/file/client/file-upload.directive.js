'use strict';

angular
  .module('file')
  .directive('upFileUpload', fileUpload);

function fileUpload() {
  var directive = {
    restrict: 'EA',
    templateUrl: 'modules/file/client/file-upload.directive.html',
    scope: {
      user: '='
    },
    link: linkFunc,
    controller: 'FileController',
    controllerAs: 'vm',
    bindToController: true // because the scope is isolated
  };

  return directive;

  function linkFunc(scope, el, attr, ctrl) {
    console.log('LINK: file upload');
  }
}

