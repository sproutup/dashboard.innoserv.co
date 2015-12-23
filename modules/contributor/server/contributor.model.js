'use strict';

/**
 * Module dependencies.
 */
var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();
var intformat = require('biguint-format');
var validator = require('validator');

/**
 * Schema
 */
var ContributorSchema = new Schema({
  userId: {
    type: String,
    hashKey: true
  },
  campaignId: {
    type: String,
    rangeKey: true,
    required: true,
    index: {
      global: true,
      rangeKey: 'userId',
      name: 'ContributorCampaignIndex',
      project: true, // ProjectionType: ALL
      throughput: 5 // read and write are both 5
    }
  },
  created: {
    type: Date,
    default: Date.now
  },
  state: {
    type: Number,
    default: 0
  }
});

dynamoose.model('Contributor', ContributorSchema);

