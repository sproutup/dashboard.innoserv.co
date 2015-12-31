'use strict';

angular.module('file').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.file', {
        url: '/file',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'FileController',
        controllerAs: 'vm'
      })
      .state('user.file.list', {
        url: 's',
        templateUrl: 'modules/file/client/list.html'
      })
     .state('user.file.create', {
        url: '/create',
        templateUrl: 'modules/file/client/create.html'
      })
      .state('user.file.view', {
        url: '/:fileId',
        templateUrl: 'modules/file/client/file.html'
      })
      .state('user.file.edit', {
        url: '/:fileId/edit',
        templateUrl: 'modules/file/client/edit.html'
      });
  }
]);
