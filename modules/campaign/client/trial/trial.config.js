'use strict';

angular.module('campaign').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('campaign.trial.menu', {
      title: 'Requests',
      state: 'slug.company.navbar.campaign.view.trial.requests',
      class: '',
      roles: ['*']
    });

    Menus.addMenuItem('campaign.trial.menu', {
      title: 'Content',
      state: 'slug.company.navbar.campaign.view.trial.stats',
      class: '',
      roles: ['*']
    });
  }
]);
