'use strict';

angular.module('company').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Company Info',
      state: 'user.company.profile',
      class: '',
      roles: ['*'],
      position: 3
    });

    Menus.addMenuItem('user.company.profile.menu', {
      title: 'Edit Company Profile',
      state: 'user.company.profile',
      class: '',
      roles: ['*'],
      position: 1
    });
  }
]);
