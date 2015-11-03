'use strict';

// Setting up route
angular.module('overview').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/',
        templateUrl: 'modules/overview/client/overview.html',
        controller: 'overviewController',
        controllerAs: 'vm'
      });
  }
]);