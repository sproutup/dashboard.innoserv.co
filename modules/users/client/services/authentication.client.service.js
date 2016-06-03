'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window', '$analytics',
  function ($window, $analytics) {
    var auth = {
      user: $window.user,
      company: {},
      setCompany: setCompany
    };

    if ($window.user) {
      $analytics.setUsername($window.user.id);
      $analytics.setUserPropertiesOnce({ name: $window.user.displayName });
    }

    return auth;

    function setCompany(company){
      console.log('set company: ', company.name);
      auth.company = company;
    }
 }


]);
