'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  dynamoose = require('config/lib/dynamoose'),
  User = dynamoose.model('User');

/**
 * User middleware
 */
exports.userByID = function (req, res, next, id) {
  if (!dynamoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'User is invalid'
    });
  }

  User.findOne({
    _id: id
  }).exec(function (err, user) {
    if (err) {
      return next(err);
    } else if (!user) {
      return next(new Error('Failed to load User ' + id));
    }

    req.profile = user;
    next();
  });
};
