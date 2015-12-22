'use strict';

/**
 * Module dependencies.
 */
var policy = require('./campaign.policy'),
  ctrl = require('./campaign.controller');

module.exports = function (app) {
  // collection routes
  app.route('/api/campaign').all(policy.isAllowed)
    .get(ctrl.list)
    .post(ctrl.create);

  // Single routes
  app.route('/api/campaign/:campaignId').all(policy.isAllowed)
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.delete);

  // Single routes
  app.route('/api/company/:companyId/campaign').all(policy.isAllowed)
    .get(ctrl.listByCompany);


  // Finish by binding the middleware
  app.param('campaignId', ctrl.campaignByID);
};
