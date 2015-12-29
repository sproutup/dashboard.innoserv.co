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
var _ = require('lodash');
var slug = require('slug');
var redis = require('config/lib/redis');

/**
 * Article Schema
 */
var CompanySchema = new Schema({
  id: {
    type: String,
    default: function(){ return intformat(flakeIdGen.next(), 'dec'); },
    hashKey: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  slug: {
    type: String
  },
  url: {
    type: String,
    default: '',
    trim: true
  }
});

CompanySchema.statics.find = function (id) {
  var _this = this;

  return redis.hgetall('company:'+id)
    .then(function(company){
      if(_.isEmpty(company)){
        return _this.get(id).then(function(company){
          redis.hmset('company:'+id, company);
          return company;
        });
      }
      else{
        return company;
      }
  })
  .catch(function(err){
    console.log(err);
    throw err;
  });
};


CompanySchema.statics.findBySlug = function (slug) {
  var _this = this;

  return redis.get('company:slug:'+slug)
    .then(function(id){
      return _this.find(id);
  })
  .catch(function(err){
    console.log(err);
    throw err;
  });
};


var Company = dynamoose.model('Company', CompanySchema);

/**
 * Hook a pre save method to create the slug
 */
Company.pre('save', function(next) {
  if (this.name) {
    this.slug = slug(this.name);
  }

  redis.set('company:slug:' + this.slug, this.id);
  redis.hmset('company:' + this.id, this);
  // new user check email
//  if (!this.id){
//    User.get({email: this.email});
//  }

  next();
});


