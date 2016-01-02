'use strict';

module.exports = function (app) {
  // User Routes
  var users = require('../controllers/users.server.controller');

  // Setting up the users profile api
  app.route('/api/users/me').get(users.me);
  app.route('/api/users').put(users.update);
  app.route('/api/users/accounts').delete(users.removeOAuthProvider);
  app.route('/api/users/password').post(users.changePassword);
  app.route('/api/users/picture').post(users.changeProfilePicture);

  // Setting up the user email routes
  app.route('/api/users/email/confirmation/:token').get(users.validateEmail);
  app.route('/api/users/email/confirmation').post(users.resendEmailConfirmation);
  app.route('/api/users/email/claim-company').post(users.claimCompany);

  // Finish by binding the user middleware
  app.param('userId', users.userByID);
};