'use strict';

angular.module('product').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Products',
      state: 'company.navbar.product.list',
      class: '',
      roles: ['*'],
      position: 2
    });
  }
]);
