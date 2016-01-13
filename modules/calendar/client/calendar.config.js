'use strict';

angular.module('calendar').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('navbar', {
      title: 'Calendar',
      state: 'company.navbar.calendar.event.list',
      class: '',
      roles: ['*'],
      position: 4
    });
  }
]);