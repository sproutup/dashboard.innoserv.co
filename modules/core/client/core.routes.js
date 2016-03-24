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
      .state('footer.select', {
        url: '/select',
        templateUrl: 'modules/company/client/company-settings.html',
        controller: 'CompanyController',
        controllerAs: 'vm',
        resolve: {
          item: function() {
            return {item: null};
          }
        },
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('slug.company.navbar.home', {
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
      .state('slug.company.navbar' , {
        url: '',
        abstract: true,
        templateUrl: 'modules/core/client/header.view.html',
        controller: 'HeaderController',
        controllerAs: 'vm'
      })
     .state('footer.not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/client/404.view.html'
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'modules/core/client/privacy.view.html'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'modules/core/client/terms.view.html'
      })
      .state('slug', {
        url: '/:slug',
        controller: 'SlugController',
        controllerAs: 'slug',
        template: '<div ui-view ng-init="slug.slug()"></div>',
        resolve: {
          slugitem: function($stateParams, SlugService) {
            return SlugService.find($stateParams.slug);
          }
        }
      });
  }
]);
