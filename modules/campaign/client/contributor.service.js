'use strict';

angular
  .module('campaign')
  .factory('ContributorService', ContributorService);

ContributorService.$inject = ['$resource', '$q', '$state'];

function ContributorService($resource, $q, $state) {
  var model = {
    contributors: [],
    campaignId: null
  };

  var service = {
    model: model,
    listByCampaign: listByCampaign,
    findOne: findOne,
    update: update,
    remove: remove
  };

  return service;

  function update(item) {
    var defer = $q.defer();
    var promise = defer.promise;

    item.$update({
      userId: item.userId,
      campaignId: item.campaignId
    }, function(response) {
      defer.resolve(response);
      for (var i in model.contributors) {
        console.log((model.contributors[i].id === item.id));
        if (model.contributors[i].id === item.id) {
          model.contributors[i] = item;
        }
      }
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function remove(item) {
    var defer = $q.defer();
    var promise = defer.promise;

    item.$remove({
      userId: item.userId,
      campaignId: item.campaignId
    }, function(response) {
      defer.resolve(response);
      for (var i in model.contributors) {
        if (model.contributors[i].id === item.id) {
          model.contributors.splice(i, 1);
        }
      }
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function listByCampaign(campaignId) {
    var defer = $q.defer();
    var promise = defer.promise;

    if (model.contributors.length > 0 && campaignId === model.campaignId) {
      defer.resolve(model.contributors);
      return promise;
    }

    model.campaignId = campaignId;
    campaignContributorsResource().get({
      campaignId: campaignId
    }, function(response) {
      console.log(response);
      model.contributors = response.items;
      defer.resolve(response);
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function findOne(userId, campaignId) {
    var defer = $q.defer();
    var promise = defer.promise;

    contributorResource().get({
      userId: userId,
      campaignId: campaignId
    }, function(response) {
      defer.resolve(response);
    }, function(error) {
      defer.reject(error);
      console.log(error);
    });

    return promise;
  }

  function campaignContributorsResource () {
     return $resource('/api/campaign/:campaignId/user', { campaignId:'@id' }, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }

  function contributorResource () {
     return $resource('/api/user/:userId/campaign/:campaignId', { userId:'@userId', campaignId:'@id' }, { 'update': {method:'PUT'}, 'query': {method:'GET', isArray:true} } );
  }
}