'use strict';

angular
  .module('file')
  .factory('FileService', FileService);

FileService.$inject = ['$resource'];

function FileService($resource) {
  var service = {
    listByUser: listByUser,
    files: files
  };

  return service;

  function files () {
    return $resource('/api/file/:fileId', {fileId:'@fileId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listByUser () {
    return $resource('/api/user/:userId/file', {userId:'@userId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }
}
