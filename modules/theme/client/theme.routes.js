'use strict';

angular.module('theme').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('theme', {
        url: '/theme',
        abstract: true,
        template: '<ui-view/>',
        controller: 'ThemeController',
        controllerAs: 'vm'
      })
      .state('theme.index', {
        url: '',
        templateUrl: 'modules/theme/client/theme-index.view.html'
      });
  }
]);

