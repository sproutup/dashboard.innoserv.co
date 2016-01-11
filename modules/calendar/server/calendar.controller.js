'use strict';

/**
 * Module dependencies.
 */
var Calendar = require('./calendar.service');
var errorHandler = require('modules/core/server/errors.controller');
var _ = require('lodash');

/**
 * Create an event
 */
exports.createEvent = function (req, res) {
  // This obj is a temporary hack to create with postman
  var eventObj = {
    start: {
      date: req.body.start,
      dateTime: req.body.startTime
    },
    end: {
      date: req.body.end,
      dateTime: req.body.endTime
    },
    summary: req.body.summary
  };

  Calendar.insertEvent(req.params.calendarId, eventObj)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
    });
};

/**
 * List of events
 */
exports.listEvents = function (req, res) {
  Calendar.listEvents(req.params.calendarId)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
    });
};

/**
 * Get an event
 */
exports.getEvent = function (req, res) {
  Calendar.getEvent(req.params.calendarId, req.params.eventId)
    .then(function(result) {
      console.log('event: ', result);
      res.json(result[0]);
    })
    .catch(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
    });
};

/**
 * Update an event
 */
exports.updateEvent = function (req, res) {
  Calendar.updateEvent(req.params.calendarId, req.body.event)
    .then(function(result) {
      res.json(result[0]);
    })
    .catch(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
    });
};

/**
 * Delete an event
 */
exports.deleteEvent = function (req, res) {
  Calendar.deleteEvent(req.params.calendarId, req.params.eventId)
    .then(function(result) {
      res.json({ message: 'success' });
    })
    .catch(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      }
    });
};