'use strict';

(function() {

  angular
    .module('calendar')
    .controller('EventController', EventController);

  EventController.$inject = ['$scope', '$state', 'CalendarService', 'Authentication'];

  function EventController($scope, $state, CalendarService, Authentication) {
    var vm = this;
    vm.create = create;
    vm.remove = remove;
    vm.update = update;
    vm.cancel = cancel;
    vm.find = find;
    vm.findOne = findOne;

    function create(isValid) {
      vm.error = null;

      if (!isValid) {
        vm.invalid = true;
        $scope.$broadcast('show-errors-check-validity', 'eventForm');

        return false;
      } else {
        vm.invalid = false;
      }

      // Create new event
      var Event = CalendarService.events();
      var item = new Event({
        start: {
            dateTime: vm.startTime
        },
        end: {
            dateTime: vm.endTime
        },
        summary: vm.summary
      });


      item.$save(function (response) {
        $state.go('company.navbar.calendar.event.view', { eventId: response.id });
        // Clear form fields
        vm.startTime = '';
        vm.endTime = '';
        vm.summary = '';
        vm.description = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    }

    function update(isValid) {
      vm.error = null;

      if (!isValid) {
        vm.invalid = true;
        $scope.$broadcast('show-errors-check-validity', 'eventForm');

        return false;
      } else {
        vm.invalid = false;
      }

      CalendarService.events().update({
        id: vm.event.id,
        resource: vm.event
      }, function(response) {
        $state.go('company.navbar.calendar.event.view', { eventId: vm.event.id });
      }, function(err) {
        console.log(err);
      });
    }

    function cancel() {
      $state.go('company.navbar.calendar.event.list');
    }

    function find() {
      var eventsObj = CalendarService.events().query(function() {
        vm.events = eventsObj;
      }, function(err) {
        console.log(err);
      });
    }

    function findOne(eventId) {
      vm.success = false;
      if (!eventId) {
        eventId = $state.params.eventId;
      }

      var eventsObj = CalendarService.events().get({
        eventId: eventId
      }, function() {
        vm.event = eventsObj;
      }, function(err) {
        console.log(err);
      });
    }

    function remove(eventId) {
      if (!eventId) {
        eventId = $state.params.eventId;
      }

      CalendarService.events().delete({
        eventId: eventId
      }, function() {
        $state.go('company.navbar.calendar.event.view', { eventId: eventId });
      }, function(err) {
        console.log(err);
      });
    }
  }
})();
