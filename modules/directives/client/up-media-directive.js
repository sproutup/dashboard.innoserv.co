'use strict';

angular
    .module('core')
    .directive('upMedia', upMedia);

function upMedia() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'modules/directives/client/up-media.html',
        scope: {
            item: '='
        },
        link: linkFunc,
        controller: UpMediaController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    function linkFunc(scope, element, attr, ctrl) {
        console.log('here', scope);
    }
}

UpMediaController.$inject = ['$scope'];

function UpMediaController($scope) {
    var vm = this;

    if (vm.item.media === 'yt') {
        vm.item.url = 'https://www.youtube.com/watch?v=' + vm.item.ref;
        console.log(vm.item.url);
    }
}