'use strict';

angular.module('social').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'social',
      class: 'menu-item social',
      roles: ['*'],
      position: 6
    });
  }
]);