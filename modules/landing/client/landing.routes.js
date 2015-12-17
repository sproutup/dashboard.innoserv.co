'use strict';

// Setting up route
angular.module('landing').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'landingController',
        controllerAs: 'vm'
      })
      // .state('landing.company', {
      //   url: '/preview/:productSlug',
      //   templateUrl: 'modules/engagement/client/engagement-page-views.html'
      // })
      .state('landing.default', {
        url: '/preview'
        // templateUrl: 'modules/engagement/client/engagement-page-views.html'
      })
      .state('landing.mock', {
        url: '/preview/landingMock',
        templateUrl: 'modules/landing/client/landing-mock.html'
      });
  }
]);