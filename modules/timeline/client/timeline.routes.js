'use strict';

angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'modules/timeline/client/timeline.html'
      });
  }
]);