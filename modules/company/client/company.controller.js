'use strict';

(function() {

	angular
	    .module('company')
	    .controller('companyController', companyController);

	companyController.$inject = ['$scope'];

	function companyController($scope) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Community';

	}

})();