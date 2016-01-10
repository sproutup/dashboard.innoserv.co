'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company.navbar.campaign', {
        url: '/campaign',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'CampaignController',
        controllerAs: 'vm'
      })
      .state('company.navbar.campaign.list', {
        url: 's',
        templateUrl: 'modules/campaign/client/list-campaign.html'
      })
      .state('company.navbar.campaign.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/create-campaign.html'
      })
      .state('company.navbar.campaign.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/campaign.html'
      })
      .state('company.navbar.campaign.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/edit-campaign.html'
      });
  }
]);
