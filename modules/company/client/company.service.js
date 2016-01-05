'use strict';

angular
    .module('company')
    .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource'];

function CompanyService($resource) {
  var service = {
    company: company,
    companyBySlug: companyBySlug
  };

  return service;

  function company () {
     return $resource('/api/company/:companyId', {companyId: '@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function companyBySlug () {
     return $resource('/api/company/slug/:companySlug', {companySlug:'@companySlug'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }
}
