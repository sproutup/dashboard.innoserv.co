'use strict';

angular.module('settings').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Settings',
      state: 'user.subscribe',
      class: 'menu-item overview',
      roles: ['*'],
      position: 1
    });
  }
]);