'use strict';

angular.module('company').controller('ChangeCompanyBannerController', ['$scope', '$timeout', '$window', 'Authentication', '$http',
  function ($scope, $timeout, $window, Authentication, $http) {
    var banner = this;
    banner.saveBannerPicture = saveBannerPicture;

    // Save user profile picture
    function saveBannerPicture(fileId, companyId) {
      var req = {
        method: 'POST',
        url: 'api/company/picture',
        data: { fileId: fileId, companyId: companyId }
      };

      // Clear messages
      $scope.success = $scope.error = null;
      $http(req).then(function(val){
        console.log('success: ', val);
      }, function(err){
        console.log('err: ', err);
      });
    }
  }
]);