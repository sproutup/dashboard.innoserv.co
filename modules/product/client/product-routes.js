'use strict';

angular.module('product').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.product', {
        url: '/product',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'productController',
        controllerAs: 'vm'
      })
      .state('user.product.dashboard', {
        url: '/:companyId',
        templateUrl: 'modules/product/client/product.html'
      })
      .state('user.product.dashboard.mock', {
        url: '/mock',
        templateUrl: 'modules/product/client/product-mock.html'
      });
  }
]);