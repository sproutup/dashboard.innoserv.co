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
  }
]);
