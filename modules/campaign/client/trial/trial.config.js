'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Requests',
      state: 'company.navbar.campaign.view.trial.requests',
      class: '',
      roles: ['*']
    });

    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Content',
      state: 'company.navbar.campaign.view.trial.stats',
      class: '',
      roles: ['*']
    });

    Menus.addMenuItem('company.navbar.campaign.trial.view.menu', {
      title: 'Configuration',
      state: 'company.navbar.campaign.view.trial.configure',
      class: '',
      roles: ['*']
    });
  }
]);

