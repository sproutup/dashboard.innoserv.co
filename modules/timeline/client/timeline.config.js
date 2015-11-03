'use strict';

angular.module('timeline').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      state: 'timeline',
      class: 'menu-item timeline',
      roles: ['*'],
      position: 2
    });
  }
]);