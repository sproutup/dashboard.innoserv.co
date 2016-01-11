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
      })
      .state('theme.components', {
        url: '/components',
        templateUrl: 'modules/theme/client/components.view.html'
      })
      .state('theme.mocks', {
        url: '/mocks',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('theme.mocks.signup', {
        url: '/signup',
        templateUrl: 'modules/theme/client/mocks/signup.view.html'
      })
      .state('theme.mocks.signin', {
        url: '/signin',
        templateUrl: 'modules/theme/client/mocks/signin.view.html'
      })
      .state('theme.mocks.landing', {
        url: '/landing',
        templateUrl: 'modules/theme/client/mocks/landing.view.html'
      })
      .state('theme.mocks.navbar', {
        url: '/navbar',
        templateUrl: 'modules/theme/client/mocks/navbar.view.html'
      })
      .state('theme.mocks.top-navbar', {
        url: '/top-navbar',
        templateUrl: 'modules/theme/client/mocks/top-navbar.view.html'
      })
      .state('theme.mocks.create-campaign', {
        url: '/create-campaign',
        templateUrl: 'modules/theme/client/mocks/create-campaign.view.html'
      })
      .state('theme.mocks.create-product', {
        url: '/create-product',
        templateUrl: 'modules/theme/client/mocks/create-product.view.html'
      })
      .state('theme.mocks.list-product', {
        url: '/list-product',
        templateUrl: 'modules/theme/client/mocks/list-product.view.html'
      });
  }
]);
