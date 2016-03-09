'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      // Create, edit, and configure trial states
      // (They're using different headers/state prefixs than the regular trial views for now.)
      .state('company.navbar.campaign.create.trial', {
        url: '/trial/create/:productId',
        templateUrl: 'modules/campaign/client/trial/create.view.html'
      })
      .state('company.navbar.campaign.edit.trial', {
        url: '/trial',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      .state('company.navbar.campaign.configure.trial', {
        url: '/trial/:campaignId/edit',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      // States for requested, approved, and completed trials
      .state('company.navbar.campaign.view.trial', {
        url: '/trial',
        abstract: false,
        templateUrl: 'modules/campaign/client/trial/trial.view.html'
      })
      .state('company.navbar.campaign.view.trial.requests', {
        url: '/requests',
        templateUrl: 'modules/campaign/client/trial/requests.view.html'
      })
      .state('company.navbar.campaign.view.trial.stats', {
        url: '/stats',
        templateUrl: 'modules/campaign/client/trial/stats.view.html'
      })
      .state('company.navbar.campaign.view.trial.stats.details', {
        url: '/:contentId',
        templateUrl: 'modules/campaign/client/trial/content-details.view.html'
      })
      .state('company.navbar.campaign.view.trial.configure', {
        url: '/configure',
        templateUrl: 'modules/campaign/client/trial/configure.view.html'
      })
      .state('company.navbar.campaign.view.trial.requests.contributor', {
        url: '/contributor/:userId',
        templateUrl: 'modules/campaign/client/contributor-details.view.html',
        controller: 'ContributorController',
        controllerAs: 'contributor'
      });
  }
]);
