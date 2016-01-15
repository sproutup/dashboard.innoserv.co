'use strict';

angular
  .module('core')
  .directive('uniqueEmail', EmailDirective);

EmailDirective.$inject = ['$q', '$timeout', '$http'];

function EmailDirective($q, $timeout, $http) {
  var directive = {
    require: 'ngModel',
    link: linkFunc,
  };

  return directive;

  function linkFunc(scope, el, attr, ctrl) {
    console.log('attr:', attr.uniqueEmail);
    ctrl.$asyncValidators.uniqueemail = function(modelValue, viewValue) {
      if (ctrl.$isEmpty(modelValue)) {
        // consider empty model valid
        return $q.when();
      }

      var def = $q.defer();
      var email = modelValue;

      if(attr.uniqueEmail) email = email + '@' + attr.uniqueEmail;

      $http.post('/api/auth/validate/email', {email: email}).success(function (response) {
        if(response.result === 1){
          def.resolve();
        }
        else{
          def.reject();
        }
      }).error(function (response) {
        def.reject();
      });

/*      $timeout(function() {
        // Mock a delayed response
        if (usernames.indexOf(modelValue) === -1) {
          // The username is available
          console.log('not found');
          def.resolve();
        } else {
          console.log('found');
          def.reject();
        }
      }, 2000); */

      return def.promise;
    };

  }
}


