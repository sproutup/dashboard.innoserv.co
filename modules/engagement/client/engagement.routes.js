'use strict';

// Setting up route
angular.module('engagement').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('engagement', {
        url: '/engagement',
        templateUrl: 'modules/engagement/client/engagement.html'
      });
  }
]);