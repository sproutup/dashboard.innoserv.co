'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/admin/company',
        abstract: true,
        template: '<section class="content"><section class="container"><div ui-view></div></section></section>',
        controller: 'CompanyController',
        controllerAs: 'vm'
      })
      .state('company.list', {
        url: '',
        templateUrl: 'modules/company/client/admin/list-companies.html'
      })
      .state('company.create', {
        url: '/create',
        templateUrl: 'modules/company/client/admin/create-company.html'
      })
      .state('company.edit', {
        url: '/:companyId/edit',
        templateUrl: 'modules/company/client/admin/edit-company.html'
      })
      .state('company.view', {
        url: '/:companyId',
        templateUrl: 'modules/company/client/admin/view-company.html'
      });
  }
]);