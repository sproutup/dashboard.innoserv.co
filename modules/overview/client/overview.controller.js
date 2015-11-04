'use strict';

(function() {

	angular
	    .module('overview')
	    .controller('overviewController', overviewController);

	overviewController.$inject = ['$scope'];

	function overviewController($scope) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Overview';
		vm.item.stats = [{
			stat: 'Impressions',
			number: '18,321',
			sref: 'overview.impressions'
		}, {
			stat: 'Content Views',
			number: '21,321',
			sref: 'overview.content'
		}, {
			stat: 'Engagements',
			number: '1,321',
			sref: 'overview.engagement'
		}];
	  	vm.item.labels = ['January', 'February', 'March', 'April', 'May'];
	  	vm.item.series = ['Impressions'];
	  	vm.item.data = [
			[128, 940, 3910, 10227, 18321]
		];
	}

})();