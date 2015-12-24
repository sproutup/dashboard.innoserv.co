'use strict';

angular.module('product').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.product', {
        url: '/product',
        abstract: true,
        template: '<div ui-view></div>'
      })
      // list product and mock
      .state('user.product.list', {
        url: '/:companyId',
        templateUrl: 'modules/product/client/list-product.html'
      })
      .state('user.product.list-mock', {
        url: '/:companyId/mock',
        templateUrl: 'modules/product/client/list-product-mock.html'
      })
      //create product and mock
      .state('user.product.create', {
        url: '/:companyId/create',
        templateUrl: 'modules/product/client/create-product.html'
      })
      .state('user.product.create-mock', {
        url: '/:companyId/create/mock',
        templateUrl: 'modules/product/client/create-product-mock.html'
      })
      //edit product and mock
      .state('user.product.edit', {
        url: '/:companyId/edit',
        templateUrl: 'modules/product/client/edit-product.html'
      })
      .state('user.product.edit-mock', {
        url: '/:companyId/edit/mock',
        templateUrl: 'modules/product/client/edit-product-mock.html'
      })
  }
]);