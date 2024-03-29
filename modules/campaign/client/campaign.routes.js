'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('slug.company.navbar.campaign', {
        url: '/campaign',
        abstract: true,
        template: '<div data-ui-view></div>',
        controller: 'CampaignController',
        controllerAs: 'vm',
        resolve: {
          company: function(slugitem, SlugService) {
            console.log('resolve: ', SlugService.getCurrent());
            return SlugService.getCurrent();
          }
        }
      })
      .state('slug.company.navbar.campaign.list', {
        url: 's',
        templateUrl: 'modules/campaign/client/list-campaign.html'
      })
      .state('slug.company.navbar.campaign.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/create-campaign.html'
      })
      .state('slug.company.navbar.campaign.view', {
        url: '/:campaignId/view',
        abstract: true,
        template: '<div ui-view ng-init="vm.findOne()"></div>'
      })
      .state('slug.company.navbar.campaign.confirmation', {
        url: '/:campaignId/confirmation',
        templateUrl: 'modules/campaign/client/start-campaign-confirmation.html'
      })
      .state('slug.company.navbar.campaign.view.default', {
        url: '',
        template: '<div ui-view ng-init="vm.redirect()"></div>'
      })
      .state('slug.company.navbar.campaign.edit', {
        url: '/:campaignId/edit',
        abstract: true,
        template: '<div ui-view ng-init="vm.findOne()"></div>'
      })
      .state('slug.company.navbar.campaign.edit.default', {
        url: '',
        template: '<div ui-view ng-init="vm.redirectToEdit()"></div>'
      })
      .state('slug.company.navbar.t.campaign', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'CampaignController',
        controllerAs: 'campaign',
        resolve: {
          company: function(slugitem, SlugService) {
            console.log('resolve: ', SlugService.getCurrent());
            return SlugService.getCurrent();
          }
        }
      })
      .state('slug.company.navbar.t.campaign.trial', {
        url: '/trial',
        template: '<ui-view></ui-view>'
      })
      .state('slug.company.navbar.t.campaign.trial.create', {
        url: '/create/:productId',
        templateUrl: 'modules/campaign/client/trial/create.view.html'
      })
      .state('slug.company.navbar.t.campaign.trial.create.create-product', {
        url: '/create-product',
        templateUrl: 'modules/product/client/create-product.html',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .state('slug.company.navbar.t.campaign.contest', {
        url: '/contest/:productId',
        template: '<ui-view></ui-view>'
      })
      .state('slug.company.navbar.t.campaign.contest.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/contest/create.view.html'
      });
  }
]);
