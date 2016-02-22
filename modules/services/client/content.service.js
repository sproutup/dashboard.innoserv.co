'use strict';

angular
  .module('core')
  .factory('ContentService', ContentService);

ContentService.$inject = ['$resource'];

function ContentService($resource) {
  var service = {
    content: content,
    company: company
  };

  return service;

  function content() {
    return $resource('/api/content/:contentId', { contentId: '@id' }, { 'update': { method:'PUT' } } );
  }

  function company() {
    return $resource('/api/company/:companyId/content', { companyId: '@id' }, { 'update': { method:'PUT' } } );
  }
}