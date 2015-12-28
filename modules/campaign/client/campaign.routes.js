'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.campaign', {
        url: '/campaign',
        abstract: true,
        template: '<section class="content"><section class="container"><div ui-view></div></section></section>',
        controller: 'campaignController',
        controllerAs: 'vm'
      })
      .state('user.campaign.list', {
        url: '',
        templateUrl: 'modules/campaign/client/list-campaigns.html'
      })
      .state('user.campaign.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/create-campaign.html'
      })
      .state('user.campaign.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/edit-campaign.html'
      })
      .state('user.campaign.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/campaign.html'
      })
      .state('user.campaign.campaign', {
        url: '/:campaignId/campaign/:campaignId',
        templateUrl: 'modules/campaign/client/campaign.html'
      });
  }
]);