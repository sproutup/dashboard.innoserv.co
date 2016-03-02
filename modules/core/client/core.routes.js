'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('not-found');

    // Home state routing
    $stateProvider
      .state('footer', {
        url: '',
        abstract: true,
        templateUrl: 'modules/core/client/footer.view.html'
      })
      .state('footer.home', {
        url: '/',
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'modules/core/client/home.view.html'
      })
      .state('company.navbar.home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'modules/core/client/home.view.html'
      })
      .state('company.navbar' , {
        url: '',
        abstract: true,
        templateUrl: 'modules/core/client/header.view.html',
        controller: 'HeaderController',
        controllerAs: 'vm'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/client/404.view.html'
      })
      .state('privacy', {
        url: '/privacy-policy',
        templateUrl: 'modules/core/client/privacy.view.html'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'modules/core/client/terms.view.html'
      });
  }
]);
