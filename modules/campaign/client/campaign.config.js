'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Campaigns',
      state: 'slug.company.navbar.campaign.list',
      class: 'campaign',
      roles: ['user', 'admin'],
      position: 1
    });
  }
]);
