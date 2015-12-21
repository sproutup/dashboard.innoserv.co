'use strict';

angular
    .module('company')
    .factory('CompanyService', CompanyService);

CompanyService.$inject = ['$resource'];

function CompanyService($resource) {
  var service = {
    getCompany: getCompany
  };

  return service;

  function getCompany () {
    return {
        name: 'RocketSkates',
        products: [{
            name: 'R8',
            image: 'http://www.urbanskates.sg/uploads/5/3/5/1/53515067/s344895188113468383_p5_i2_w2560.jpeg',    
            id: 1,
            tagline: 'The second best RocketSkates.',
            slug: 'R8',
            urlFacebook: 'https://www.facebook.com/pages/Minipresso/453094381401710',
            urlHome: 'http://www.wacaco.com/',
            urlTwitter: 'https://twitter.com/wacaco_ltd'
        }, {
            name: 'R10',
            iamge: 'http://i.ebayimg.com/images/g/d-sAAOSwsB9WB1yS/s-l300.jpg',
            id: 2,
            tagline: 'The best RocketSkates yet.',
            slug: 'R10',
            urlFacebook: 'https://www.facebook.com/pages/Minipresso/453094381401710',
            urlHome: 'http://www.wacaco.com/',
            urlTwitter: 'https://twitter.com/wacaco_ltd'
        }]
    };
  }

  // function getProducts () {
  //   return 
  // }

}