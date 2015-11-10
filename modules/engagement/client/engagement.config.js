'use strict';

angular.module('engagement').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Engagement',
      state: 'engagement.page-views',
      class: 'menu-item engagement',
      roles: ['*'],
      position: 5
    });
  }
]);