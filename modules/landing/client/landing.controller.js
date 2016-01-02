'use strict';

(function() {

	angular
	    .module('landing')
	    .controller('landingController', landingController);

	landingController.$inject = ['$scope', '$state', '$location', 'CompanyService', '$http', 'Authentication'];

	function landingController($scope, $state, $location, CompanyService, $http, Authentication) {
		var vm = this;
		vm.authentication = Authentication;
		vm.getStarted = getStarted;

		vm.company = CompanyService.companyBySlug().get({
			companySlug: $state.params.companySlug
		}, function(response) {
			if (!response.id) {
				$state.go('authentication.signin');
			}
			var index = vm.company.url.indexOf('www.');
			vm.company.domain = vm.company.url.substring((index + 4), vm.company.url.length);
		}, function(errorRepsonse) {
			console.log(errorRepsonse);
			$state.go('authentication.signin');
		});

		function getStarted() {
			var userEmail = String(vm.email + '@' + vm.company.domain);

			vm.credentials = {
				email: userEmail,
				company: vm.company
			};

			Authentication.emailSentTo = userEmail;

			$http.post('/api/auth/confirmEmail', vm.credentials).success(function (response) {
		      $state.go('landing.confirmation');
		    }).error(function (response) {
		      $scope.error = response.message;
		    });
		}
	}

})();