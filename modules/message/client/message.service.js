'use strict';

angular
    .module('message')
    .factory('MessageService', MessageService);

MessageService.$inject = ['$resource'];

function MessageService($resource) {
  var service = {
    message: message
  };

  return service;

  function message () {
     return $resource('/api/message/:messageId', {messageId:'@Id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }
}
