'use strict';

(function() {

	angular
	    .module('timeline')
	    .controller('timelineController', timelineController);

	timelineController.$inject = ['$scope'];

	function timelineController($scope) {
		var vm = this;
		vm.item = {};
		vm.item.title = 'Timeline';

    vm.events = [{
      time: '3:30 pm',
      type: 'content',
      user: {
        name: 'Andreas Kaggle',
        avatarUrl: 'https://pbs.twimg.com/profile_images/649108987128868864/rWnwMe55.jpg'
      },
      text: 'Andreas Kaggle published a YouTube video about Boosted Boards'
    }, {
      time: '3:45 pm',
      type: 'trial',
      user: {
        name: 'Andreas Kaggle',
        avatarUrl: 'https://pbs.twimg.com/profile_images/649108987128868864/rWnwMe55.jpg'
      },
      text: 'Andreas Kaggle began his trial with Boosted Boards'
    }];
	}

})();