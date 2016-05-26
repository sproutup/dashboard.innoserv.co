'use strict';

angular
  .module('company')
  .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource', '$q'];

function CompanyService($resource, $q) {
  var service = {
    company: company,
    companyBySlug: companyBySlug,
    mycompany: mycompany,
    myCompanyAll: myCompanyAll,
    updateCompany: updateCompany
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

  function myCompanyAll () {
    return $resource('/api/my/company/all');
  }

  function updateCompany(company) {
    var defer = $q.defer();
    var promise = defer.promise;

    company.$update(function(response) {
      return defer.resolve(response);
    }, function(errorResponse) {
      return defer.reject(errorResponse);
    });

    return promise;
  }

}
