'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', 'TeamService',
  function ($scope, $state, Authentication, Menus, TeamService) {
    
    // if (!Authentication.user) {
    //   $state.go('landing.default');
    // }

    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');
    
    $scope.myCompanies = TeamService.listByUser().get({
      userId: Authentication.user.id
    },function() {
      console.log('in here', $scope);
      Authentication.sessionCompany = $scope.myCompanies[0];
    });

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);
