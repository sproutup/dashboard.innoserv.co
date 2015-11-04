'use strict';

// Setting up route
angular.module('overview').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('overview', {
      	url: '',
        abstract: true,
        templateUrl: 'modules/overview/client/overview.html',
        controller: 'overviewController',
        controllerAs: 'vm'
      })
      .state('overview.impressions', {
        url: '/',
        templateUrl: 'modules/overview/client/overview-impressions.html',
        controller: 'overviewController',
        controllerAs: 'vm'
      })
      .state('overview.content', {
        url: '/views-overview',
        templateUrl: 'modules/overview/client/overview-content.html',
        controller: 'overviewController',
        controllerAs: 'vm'
      })
      .state('overview.engagement', {
        url: '/engagement-overview',
        templateUrl: 'modules/overview/client/overview-engagement.html',
        controller: 'overviewController',
        controllerAs: 'vm'
      });
  }
]);