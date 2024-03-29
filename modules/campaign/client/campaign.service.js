'use strict';

angular
    .module('campaign')
    .factory('CampaignService', CampaignService);

CampaignService.$inject = ['$resource', '$q'];

function CampaignService($resource, $q) {
  var service = {
    listByCompany: listByCompany,
    listByProduct: listByProduct,
    campaigns: campaigns,
    content: content,
    contributors: contributors,
    contribution: contribution,
    updateCampaign: updateCampaign,
    metricQueryViews: metricQueryViews
  };

  return service;

  function campaigns () {
     return $resource('/api/campaign/:campaignId', {campaignId: '@id'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function content () {
     return $resource('/api/campaign/:campaignId/content', {campaignId:'@campaignId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listByCompany () {
     return $resource('/api/company/:companyId/campaign', {companyId:'@companyId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function listByProduct () {
     return $resource('/api/product/:productId/campaign', {productId:'@productId'}, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function contributors () {
     return $resource('/api/campaign/:campaignId/user', { companyId:'@id' }, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function contribution () {
     return $resource('/api/user/:userId/campaign/:campaignId', { userId:'@userId', campaignId:'@id' }, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function metricQueryViews (metric) {
    return $resource('/api/metric/query', { metric: metric, campaignId:'@id' }, { 'update': {method:'PUT'}, 'query': {method:'POST', isArray:false} } );
  }

  function updateCampaign(campaign) {
    var defer = $q.defer();
    var promise = defer.promise;

    campaign.$update(function(response) {
      return defer.resolve(response);
    }, function(errorResponse) {
      return defer.reject(errorResponse);
    });

    return promise;
  }

}
