'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('company.dashboard', {
        url: '/:productSlug',
        templateUrl: 'modules/company/client/company.html',
        controller: 'companyController',
        controllerAs: 'vm'
      })
      .state('company.mock', {
        url: '/products/mock',
        templateUrl: 'modules/company/client/company-mock.html',
        controller: 'companyController',
        controllerAs: 'vm'
      });
  }
]);