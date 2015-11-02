'use strict';

angular.module('social').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('social', {
        url: '/social',
        templateUrl: 'modules/social/client/social.html'
      });
  }
]);