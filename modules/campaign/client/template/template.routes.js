'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.template', {
        url: '/template',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'TemplateController',
        controllerAs: 'vm'
      })
      .state('user.template.list', {
        url: 's',
        templateUrl: 'modules/campaign/client/template/list-template.view.html'
      })
      .state('user.template.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/template/create-template.view.html'
      })
      .state('user.template.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/template/template.html'
      })
      .state('user.template.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/template/edit-template.html'
      });
  }
]);
