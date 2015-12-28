'use strict';

angular
    .module('campaign')
    .factory('CampaignService', CampaignService);

CampaignService.$inject = ['$resource'];

function CampaignService($resource) {
  var service = {
    listCampaigns: listCampaigns,
    Campaigns: Campaigns
  };

  return service;

  function Campaigns () {
     return $resource('/api/campaign/:campaignId', {campaignId:'@campaignId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listCampaigns () {
     return $resource('/api/company/:id/campaign', {id:'@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

}