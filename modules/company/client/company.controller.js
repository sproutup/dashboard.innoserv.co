'use strict';

(function() {

	angular
	    .module('company')
	    .controller('companyController', companyController);

	companyController.$inject = ['$scope', '$state'];

	function companyController($scope, $state) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Community';

	}

})();