'use strict';

/**
 * Module dependencies.
 */
var calendarPolicy = require('./calendar.policy'),
    calendar = require('./calendar.controller');

module.exports = function (app) {
  app.route('/api/calendar/:calendarId/event').all(calendarPolicy.isAllowed)
    .get(calendar.listEvents)
    .post(calendar.createEvent);

  app.route('/api/calendar/:calendarId/event/:eventId').all(calendarPolicy.isAllowed)
    .get(calendar.getEvent)
    .put(calendar.updateEvent)
    .delete(calendar.deleteEvent);
};