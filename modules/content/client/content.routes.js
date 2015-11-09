'use strict';

angular.module('content').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('content', {
        url: '',
        abstract: true,
        templateUrl: 'modules/content/client/content.html',
        controller: 'contentController',
        controllerAs: 'vm'
      })
      .state('content.videos', {
        url: '/videos',
        templateUrl: 'modules/content/client/content-videos.html',
        controller: 'contentController',
        controllerAs: 'vm'
      })
      .state('content.blogs', {
        url: '/blogs',
        templateUrl: 'modules/content/client/content-blogs.html',
        controller: 'contentController',
        controllerAs: 'vm'
      });
  }
]);