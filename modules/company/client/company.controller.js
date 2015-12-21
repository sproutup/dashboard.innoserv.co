'use strict';

(function() {

	angular
	    .module('company')
	    .controller('companyController', companyController);

	companyController.$inject = ['$scope', 'CompanyService', 'TrialService'];

	function companyController($scope, CompanyService, TrialService) {
		var vm = this;

		function init() {
			vm.company = CompanyService.getCompany();
			vm.trials = TrialService.getTrials();
		}

		init();
	}

})();