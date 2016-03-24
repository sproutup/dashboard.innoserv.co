'use strict';

angular
  .module('slug')
  .factory('SlugService', SlugService);

SlugService.$inject = ['$http', '$q', '$state'];

function SlugService($http, $q, $state) {
  var service = {
    check: check,
    findOne: findOne
  };

  return service;

  function check(id) {
    return $http({
        method: 'POST',
        url: '/api/slug/check',
        data: {id: id},
        headers: {'Content-Type': 'application/json'}
      });
  }

  function findOne(id) {
    return $http({
       method: 'GET',
       url: '/api/slug/' + id,
       headers: {'Content-Type': 'application/json'}
     });
  }
}

