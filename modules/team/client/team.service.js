'use strict';

angular
    .module('team')
    .factory('TeamService', TeamService);

TeamService.$inject = ['$resource'];

function TeamService($resource) {
  var service = {
    listByUser: listByUser
  };

  return service;

  function listByUser () {
     return $resource('/api/user/:userId/company', {userId:'@userId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listCampaigns () {
     return $resource('/api/company/:id/campaign', {id:'@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

}