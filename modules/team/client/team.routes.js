'use strict';

angular.module('team').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('company.navbar.team', {
        url: '/team',
        abstract: true,
        template: '<ui-view/>',
        controller: 'TeamController',
        controllerAs: 'vm'
      })
      .state('company.navbar.team.list', {
        url: '/members',
        templateUrl: 'modules/team/client/list-team.view.html'
      })
      .state('company.navbar.team.create', {
        url: '/create',
        templateUrl: 'modules/team/client/create-team.view.html'
      })
      .state('company.navbar.team.edit', {
        url: '/:teamId/edit',
        templateUrl: 'modules/company/client/edit-team.view.html'
      })
      .state('company.navbar.team.view', {
        url: '/:teamId',
        templateUrl: 'modules/company/client/view-team.view.html'
      });
  }
]);

