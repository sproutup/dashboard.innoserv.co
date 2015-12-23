'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.company', {
        url: '/company',
        abstract: true,
        template: '<section class="content"><section class="container"><div ui-view></div></section></section>',
        controller: 'CompanyController',
        controllerAs: 'vm'
      })
      .state('user.company.list', {
        url: '',
        templateUrl: 'modules/company/client/list-companies.html'
      })
      .state('user.company.create', {
        url: '/create',
        templateUrl: 'modules/company/client/create-company.html'
      })
      .state('user.company.edit', {
        url: '/:companyId/edit',
        templateUrl: 'modules/company/client/edit-company.html'
      })
      .state('user.company.view', {
        url: '/:companyId',
        templateUrl: 'modules/company/client/company.html'
      })
      .state('user.company.campaign', {
        url: '/:companyId/campaign/:campaignId',
        templateUrl: 'modules/company/client/campaign.html'
      });
  }
]);