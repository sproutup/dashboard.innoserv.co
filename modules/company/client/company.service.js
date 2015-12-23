'use strict';

angular
    .module('company')
    .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource'];

function CompanyService($resource) {
  return $resource('/api/company/:companyId', {companyId: '@companyId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
}