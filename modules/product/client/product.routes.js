'use strict';

angular.module('product').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.product', {
        url: '/product',
        abstract: true,
        template: '<div ui-view></div>'
      })
      // product list and mock
      .state('user.product.list', {
        url: '/:companyId',
        templateUrl: 'modules/product/client/product.html'
      })
      .state('user.product.list-mock', {
        url: '/:companyId/mock',
        templateUrl: 'modules/product/client/product-mock.html'
      })
      //product create and mock
      .state('user.product.create', {
        url: '/create',
        templateUrl: 'modules/product/client/product-create.html'
      })
      .state('user.product.create-mock', {
        url: '/create',
        templateUrl: 'modules/product/client/product-create-mock.html'
      });
  }
]);