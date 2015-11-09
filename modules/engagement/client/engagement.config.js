'use strict';

angular.module('engagement').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'engagement.page-views',
      class: 'menu-item engagement',
      roles: ['*'],
      position: 5
    });
  }
]);