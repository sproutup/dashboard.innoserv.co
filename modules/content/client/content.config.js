'use strict';

angular.module('content').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'content.videos',
      class: 'menu-item content',
      roles: ['*'],
      position: 4
    });
  }
]);