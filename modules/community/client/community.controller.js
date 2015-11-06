'use strict';

(function() {

	angular
	    .module('community')
	    .controller('communityController', communityController);

	communityController.$inject = ['$scope'];

	function communityController($scope) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Community';
		vm.item.stats = [{
			stat: 'Requests',
			number: '154',
			sref: 'community.requests'
		}, {
			stat: 'Trials',
			number: '21',
			sref: 'community.trials'
		}, {
			stat: 'Ambassadors',
			number: '32',
			sref: 'community.ambassadors'
		}];
		vm.item.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  		vm.item.data = [300, 500, 100];

  		vm.requests = {
  			total: 170000,
  			labels: ['Twitter', 'YouTube', 'Instagram', 'Other'],
  			data: [33817, 71028, 28277, 59862]
  		};

	}

})();