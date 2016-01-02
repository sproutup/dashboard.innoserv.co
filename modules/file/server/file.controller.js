'use strict';

/**
 * Module dependencies.
 */
var dynamoose = require('dynamoose');
var File = dynamoose.model('File');
var errorHandler = require('modules/core/server/errors.controller');
var _ = require('lodash');

/**
 * Show
 */
exports.read = function (req, res) {

  res.json(req.model);
};

/**
 * Create
 */
exports.create = function (req, res) {
  var item = new File(req.body);

  item.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(item);
    }
  });
};

/**
 * Update
 */
exports.update = function (req, res) {
  var item = req.model;

  //For security purposes only merge these parameters
  item.name = req.body.name;
  item.bucket = req.body.bucket;
  item.type = req.body.type;
  item.length = req.body.length;

  item.save().then(function(data){
    res.json(item);
  })
  .catch(function (err) {
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * Delete
 */
exports.delete = function (req, res) {
  var item = req.model;

  item.delete().then(function(result){
    res.json(item);
  })
  .catch(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
  });
};

/**
 * List
 */
exports.list = function (req, res) {
/*   File.$__.table.delete(function (err) {
      if(err) {
        console.log(err);
      }
      delete dynamoose.models.File;
      console.log('deleted');
    }); */

  File.scan().exec().then(function(items){
    res.json(items);
  })
  .catch(function(err){
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * List by user
 */
exports.listByUser = function (req, res) {
  File.query({userId: req.model.id}).exec().then(function(items){
    res.json(items);
  })
  .catch(function(err){
    return res.status(400).send({
      message: errorHandler.getErrorMessage(err)
    });
  });
};

/**
 * middleware
 */
exports.findByID = function (req, res, next, id) {
  if (!_.isString(id)) {
    return res.status(400).send({
      message: 'File is invalid'
    });
  }

  File.get(id).then(function(item){
    if(_.isUndefined(item)){
      return res.status(400).send({
        message: 'file not found'
      });
    }

    req.model = item;
    next();
  })
  .catch(function(err){
    console.log(err);
    return next(err);
  });
};