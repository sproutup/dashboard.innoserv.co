'use strict';

angular
    .module('campaign')
    .factory('CampaignService', CampaignService);

CampaignService.$inject = ['$resource'];

function CampaignService($resource) {
  var service = {
    listCampaigns: listCampaigns
  };

  return service;

  function listCampaigns () {
     return $resource('/api/company/:id/campaign', {id:'@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

}