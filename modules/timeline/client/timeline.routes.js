'use strict';

angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.timeline', {
        url: '/timeline',
        templateUrl: 'modules/timeline/client/timeline.html',
        controller: 'timelineController',
        controllerAs: 'vm'
      });
  }
]);