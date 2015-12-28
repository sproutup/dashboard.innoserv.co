'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.campaign', {
        url: '/campaign',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'CampaignController',
        controllerAs: 'vm'
      })
      .state('user.campaign.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/create-campaign.html'
      })
      // list campaign and mock
      .state('user.campaign.list', {
        url: '/:companyId',
        templateUrl: 'modules/campaign/client/list-campaign.html'
      })
      .state('user.campaign.list-mock', {
        url: '/:companyId/mock',
        templateUrl: 'modules/campaign/client/list-campaign-mock.html'
      })
      //create campaign and mock
      .state('user.campaign.create-mock', {
        url: '/:companyId/create/mock',
        templateUrl: 'modules/campaign/client/create-campaign-mock.html'
      })
      //edit campaign and mock
      .state('user.campaign.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/edit-campaign.html'
      })
      .state('user.campaign.edit-mock', {
        url: '/:campaignId/edit/mock',
        templateUrl: 'modules/campaign/client/edit-campaign-mock.html'
      });
  }
]);