'use strict';

angular.module('product').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('user.product', {
        url: '/product',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('user.product.dashboard', {
        url: '/:companyId',
        templateUrl: 'modules/product/client/product.html'
      })
      .state('user.product.mock', {
        url: '/:companyId/mock',
        templateUrl: 'modules/product/client/product-mock.html'
      });
  }
]);