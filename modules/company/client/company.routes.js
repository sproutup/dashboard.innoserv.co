'use strict';

angular.module('company').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/com/:companySlug',
        abstract: true,
        template: '<section ng-init="company.findByStateParam()"><div ui-view></div></section>',
        controller: 'CompanyController',
        controllerAs: 'company'
      })
      .state('user.company', {
        url: '/company',
        abstract: true,
        templateUrl: 'modules/company/client/settings/settings.html',
        controller: 'CompanyController',
        controllerAs: 'vm'
      })
      .state('user.company.profile', {
        url: '/profile',
        templateUrl: 'modules/company/client/settings/edit-company-profile.html'
      })
      // for internal admin 
      .state('companyxxx', {
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
