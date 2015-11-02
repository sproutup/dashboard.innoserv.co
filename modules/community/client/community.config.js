'use strict';

angular.module('community').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'community',
      class: 'menu-item community',
      roles: ['*'],
      position: 3
    });
  }
]);