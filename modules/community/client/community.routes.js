'use strict';

angular.module('community').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('community', {
        url: '',
        abstract: true,
        templateUrl: 'modules/community/client/community.html',
        controller: 'communityController',
        controllerAs: 'vm'
      })
      .state('community.requests', {
        url: '/requests',
        templateUrl: 'modules/community/client/community-requests.html',
        controller: 'communityController',
        controllerAs: 'vm'
      })
      .state('community.trials', {
        url: '/trials',
        templateUrl: 'modules/community/client/community-trials.html',
        controller: 'communityController',
        controllerAs: 'vm'
      })
      .state('community.ambassadors', {
        url: '/ambassadors',
        templateUrl: 'modules/community/client/community-ambassadors.html',
        controller: 'communityController',
        controllerAs: 'vm'
      });
  }
]);