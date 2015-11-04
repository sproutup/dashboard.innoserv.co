'use strict';

angular.module('community').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('community', {
        url: '/community',
        templateUrl: 'modules/community/client/community.html',
        controller: 'communityController',
        controllerAs: 'vm'
      });
  }
]);