'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Campaigns',
      state: 'user.campaign.list',
      class: 'menu-item campaign',
      roles: ['*'],
      position: 1
    });
  }
]);
