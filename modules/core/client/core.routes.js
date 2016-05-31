'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
  function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    var patt = new RegExp('^[a-zA-Z0-9]+$');

    $urlMatcherFactoryProvider.type('slugItem', {
      decode: function(val) {
        return val.toLowerCase();
      },
      encode: function(val) {
        return val;
      },
      equals: function(a, b) {
        return this.is(a) && a === b;
      },
      is: function(val) {
        return patt.test(val);
      },
      pattern: /(?!theme$|discover$|hangout$|conversation$|settings$|authentication$)[a-zA-Z0-9]+/
    });

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
      .state('theme', {
        url: '/theme',
        abstract: true,
        template: '<ui-view/>',
        controller: 'ThemeController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('theme.index', {
        url: '',
        templateUrl: 'modules/theme/client/theme-index.view.html'
      })
      .state('slug', {
        url: '/{slug:slugItem}',
        controller: 'SlugController',
        controllerAs: 'slug',
        template: '<div ui-view></div>',
        resolve: {
          slugitem: function($stateParams, SlugService) {
            return SlugService.find($stateParams.slug);
          }
        }
      });
  }
]);
