'use strict';

angular.module('campaign').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company.navbar.campaign.trial', {
        url: '/trial',
        template: '<ui-view></ui-view>'
      })
      .state('company.navbar.campaign.trial.create', {
        url: '/create',
        templateUrl: 'modules/campaign/client/trial/create.view.html'
      });
  }
]);
