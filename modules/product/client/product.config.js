'use strict';

angular.module('product').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Products',
      state: 'user.product.list',
      class: '',
      roles: ['*'],
      position: 2
    });
  }
]);
