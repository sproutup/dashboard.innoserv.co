'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.company', {
        url: '/company',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'companyController',
        controllerAs: 'vm'
      })
      .state('user.company.dashboard', {
        url: '/:companyId',
        templateUrl: 'modules/company/client/company.html'
      })
      .state('user.company.campaign', {
        url: '/:companyId/campaign/:campaignId',
        templateUrl: 'modules/company/client/campaign.html'
      });
  }
]);