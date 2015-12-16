'use strict';

angular.module('community').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Product Trials',
      state: 'user.community.requests',
      class: 'menu-item community',
      roles: ['*'],
      position: 3
    });
  }
]);