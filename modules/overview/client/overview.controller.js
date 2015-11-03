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
			number: '12,321'
		}, {
			stat: 'Content Views',
			number: '21,321'
		}, {
			stat: 'Engagements',
			number: '1,321'
		}];
		vm.item.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  		vm.item.data = [300, 500, 100];
	}

})();