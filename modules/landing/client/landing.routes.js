'use strict';

// Setting up route
angular.module('landing').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('footer.landing', {
        url: '/landing',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'landingController',
        controllerAs: 'vm'
      })
      .state('footer.landing.confirmation', {
        url: '/confirmation?url',
        templateUrl: 'modules/landing/client/landing-confirmation.view.html'
      })
      .state('footer.company', {
        url: '/landing/:companySlug',
        abstract: true,
        template: '<section ng-init="company.findByStateParam()"><div ui-view></div></section>',
        controller: 'CompanyController',
        controllerAs: 'company'
      })
      .state('footer.company.landing', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'landingController',
        controllerAs: 'vm'
      })
      .state('footer.company.landing.default', {
        url: '',
        templateUrl: 'modules/landing/client/landing.view.html'
      })
      .state('footer.company.landing.confirmation', {
        url: '/confirmation?url',
        templateUrl: 'modules/landing/client/landing-confirmation.view.html'
      });
  }
]);