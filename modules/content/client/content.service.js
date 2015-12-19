'use strict';

angular
    .module('content')
    .factory('ContentService', ContentService);

ContentService.$inject = ['$resource'];

function ContentService($resource){
  var service = {
    getContent: getContent 
  };

  return service;

  function getContent () {
    return [
      {
        user: {
          profileImageURL: 'https://yt3.ggpht.com/-_gNR0XqmaFg/AAAAAAAAAAI/AAAAAAAAAAA/e_l7cL9lvmI/s88-c-k-no/photo.jpg',
          name: 'Berkman Center'
        },
        type: 'YouTube',
        url: 'https://www.youtube.com/embed/A_0FgRKsqqU',
        views: '108,837',
        minutesWatched: '837,928',
        likes: '1,203',
        comments: '2,873',
        clicks: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          data: [ [180, 1100, 240, 727, 1232] ],
          series: 'Clicks'
        }
      }
    ]; 
  }    
}