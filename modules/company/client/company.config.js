'use strict';

angular.module('company').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Company Settings',
      state: 'slug.company.navbar.settings.profile',
      class: '',
      roles: ['user', 'admin'],
      position: 3
    });

    Menus.addMenuItem('company.settings.menu', {
      title: 'Profile',
      state: 'slug.company.navbar.settings.profile',
      class: '',
      roles: ['*'],
      position: 1
    });
  }
]);
