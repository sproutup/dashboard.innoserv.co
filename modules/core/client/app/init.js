'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Angulartics
angular.module(ApplicationConfiguration.applicationModuleName).config(['$analyticsProvider',
  function ($analyticsProvider) {
    $analyticsProvider.virtualPageviews(true);
  }
]);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$sceDelegateProvider',
  function ($locationProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://www.youtube.com/**'
    ]);
  }
]);

// Setting spinner defaults
angular.module(ApplicationConfiguration.applicationModuleName).config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
  usSpinnerConfigProvider.setDefaults({
    lines: 8, // The number of lines to draw
    length: 16, // The length of each line
    width: 23, // The line thickness
    radius: 42, // The radius of the inner circle
    scale: 0.13, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: 'white', // #rgb or #rrggbb or array of colors
  });
}]);

angular.module(ApplicationConfiguration.applicationModuleName).run(function ($rootScope, $state, Authentication) {
  // Check authentication before changing state
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
      var allowed = false;
      toState.data.roles.forEach(function (role) {
        if (Authentication.user.roles !== undefined && Authentication.user.roles.indexOf(role) !== -1) {
          allowed = true;
          return true;
        }
      });

      if (!allowed) {
        event.preventDefault();
        $state.go('authentication.signin', {}, {
          notify: false
        }).then(function () {
          $rootScope.$broadcast('$stateChangeSuccess', 'authentication.signin', {}, toState, toParams);
        });
      }
    }

    /* jshint ignore:start */
    if (Authentication.user && Authentication.user.id) {
      // console.log('Start Intercom');
      // console.log('Intercom with logged-in user: ', Authentication.user.displayName, Authentication.user.id);
      Intercom('boot', {
        app_id: 'g60vwitq',
        email: Authentication.user.email,
        name: Authentication.user.displayName,
        user_id: Authentication.user.id,
        application: 'Dashboard'
      });
    } else {
      // console.log('Start Intercom');
      // console.log('Intercom with logged-out user');
      Intercom('boot', {
       app_id: 'g60vwitq',
       application: 'Dashboard'
      });
    }
    /* jshint ignore:end */
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.log('stateChangeError: ', error);
    event.preventDefault();
    $state.go('footer.not-found', {}, {location: 'replace'});
  });

  // Record previous state
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    console.log('stateChangeSuccess: ', fromState.name, toState.name);
    $state.previous = {
      state: fromState,
      params: fromParams,
      href: $state.href(fromState, fromParams)
    };
  });
});

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') {
    window.location.hash = '#!';
  }

  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
