'use strict';

angular
    .module('product')
    .factory('ProductService', ProductService);

ProductService.$inject = ['$resource'];

function ProductService($resource) {
  return $resource('/api/product/:productId', { productId: '@productId' }, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
}