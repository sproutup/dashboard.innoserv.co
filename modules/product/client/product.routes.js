'use strict';

angular.module('product').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.product', {
        url: '/product',
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .state('user.product.list', {
        url: 's',
        templateUrl: 'modules/product/client/list-products.html'
      })
      .state('user.product.create', {
        url: '/create',
        templateUrl: 'modules/product/client/create-product.html'
      })
      .state('user.product.view', {
        url: '/:productId',
        templateUrl: 'modules/product/client/product.html'
      })
      .state('user.product.edit', {
        url: '/:productId/edit',
        templateUrl: 'modules/product/client/edit-product.html'
      });
  }
]);
