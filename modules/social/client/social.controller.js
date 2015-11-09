'use strict';

(function() {

	angular
	    .module('social')
	    .controller('socialController', socialController);

	socialController.$inject = ['$scope'];

	function socialController($scope) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Social';
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
	}

})();