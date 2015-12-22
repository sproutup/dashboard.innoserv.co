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
var CampaignSchema = new Schema({
  id: {
    type: String,
    default: function(){ return intformat(flakeIdGen.next(), 'dec'); },
    hashKey: true
  },
  companyId: {
    type: String,
    required: true,
    index: {
      global: true,
      rangeKey: 'id',
      name: 'CompanyCampaignIndex',
      project: true, // ProjectionType: ALL
      throughput: 5 // read and write are both 5
    }
  },
  productId: {
    type: String,
    index: {
      global: true,
      rangeKey: 'id',
      name: 'ProductCampaignIndex',
      project: true, // ProjectionType: ALL
      throughput: 5 // read and write are both 5
    }
  },
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  type: {
    type: String,
    default: '',
    trim: true
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  }
});

dynamoose.model('Campaign', CampaignSchema);
