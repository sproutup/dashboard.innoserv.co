'use strict';

(function() {

  angular
    .module('theme')
    .controller('ThemeController', ThemeController);

    ThemeController.$inject = ['$scope', '$state', 'Authentication', 'Menus'];

    function ThemeController($scope, $state, Authentication, Menus) {
        var vm = this;
        vm.success = false;
        vm.authentication = Authentication;
    }
})();
