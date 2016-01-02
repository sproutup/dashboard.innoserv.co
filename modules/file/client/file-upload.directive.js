'use strict';

angular
  .module('file')
  .directive('upFileUpload', fileUpload);

function fileUpload() {
  var directive = {
    restrict: 'EA',
    templateUrl: 'example.directive.html',
    scope: {
      max: '='
    },
    link: linkFunc,
    controller: 'FileController',
    // note: This would be 'ExampleController' (the exported controller name, as string)
    // if referring to a defined controller in its separate file.
    controllerAs: 'vm',
    bindToController: true // because the scope is isolated
  };

  return directive;

  function linkFunc(scope, el, attr, ctrl) {
    console.log('LINK: scope.min = %s *** should be undefined', scope.min);
    console.log('LINK: scope.max = %s *** should be undefined', scope.max);
    console.log('LINK: scope.vm.min = %s', scope.vm.min);
    console.log('LINK: scope.vm.max = %s', scope.vm.max);
  }
}

/*
angular.module('sproutupApp').directive('upAvatarUpload', ['FileService', 'AuthService', '$timeout',
    function (fileService, authService, $timeout) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                user: '='
            },
            templateUrl: 'assets/templates/up-avatar-upload.html',
            link: function (scope, element, attrs) {
                scope.myself = false;

                attrs.$observe('file', function (file) {
                    if (file) {
                        console.log("up-video - file changed: ", file);
                    }
                });

                scope.$watch('user', function(newValue, oldValue) {
                //attrs.$observe('user', function (user) {
                    if (scope.user) {
                        if(scope.user.id == authService.m.user.id){
                            scope.myself = true;
                        }
                    }
                });

                $timeout(function () {
                }, 0);

                scope.$watch(function(scope) { return scope.files },
                function(files) {
                    console.log("watch files...");
                    if (files != null) {
                        for (var i = 0; i < files.length; i++) {
                            scope.errorMsg = null;
                            (function(file) {
                                console.log("generate thumbnail");
                                generateThumb(file);
                            })(files[i]);
                        }
                    }
                });

                function generateThumb(file) {
                    if (file != null) {
                        console.log("set thumbnail...found file of type: " + file.type);
                        if (file.type.indexOf('image') > -1) {
                            console.log("set thumbnail...reader supported");
                            $timeout(function() {
                                console.log("set thumbnail...timeout entered");
                                var fileReader = new FileReader();
                                fileReader.readAsDataURL(file);
                                fileReader.onload = function(e) {
                                    $timeout(function() {
                                        console.log("set thumbnail url");
                                        file.dataUrl = e.target.result;
                                    });
                                }
                            });
                        }
                        else
                        if (file.type.indexOf('video') > -1) {
                            console.log("set thumbnail...reader supported");
                            file.dataUrl = "/assets/images/video-thumbnail.png";
                        }
                    }
                };

                scope.upload = function (files, message, refId, refType) {
                    console.log("upload: ", refId, refType, files);
                    fileService.authenticate(scope.files[0], message, refId, refType).then(
                        function (result) {
                            console.log("upload auth returned");
                            scope.files[0].progress = 50;

                            fileService.upload(result.file, result.data).then(
                                function (result) {
                                    // verify that upload to s3 is done
                                    fileService.verify(result.file, result.uuid).then(
                                        function (result) {
                                            result.file.progress = 100;
                                            fileService.addAvatar(result.file, result.uuid).then(
                                                function (result) {
                                                    result.file.progress = 100;
                                                    authService.getUser().then(
                                                        function(result){
                                                            scope.files[0].dataUrl = null;
                                                            scope.files = null;
                                                            scope.user.avatarUrl = result.avatarUrl;
                                                        }
                                                    )
                                                }
                                            )
                                        }
                                    )
                                },
                                function (error) {
                                    // todo handle error
                                },
                                function (result) {
                                    console.log("progress: ", result);
                                    scope.files[0].progress = (50 + (result.progress / 2)).toFixed(1);
                                }
                            );
                        },
                        function (errorPayload) {
                        },
                        function (result) {
                            console.log("progress: ", result);
                            scope.files[0].progress = (result.progress / 2).toFixed(1);
                        }
                    );
                }
            }
        }
    }
]);
*/
