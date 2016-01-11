'use strict';

angular.module('company').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Company Info',
      state: 'company.navbar.settings.profile',
      class: '',
      roles: ['*'],
      position: 3
    });

    Menus.addMenuItem('company.settings.menu', {
      title: 'Edit Company Profile',
      state: 'company.navbar.settings.profile',
      class: '',
      roles: ['*'],
      position: 1
    });
  }
]);
