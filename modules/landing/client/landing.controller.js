'use strict';

(function() {

	angular
	    .module('landing')
	    .controller('landingController', landingController);

	landingController.$inject = ['$scope', '$state', 'CompanyService', '$http'];

	function landingController($scope, $state, CompanyService, $http) {
		var vm = this;
		vm.getStarted = getStarted;

		vm.company = CompanyService.companyBySlug().get({
			companySlug: $state.params.companySlug
		}, function(response) {
			var index = vm.company.url.indexOf('www.');
			vm.company.domain = vm.company.url.substring((index + 4), vm.company.url.length);
		}, function(errorRepsonse) {
			console.log(errorRepsonse);
			$state.go('authentication.signup');
		});

		function getStarted() {
			var userEmail = String(vm.email + '@' + vm.company.domain);

			vm.credentials = {
				email: userEmail,
				company: vm.company
			};

			$http.post('/api/auth/confirmEmail', vm.credentials).success(function (response) {
		      // If successful we assign the response to the global user model
		      console.log(response);

		      // And redirect to the previous or home page
		      $state.go($state.previous.state.name || 'home', $state.previous.params);
		    }).error(function (response) {
		      $scope.error = response.message;
		    });
		}
	}

})();