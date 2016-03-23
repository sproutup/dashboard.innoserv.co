'use strict';

angular
    .module('product')
    .factory('ProductService', ProductService);

ProductService.$inject = ['$resource', '$q', '$state'];

function ProductService($resource, $q, $state) {
  var model = {
    products: [],
    companyId: null
  };

  var service = {
    model: model,
    listByCompany: listByCompany,
    findOne: findOne,
    add: add,
    update: update,
    remove: remove
  };

  return service;

  function add(obj) {
    var defer = $q.defer();
    var promise = defer.promise;
    var Product = productResource();
    var item = new Product(obj);

    // Redirect after save
    item.$save(function(response) {
      model.products.push(response);
      defer.resolve(response);
      // Chop the last part of the state to remove the product side panel
      var currentState = $state.current.name;
      var index = currentState.lastIndexOf('.');
      var nextState = currentState.slice(0, index);
      $state.go(nextState);
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function update(item) {
    var defer = $q.defer();
    var promise = defer.promise;

    item.$update({
      productId: item.id
    }, function(response) {
      defer.resolve(response);
      for (var i in model.products) {
        if (model.products[i].id === item.id) {
          model.products[i] = item;
        }
      }
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function remove(item) {
    var defer = $q.defer();
    var promise = defer.promise;

    item.$remove({
      productId: item.id
    }, function(response) {
      defer.resolve(response);
      for (var i in model.products) {
        if (model.products[i].id === item.id) {
          model.products.splice(i, 1);
        }
      }
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function listByCompany(companyId) {
    var defer = $q.defer();
    var promise = defer.promise;

    if (model.products.length > 0 && companyId === model.companyId) {
      defer.resolve(model.products);
      return promise;
    }

    model.companyId = companyId;
    companyProductResource().query({
      companyId: companyId
    }, function(response) {
      model.products = response;
      defer.resolve(response);
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function findOne(productId) {
    var defer = $q.defer();
    var promise = defer.promise;

    productResource().get({
      productId: productId
    }, function(response) {
      defer.resolve(response);
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function productResource() {
     return $resource('/api/product/:productId', {productId:'@productId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function companyProductResource() {
     return $resource('/api/company/:companyId/product', {companyId:'@companyId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }
}