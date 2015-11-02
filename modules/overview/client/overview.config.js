'use strict';

angular.module('overview').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'overview',
      class: 'menu-item overview',
      roles: ['*'],
      position: 1
    });
  }
]);