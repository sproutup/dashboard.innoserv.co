'use strict';

var google = require('googleapis');
var calendar = google.calendar('v3');
/* global -Promise */
var Promise = require('bluebird');
var key = require('google.json');
var scope1 = 'https://www.googleapis.com/auth/calendar';
var scope2 = 'https://www.googleapis.com/auth/calendar.readonly';
var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, [scope1, scope2], null);
var testEvent;

Promise.promisifyAll(calendar.calendars);
Promise.promisifyAll(calendar.events);

var CalendarService = function(){};

CalendarService.init = function() {
  jwtClient.authorize(function(err, tokens) {
    if (err) {
      console.log('err initing CalendarService', err);
    } else {
      console.log('success initing CalendarService');
    }
  });
};

CalendarService.init();

CalendarService.insertEvent = function(calendarId, event) {
  return calendar.events
    .insertAsync({ auth: jwtClient, calendarId: calendarId, resource: event })
    .then(function(result){ 
      console.log('inserted event: ', result[0]);
      return result; 
  })
  .catch(function(err) {
    console.log('err: ', err.errors[0].message);
    throw err;
  });
};

CalendarService.getEvent = function(calendarId, eventId) {
  return calendar.events
    .getAsync({ auth: jwtClient, calendarId: calendarId, eventId: eventId })
    .then(function(result){ 
      console.log('event: ', result[0]);
      return result; 
  })
  .catch(function(err) {
    console.log('get err: ', err);
    throw err;
  });
};

CalendarService.listEvents = function(calendarId) {
  return calendar.events
    .listAsync({ auth: jwtClient, calendarId: calendarId })
    .then(function(result){ 
      console.log('events: ', result[0].items.length);
      return result[0]; 
  })
  .catch(function(err) {
    console.log('err: ', err.errors[0].message);
    throw err;
  });
};

CalendarService.updateEvent = function(calendarId, event) {
  return calendar.events
    .updateAsync({ auth: jwtClient, calendarId: calendarId, eventId: event.id, resource: event })
    .then(function(result){ 
      console.log('updated event: ', result[0]);
      return result; 
  })
  .catch(function(err) {
    console.log('update err: ', err.errors[0].message);
    throw err;
  });
};

CalendarService.deleteEvent = function(calendarId, eventId) {
  return calendar.events
    .deleteAsync({ auth: jwtClient, calendarId: calendarId, eventId: eventId })
    .then(function(result){ 
      console.log('deleted an event');
      return result; 
  })
  .catch(function(err) {
    console.log('delete err: ', err.errors[0].message);
    throw err;
  });
};

CalendarService.getCalendar = function(calendarId) {
  return calendar.calendars
    .getAsync({ auth: jwtClient, calendarId: calendarId })
    .then(function(result){
      console.log('calendar: ', result[0]);
      return result; 
  })
  .catch(function(err) {
    console.log('err: ', err.errors[0].message);
    throw err;
  });
};

testEvent = {
  'id': 'f3erf6te7075m98lkp26v576b8',
  'summary': 'Google I/O 2210',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-10-02T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2015-10-02T10:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};

module.exports = CalendarService;