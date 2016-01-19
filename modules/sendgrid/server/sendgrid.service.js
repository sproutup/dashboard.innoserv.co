'use strict';

/**
 * Module dependencies.
 */
var config = require('config/config');
var sendgrid = require('sendgrid')(config.sendgrid.username, config.sendgrid.pass);

/**
 * Service for all sendgrid emails
 */
exports.sendEmail = function(email, template, url) {
  if (email) {
    email.setFilters({
      'templates': {
        'settings': {
          'enable': 1,
          'template_id': template
        }
      }
    });

    if (config.sendgrid && config.sendgrid.local) {
      console.log('We didn\'t send an email. Here are the url we would\'ve put in it: ', url);
    } else {
      sendgrid.send(email, function(err, json) {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};