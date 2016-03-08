'use strict';

angular.module('message').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Messages',
      state: 'company.navbar.conversation.list',
      class: '',
      roles: ['user', 'admin'],
      position: 50
    });
/*
    Menus.addMenuItem('company.settings.menu', {
      title: 'Profile',
      state: 'company.navbar.settings.profile',
      class: '',
      roles: ['*'],
      position: 1
    }); */
  }
]);
