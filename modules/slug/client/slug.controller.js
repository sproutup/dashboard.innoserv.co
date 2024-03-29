'use strict';

angular
  .module('slug')
  .controller('SlugController', SlugController);

SlugController.$inject = ['$state', 'SlugService', 'slugitem'];

function SlugController($state, SlugService, slugitem) {
  var vm = this;
  vm.item = null;
  vm.init = true;
  vm.slug = slug;

  console.log('slug init: ', slugitem.data.type);
  vm.item = slugitem.data.item;
  if($state.current.name === 'slug'){
    var state = $state.current.name + '.' + slugitem.data.type.toLowerCase();
    console.log('slug redirect: ', state);
    $state.go(state);
  }

  function slug() {
    console.log('slug init: ', slugitem.data.type);
    vm.item = slugitem.data.item;
    if($state.current.name === 'slug'){
      var state = $state.current.name + '.' + slugitem.data.type.toLowerCase();
      console.log('slug redirect: ', state);
      $state.go(state);
    }
  }
}
