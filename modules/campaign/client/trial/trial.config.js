'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Requested',
      state: 'company.navbar.campaign.trial.view',
      class: '',
      roles: ['*']
    });

    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Approved',
      state: 'company.navbar.campaign.trial.approved',
      class: '',
      roles: ['*']
    });

    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Completed',
      state: 'company.navbar.campaign.trial.completed',
      class: '',
      roles: ['*']
    });
  }
]);