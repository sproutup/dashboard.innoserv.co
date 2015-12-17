'use strict';

(function() {

	angular
	    .module('landing')
	    .controller('landingController', landingController);

	landingController.$inject = ['$scope', '$state'];

	function landingController($scope, $state) {
		console.log('in landing');
		console.log($state);
	}

})();