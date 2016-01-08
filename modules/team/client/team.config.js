'use strict';

angular.module('team').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('user.company.profile.menu', {
      title: 'Team Members',
      state: 'user.team.settings',
      class: '',
      roles: ['*'],
      position: 2
    });
  }
]);
