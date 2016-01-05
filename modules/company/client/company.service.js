'use strict';

angular
    .module('company')
    .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource'];

function CompanyService($resource) {
  return $resource('/api/company/:id', {id: '@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
}
