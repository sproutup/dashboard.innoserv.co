'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company.navbar.template', {
        url: '/template',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'TemplateController',
        controllerAs: 'vm'
      })
      .state('company.navbar.template.list', {
        url: 's',
        templateUrl: 'modules/campaign/client/template/list-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('company.navbar.template.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/template/create-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('company.navbar.template.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/template/template.html'
      })
      .state('company.navbar.template.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/template/edit-template.view.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
