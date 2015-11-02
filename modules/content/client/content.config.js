'use strict';

angular.module('content').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'content',
      class: 'menu-item content-icon',
      roles: ['*'],
      position: 4
    });
  }
]);