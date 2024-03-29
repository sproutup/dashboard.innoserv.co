'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angular-chart.js/dist/angular-chart.min.css',
        'public/lib/components-font-awesome/css/font-awesome.min.css',
        'public/lib/intl-tel-input/build/css/intlTelInput.css'
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-validate/dist/validate.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/Chart.js/Chart.min.js',
        'public/lib/angular-chart.js/dist/angular-chart.min.js',
        'public/lib/moment/min/moment.min.js',
        'public/lib/angular-moment/angular-moment.min.js',
        'public/lib/ng-file-upload/ng-file-upload.min.js',
        'public/lib/crypto-js/crypto-js.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-scroll-glue/src/scrollglue.js',
        'public/lib/ng-videosharing-embed/build/ng-videosharing-embed.min.js',
        'public/lib/spin.js/spin.min.js',
        'public/lib/angular-spinner/angular-spinner.min.js',
        'public/lib/angulartics/dist/angulartics.min.js',
        'public/lib/angulartics/src/angulartics-intercom.js',
        'public/lib/angulartics-mixpanel/dist/angulartics-mixpanel.min.js',
        'public/lib/angulartics-google-analytics/dist/angulartics-ga.min.js',
        'public/lib/intl-tel-input/build/js/intlTelInput.min.js',
        'public/lib/intl-tel-input/lib/libphonenumber/build/utils.js',
        'public/lib/ng-intl-tel-input/dist/ng-intl-tel-input.min.js',
        'public/lib/ngAutocomplete/src/ngAutocomplete.js',
	'public/lib/ng-lodash/build/ng-lodash.js',
        'public/lib/angular-intercom/angular-intercom.min.js',
        '//static.intercomcdn.com/intercom.v1.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.module.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/**/*.views.html']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/**/*.model.js',
    routes: ['modules/!(core)/server/**/*.routes.js', 'modules/core/server/**/*.routes.js'],
    sockets: 'modules/*/server/**/*.socket.config.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/**/*.policy.js',
    views: 'modules/*/server/views/*.html'
  }
};
