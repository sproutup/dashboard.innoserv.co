'use strict';

angular.module('settings').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.subscribe', {
        url: '/subscribe',
        templateUrl: 'modules/settings/client/subscribe.html'
      });
  }
]);