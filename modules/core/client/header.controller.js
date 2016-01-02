'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', 'TeamService', 'CompanyService', '$cookieStore',
  function ($scope, $state, Authentication, Menus, TeamService, CompanyService, $cookieStore) {

    if (!Authentication.user) {
      $state.go('landing.default');
    }

    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.topbar = Menus.getMenu('topbar');

    // Get the navbar menu
    $scope.navbar = Menus.getMenu('navbar');

    // Get the context menu
    $scope.contextbar = Menus.getMenu('contextbar');

    // $scope.myCompanies = TeamService.listByUser().query({
    //   userId: Authentication.user.id
    // }, function() {
    //   console.log($scope.myCompanies);
    //   Authentication.user.sessionCompany = $scope.myCompanies[0];
    // });

    $scope.companies = CompanyService.company().query();

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    $scope.companyChange = function(company) {
      Authentication.user.sessionCompany = company;
      $cookieStore.put('sessionCompany', company);
      window.location.reload();
    };

    var sessionCompany = $cookieStore.get('sessionCompany');

    if (sessionCompany && Authentication.user) {
      $scope.company = sessionCompany;
      Authentication.user.sessionCompany = sessionCompany;
    } else {
      console.log('you need to select a company');
      $state.go('user.companies');
    }

    $scope.handleCompanyClick = function() {
      $state.go('user.companies');
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);
