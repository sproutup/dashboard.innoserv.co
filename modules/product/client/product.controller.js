'use strict';

(function() {

	angular
	    .module('product')
	    .controller('productController', productController);

	landingController.$inject = ['$scope', '$state'];

	function landingController($scope, $state) {
		console.log('in product');
		console.log($state);
	}

})();