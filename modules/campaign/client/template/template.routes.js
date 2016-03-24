'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('slug.company.navbar.template', {
        url: '/template',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'TemplateController',
        controllerAs: 'vm'
      })
      .state('slug.company.navbar.t', {
        url: '/t/:templateId',
        abstract: true,
        template: '<section ng-init="template.load()"><div ui-view></div></section>',
        controller: 'TemplateController',
        controllerAs: 'template'
      })
      .state('slug.company.navbar.template.list', {
        url: 's',
        templateUrl: 'modules/campaign/client/template/list-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.select', {
        url: '/select/:productId',
        templateUrl: 'modules/campaign/client/template/select-template.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('slug.company.navbar.template.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/template/create-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.trialcreate', {
        url: '/trial/create',
        templateUrl: 'modules/campaign/client/template/create-trial-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.contestcreate', {
        url: '/contest/create',
        templateUrl: 'modules/campaign/client/template/create-contest-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/template/template.html'
      })
      .state('slug.company.navbar.template.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/template/edit-template.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.trialedit', {
        url: '/:campaignId/trial-edit',
        templateUrl: 'modules/campaign/client/template/edit-trial-template.html',
        data: {
          roles: ['admin']
        }
      })
      .state('slug.company.navbar.template.contestedit', {
        url: '/:campaignId/contest-edit',
        templateUrl: 'modules/campaign/client/template/edit-contest-template.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
