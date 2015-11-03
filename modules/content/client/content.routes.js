'use strict';

angular.module('content').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('content', {
        url: '/content',
        templateUrl: 'modules/content/client/content.html'
      });
  }
]);