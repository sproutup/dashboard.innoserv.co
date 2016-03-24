'use strict';

angular.module('product').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Products',
      state: 'slug.company.navbar.product.list',
      class: '',
      roles: ['user', 'admin'],
      position: 2
    });
  }
]);
