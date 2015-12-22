'use strict';

(function() {

	angular
	    .module('company')
	    .controller('companyController', companyController);

	companyController.$inject = ['$scope', 'CompanyService', 'TrialService', '$state', 'CampaignService'];

	function companyController($scope, CompanyService, TrialService, $state, CampaignService) {
		var vm = this;

		function init() {
			var company = CompanyService.getCompany().get({
				id: $state.params.companyId
			}, function() {
				vm.company = company;
			}, function(err) {
				$state.go('landing.default');
			});

			var campaigns = CampaignService.listCampaigns().query({
				id: $state.params.companyId
			}, function() {
				vm.campaigns = campaigns;
				console.log(vm.campaigns);
			});
		}

		init();
	}

})();