'use strict';

(function() {

  angular
    .module('team')
    .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope', 'TeamService', '$state', '$location', 'Authentication', 'Menus', '$http', '$uibModal'];

    function TeamController($scope, TeamService, $state, $location, Authentication, Menus, $http, $modal) {
        var vm = this;
        vm.success = false;
        vm.create = create;
        vm.remove = remove;
        vm.update = update;
        vm.find = find;
        vm.findOne = findOne;
        vm.authentication = Authentication;
        vm.sendInvite = sendInvite;
        vm.openLeaveModal = openLeaveModal;
        vm.user = Authentication.user;

        console.log('team controller loaded');
        // Get the topbar menu
//        vm.menu = Menus.getMenu('user.company.profile.menu');

        function create(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            //$scope.$broadcast('show-errors-check-validity', 'companyForm');

            return false;
          } else {
            vm.invalid = false;
          }

          // Create new team object
          var Team = TeamService.team();
          var item = new Team({
            name: this.name,
            url: this.url
          });

          // Redirect after save
          item.$save(function (response) {
            $state.go('user.team');

            // Clear form fields
            vm.name = '';
            vm.url = '';
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function remove(company) {
          if (company) {
            company.$remove();

            for (var i in vm.companies) {
              if (vm.companies[i] === company) {
                vm.companies.splice(i, 1);
              }
            }
          }
        }

        function update(isValid) {
          vm.error = null;

          if (!isValid) {
            vm.invalid = true;
            //$scope.$broadcast('show-errors-check-validity', 'articleForm');

            return false;
          } else {
            vm.invalid = false;
          }

          var company = vm.company;

          company.$update(function() {
            vm.success = true;
          }, function (errorResponse) {
            console.log(errorResponse);
            vm.error = errorResponse.data.message;
          });
        }

        function find() {
          if (!$scope.company.company.id) {
            var listener = $scope.$watch('company.company.id', function(val) {
              if(val) {
                listener();
                find();
              }
            });
            return;
          }

          TeamService.listByCompany().query({companyId: $scope.company.company.id}, function(data){
            vm.team = data;
          });
        }

       function findAll() {
          TeamService.team().query(function(data){
            vm.team = data;
          });
        }

        function findOne() {
          TeamService.team().get({
            companyId: Authentication.company.id
          }, function(data) {
            vm.team = data;
          }, function(err) {
            $state.go('landing.default');
          });
        }

        function sendInvite() {
          // Make sure the invitee isn't already on the team
          for (var i in vm.team) {
            if (vm.team[i].user && vm.team[i].user.email === vm.invitee) {
              vm.inviteError = { exists: true };
              return;
            }
          }

          $http.post('/api/auth/invite', {invitee: vm.invitee, companyId: $scope.company.company.id}).success(function (response) {
            vm.inviteSuccess = true;
            vm.inviteError = false;
          });
        }

        function openLeaveModal() {
          var modalInstance = $modal.open({
            templateUrl: 'modules/team/client/leave-confirmation.html',
            controller: 'DeleteController',
            controllerAs: 'vm',
            resolve: {
              message: function() { return 'You are about to leave the team and you will not have access to this company\'s dashboard.'; }
            }
          });

          modalInstance.result.then(function () {
            leaveTeam();
          }, function () {
            console.log('Modal dismissed at: ' + new Date());
          });
        }

        function leaveTeam() {
          $http.post('/api/team/leave', { companyId: $scope.company.company.id }).success(function(response) {
            $state.go('footer.select');
          });
        }
   }
})();
