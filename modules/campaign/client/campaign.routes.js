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
      .state('user.campaign.list-mock', {
        url: '/list/mock',
        templateUrl: 'modules/campaign/client/list-campaign-mock.html'
      })
      .state('company.navbar.campaign.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/create-campaign.html'
      })
      .state('company.navbar.campaign.create-mock', {
        url: '/create/mock',
        templateUrl: 'modules/campaign/client/create-campaign-mock.html'
      })
      .state('company.navbar.campaign.view', {
        url: '/:campaignId',
        templateUrl: 'modules/campaign/client/campaign.html'
      })
      .state('company.navbar.campaign.reports-mock', {
        url: '/:campaignId/reports',
        templateUrl: 'modules/campaign/client/campaign-reports-mock.html'
      })
      .state('company.navbar.campaign.edit', {
        url: '/:campaignId/edit',
        templateUrl: 'modules/campaign/client/edit-campaign.html'
      })
      .state('user.campaign.edit-mock', {
        url: '/:campaignId/edit/mock',
        templateUrl: 'modules/campaign/client/edit-campaign-mock.html'
      });
  }
]);
