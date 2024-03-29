'use strict';

angular.module('theme').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('theme.components', {
        url: '/components',
        templateUrl: 'modules/theme/client/components.view.html'
      })
      .state('theme.mocks', {
        url: '/mocks',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('theme.mocks.signup', {
        url: '/signup',
        templateUrl: 'modules/theme/client/mocks/signup.view.html'
      })
      .state('theme.mocks.signin', {
        url: '/signin',
        templateUrl: 'modules/theme/client/mocks/signin.view.html'
      })
      .state('theme.mocks.select-company', {
        url: '/select-company',
        templateUrl: 'modules/theme/client/mocks/select-company.view.html'
      })
      .state('theme.mocks.company-landing', {
        url: '/company-landing',
        templateUrl: 'modules/theme/client/mocks/company-landing.view.html'
      })
      .state('theme.mocks.landing-home', {
        url: '/landing-home',
        templateUrl: 'modules/theme/client/mocks/landing-home.view.html'
      })
      .state('theme.mocks.landing-product', {
        url: '/landing-product',
        templateUrl: 'modules/theme/client/mocks/landing-product.view.html'
      })
      .state('theme.mocks.navbar', {
        url: '/navbar',
        templateUrl: 'modules/theme/client/mocks/navbar.view.html'
      })
      .state('theme.mocks.top-navbar', {
        url: '/top-navbar',
        templateUrl: 'modules/theme/client/mocks/top-navbar.view.html'
      })
      .state('theme.mocks.onboarding', {
        url: '/onboarding',
        templateUrl: 'modules/theme/client/mocks/onboarding.view.html'
      })
      .state('theme.mocks.create-campaign', {
        url: '/create-campaign',
        templateUrl: 'modules/theme/client/mocks/create-campaign.view.html'
      })
      .state('theme.mocks.start-campaign-confirmation', {
        url: '/start-campaign-confirmation',
        templateUrl: 'modules/theme/client/mocks/start-campaign-confirmation.view.html'
      })
      .state('theme.mocks.list-campaign', {
        url: '/list-campaign',
        templateUrl: 'modules/theme/client/mocks/list-campaign.view.html'
      })
      .state('theme.mocks.empty-campaign', {
        url: '/empty-campaign',
        templateUrl: 'modules/theme/client/mocks/empty-campaign.view.html'
      })
      .state('theme.mocks.view-trial-requests', {
        url: '/view-trial-requests',
        templateUrl: 'modules/theme/client/mocks/view-trial-requests.view.html'
      })
      .state('theme.mocks.view-trial-requests-yes-list', {
        url: '/yes-list',
        templateUrl: 'modules/theme/client/mocks/view-trial-requests-yes-list.view.html'
      })
      .state('theme.mocks.view-trial-stats', {
        url: '/view-trial-stats',
        templateUrl: 'modules/theme/client/mocks/view-trial-stats.view.html'
      })
      .state('theme.mocks.trial-request-details', {
        url: '/trial-request-details',
        templateUrl: 'modules/theme/client/mocks/trial-request-details.view.html'
      })
      .state('theme.mocks.config-trial-campaign', {
        url: '/config-trial-campaign',
        templateUrl: 'modules/theme/client/mocks/config-trial-campaign.view.html'
      })
      .state('theme.mocks.create-product', {
        url: '/create-product',
        templateUrl: 'modules/theme/client/mocks/create-product.view.html'
      })
      .state('theme.mocks.list-product', {
        url: '/list-product',
        templateUrl: 'modules/theme/client/mocks/list-product.view.html'
      })
      .state('theme.mocks.list-team-member', {
        url: '/list-team-member',
        templateUrl: 'modules/theme/client/mocks/list-team-member.view.html'
      })
      .state('theme.mocks.company-settings', {
        url: '/company-settings',
        templateUrl: 'modules/theme/client/mocks/company-settings.view.html'
      })
      .state('theme.mocks.hud', {
        url: '/hud',
        templateUrl: 'modules/theme/client/mocks/hud.view.html'
      })
      .state('theme.mocks.view-contest-entries', {
        url: '/view-contest-entries',
        templateUrl: 'modules/theme/client/mocks/view-contest-entries.view.html'
      })
      // messages
      .state('theme.mocks.list-conversation', {
        url: '/list-conversation',
        templateUrl: 'modules/theme/client/mocks/list-conversation.view.html'
      })
      .state('theme.mocks.view-a-conversation', {
        url: '/view-a-conversation',
        templateUrl: 'modules/theme/client/mocks/view-a-conversation.view.html'
      })
      // legal
      .state('theme.mocks.terms', {
        url: '/terms',
        templateUrl: 'modules/theme/client/mocks/terms.view.html'
      })
      .state('theme.mocks.privacy', {
        url: '/privacy',
        templateUrl: 'modules/theme/client/mocks/privacy.view.html'
      })
      //not found
      .state('theme.mocks.not-found', {
        url: '/404',
        templateUrl: 'modules/theme/client/mocks/404.view.html'
      });
  }
]);
