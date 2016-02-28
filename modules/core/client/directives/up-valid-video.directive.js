'use strict';
// This directive creates an avatar with the initials of the user
// It takes a height, width, and fontsize

angular
  .module('core')
  .directive('upValidVideo', upValidVideo);

function upValidVideo() {
  function getVideoId(str, prefixes) {
    var cleaned = str.replace(/^(https?:)?\/\/(www\.)?/, '');
    for(var i = 0; i < prefixes.length; i++) {
      if (cleaned.indexOf(prefixes[i]) === 0)
        return cleaned.substr(prefixes[i].length);
    }
    return undefined;
  }

  function getYouTubeId(url) {
    return getVideoId(url, [
      'youtube.com/watch?v=',
      'youtu.be/',
      'youtube.com/embed/'
    ]);
  }

  function getVimeoId(url) {
    return getVideoId(url, [
      'vimeo.com/'
    ]);
  }

  var directive = {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.validVideo = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        // check for valid video link
        if (getYouTubeId(viewValue)) {
          return true;
        } else if (getVimeoId(viewValue)) {
          return true;
        }

        // invalid video link
        return false;
      };
    }
  };

  return directive;
}