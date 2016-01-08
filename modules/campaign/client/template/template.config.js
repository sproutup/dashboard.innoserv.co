'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Campaign Templates',
      state: 'user.template.list',
      class: 'campaign',
      roles: ['admin'],
      position: 10
    });
  }
]);

