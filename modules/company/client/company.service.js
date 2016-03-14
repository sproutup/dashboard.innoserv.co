'use strict';

angular
  .module('company')
  .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource'];

function CompanyService($resource) {
  var service = {
    company: company,
    companyBySlug: companyBySlug,
    mycompany: mycompany
  };

  return service;

  function company () {
    //return $resource('/api/company/:companyId', {companyId: '@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
    return $resource('/api/company/:companyId', { companyId: '@id' }, { 'update': { method:'PUT' } } );
  }

  function companyBySlug () {
    return $resource('/api/company/slug/:companySlug', { companySlug:'@slug' }, { 'update': { method:'PUT' }, 'query': { method:'GET', isArray:true } } );
  }

  function mycompany () {
    return $resource('/api/my/company/:companyId', { companyId:'@id' }, { 'update': { method:'PUT' }, 'query': { method:'GET', isArray:true } } );
  }

}
