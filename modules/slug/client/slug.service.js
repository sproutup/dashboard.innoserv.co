'use strict';

angular
  .module('slug')
  .factory('SlugService', SlugService);

SlugService.$inject = ['$http', '$q', '$state'];

function SlugService($http, $q, $state) {
  var model = {
    item: null
  };
  var service = {
    check: check,
    find: find,
    getCurrent: getItem
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

  function find(id) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: '/api/me/slug/' + id,
      headers: {'Content-Type': 'application/json'}
    }).then(function(val){
      model.item = val.data.item;
      deferred.resolve(val);
    }).catch(function(err) {
      $state.go('footer.not-found', {}, {location: 'replace'});
      deferred.reject(err);
    });
    return deferred.promise;
  }

  function getItem() {
    return model.item;
  }
}
