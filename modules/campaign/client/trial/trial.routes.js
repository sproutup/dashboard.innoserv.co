'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company.navbar.campaign.create-trial', {
        url: '/trial/create',
        templateUrl: 'modules/campaign/client/trial/create.view.html'
      })
      .state('company.navbar.campaign.edit-trial', {
        url: '/trial/:campaignId/edit',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      .state('company.navbar.campaign.configure-trial', {
        url: '/trial/:campaignId/configure',
        templateUrl: 'modules/campaign/client/trial/edit.view.html'
      })
      .state('company.navbar.campaign.trial', {
        url: '/trial/:campaignId',
        abstract: true,
        controller: 'CampaignController',
        controllerAs: 'vm',
        templateUrl: 'modules/campaign/client/trial/trial.view.html'
      })
      .state('company.navbar.campaign.trial.view', {
        url: '',
        templateUrl: 'modules/campaign/client/trial/requested.view.html'
      })
      .state('company.navbar.campaign.trial.approved', {
        url: '/approved',
        templateUrl: 'modules/campaign/client/trial/approved.view.html'
      })
      .state('company.navbar.campaign.trial.completed', {
        url: '/completed',
        templateUrl: 'modules/campaign/client/trial/completed.view.html'
      });
  }
]);
