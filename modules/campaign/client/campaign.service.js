'use strict';

angular
    .module('campaign')
    .factory('CampaignService', CampaignService);

CampaignService.$inject = ['$resource'];

function CampaignService($resource) {
  var service = {
    listByCompany: listByCompany,
    campaigns: campaigns
  };

  return service;

  function campaigns () {
     return $resource('/api/campaign/:campaignId', {campaignId:'@campaignId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listByCompany () {
     return $resource('/api/company/:id/campaign', {id:'@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

}