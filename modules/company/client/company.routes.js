'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.company', {
        url: '/company',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('user.company.dashboard', {
        url: '/:productSlug',
        templateUrl: 'modules/company/client/company.html',
        controller: 'companyController',
        controllerAs: 'vm'
      })
      .state('user.company.mock', {
        url: '/producs/mock',
        templateUrl: 'modules/company/client/company-mock.html',
        controller: 'companyController',
        controllerAs: 'vm'
      });
  }
]);