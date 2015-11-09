'use strict';

angular
    .module('content')
    .factory('ContentService', ContentService);

ContentService.$inject = ['$resource'];

function ContentService($resource){
  return [
      {
        'id': '285',
        'body': 'Went hands on with the BloomSky Weather Station:\n\nhttp://donthatethegeek.com/geek-review-bloomsky-weather-station/',
        'createdAt': '2015-10-15T18:47:34.000Z',
        'user': {
          'id': 1072,
          'name': 'Chad Gottfried',
          'nickname': 'chadgottfried',
          'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
          'urlTwitter': 'https://twitter.com/LoganDX',
          'handleTwitter': 'LoganDX',
          'points': '1010'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '147',
          'title': 'Geek Review: BloomSky Weather Station',
          'url': 'http://donthatethegeek.com/geek-review-bloomsky-weather-station/',
          'createdAt': '2015-10-15T18:47:34.000Z',
          'description': '&nbsp;\r\n\r\n\r\n\r\nIm not sure about you geeks but where I reside the weather can be quite unpredict...',
          'image': 'http://donthatethegeek.com/wp-content/uploads/2015/10/bloomsky-primary-100356531-large-580x330.jpeg'
        },
        'likes': {
          'data': [
            {
              'id': 315,
              'createdAt': '2015-10-19T01:33:21.000Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            }
          ],
          'count': 1
        },
        'comments': {
          'data': [
            {
              'id': '185',
              'createdAt': '2015-10-31T18:29:44.957Z',
              'body': 'Is this more accurate than say, The Weather Channel?',
              'user': {
                'id': 1468,
                'name': 'Isaiah Carlson (Bestech Guru)',
                'nickname': 'techguruer',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/BestechGuru',
                'handleTwitter': 'BestechGuru',
                'points': '250'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '224',
              'createdAt': '2015-11-04T03:39:46.731Z',
              'body': 'I love the ability of the camera and then you can look at it on your phone! This is something that  i would definitely look into getting',
              'user': {
                'id': 865,
                'name': 'Eric Siemek',
                'nickname': 'ericsiemek',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/f080eb6a-ba36-4e29-b7c2-39cf4f289288_865.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/elistreviews',
                'handleTwitter': 'elistreviews',
                'points': '320'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            }
          ],
          'count': '2'
        }
      },
      {
        'id': '278',
        'body': 'https://www.youtube.com/watch?v=845E8PRIack',
        'createdAt': '2015-10-11T17:20:07.000Z',
        'user': {
          'id': 1016,
          'name': 'Kulneet Singh Choudhary',
          'nickname': 'kulneetsingh choudhary',
          'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
          'urlTwitter': 'http://twitter.com/iceQman101',
          'handleTwitter': 'iceQman101',
          'points': '4040'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '141',
          'title': 'Bloomsky Weather Center Review!',
          'url': 'https://www.youtube.com/watch?v=845E8PRIack',
          'createdAt': '2015-10-11T17:20:07.000Z',
          'description': 'Bloomsky Weather Center Review! Try BloomSky For Yourself!!!!: http://goo.gl/io4i6E Hello YouTube today I had the opportunity to receive a review unit from t...',
          'image': 'https://i.ytimg.com/vi/845E8PRIack/maxresdefault.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 320,
              'createdAt': '2015-10-19T01:36:11.000Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            }
          ],
          'count': 1
        },
        'comments': {
          'data': [
            {
              'id': '197',
              'createdAt': '2015-10-31T19:01:19.063Z',
              'body': 'What prevents this from being taken by an evil neighbor?',
              'user': {
                'id': 1468,
                'name': 'Isaiah Carlson (Bestech Guru)',
                'nickname': 'techguruer',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/BestechGuru',
                'handleTwitter': 'BestechGuru',
                'points': '250'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '231',
              'createdAt': '2015-11-04T03:47:54.625Z',
              'body': 'Love this product! Great review, Cant wait to read more of your reviews',
              'user': {
                'id': 865,
                'name': 'Eric Siemek',
                'nickname': 'ericsiemek',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/f080eb6a-ba36-4e29-b7c2-39cf4f289288_865.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/elistreviews',
                'handleTwitter': 'elistreviews',
                'points': '320'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            }
          ],
          'count': '2'
        }
      },
      {
        'id': '277',
        'body': 'https://www.youtube.com/watch?v=nRRkUarnZgc',
        'createdAt': '2015-10-11T17:19:14.000Z',
        'user': {
          'id': 1016,
          'name': 'Kulneet Singh Choudhary',
          'nickname': 'kulneetsingh choudhary',
          'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
          'urlTwitter': 'http://twitter.com/iceQman101',
          'handleTwitter': 'iceQman101',
          'points': '4040'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '140',
          'title': 'BloomSky Weather Center Unboxing!',
          'url': 'https://www.youtube.com/watch?v=nRRkUarnZgc',
          'createdAt': '2015-10-11T17:19:14.000Z',
          'description': 'Try BloomSky For Yourself!!!!: http://goo.gl/io4i6E Watch ther review of this: https://youtu.be/845E8PRIack Hello YouTube today I had the opportunity to rece...',
          'image': 'https://i.ytimg.com/vi/nRRkUarnZgc/maxresdefault.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 367,
              'createdAt': '2015-10-27T03:32:08.977Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            }
          ],
          'count': 1
        },
        'comments': {
          'data': [
            {
              'id': '232',
              'createdAt': '2015-11-04T03:48:18.798Z',
              'body': 'Great review! Well put together!',
              'user': {
                'id': 865,
                'name': 'Eric Siemek',
                'nickname': 'ericsiemek',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/f080eb6a-ba36-4e29-b7c2-39cf4f289288_865.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/elistreviews',
                'handleTwitter': 'elistreviews',
                'points': '320'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            }
          ],
          'count': '1'
        }
      },
      {
        'id': '276',
        'body': 'Check out my review of the BloomSky Weather station.\nPlease subscribe to my Youtube channel: https://www.youtube.com/user/iceQman101\nReview:\nhttps://youtu.be/845E8PRIack',
        'createdAt': '2015-10-11T17:18:36.000Z',
        'user': {
          'id': 1016,
          'name': 'Kulneet Singh Choudhary',
          'nickname': 'kulneetsingh choudhary',
          'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
          'urlTwitter': 'http://twitter.com/iceQman101',
          'handleTwitter': 'iceQman101',
          'points': '4040'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '139',
          'title': 'iceQman101',
          'url': 'https://www.youtube.com/user/iceQman101',
          'createdAt': '2015-10-11T17:18:36.000Z',
          'description': 'Official iceQman101™ YouTube Channel',
          'image': 'https://yt3.ggpht.com/-eHSbX0aPPtQ/AAAAAAAAAAI/AAAAAAAAAAA/THWyTgzz1go/s900-c-k-no/photo.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 368,
              'createdAt': '2015-10-27T03:32:12.356Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            }
          ],
          'count': 1
        },
        'comments': {
          'data': [],
          'count': '0'
        }
      },
      {
        'id': '263',
        'body': 'Brad Panovich, Chief Meteorologist in Charlotte, NC, has started testing out BloomSky: https://twitter.com/wxbrad/status/648866176592924672',
        'createdAt': '2015-09-29T20:52:49.000Z',
        'user': {
          'id': 17,
          'name': 'SproutUp Co',
          'nickname': 'sproutupco',
          'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/330614cd-bc7a-491f-a3be-7c809239c0e4_17.jpg?w=256&h=256',
          'urlTwitter': 'https://twitter.com/sproutupco',
          'handleTwitter': 'sproutupco',
          'points': '10010'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '129',
          'title': 'Brad Panovich on Twitter',
          'url': 'https://twitter.com/wxbrad/status/648866176592924672',
          'createdAt': '2015-09-29T20:52:49.000Z',
          'description': '“My @bloomsky is all set up and testing has begun.”',
          'image': 'https://pbs.twimg.com/media/CQE8WQ9WcAAtCNS.jpg:large'
        },
        'likes': {
          'data': [
            {
              'id': 250,
              'createdAt': '2015-09-30T14:49:05.000Z',
              'user': {
                'id': 149,
                'name': 'Thomas OBrien',
                'nickname': 'thomasobrien',
                'avatarUrl': 'https://pbs.twimg.com/profile_images/546875112947867649/U8BFoVYj_bigger.jpeg',
                'urlTwitter': 'https://twitter.com/thomasbeta',
                'handleTwitter': 'thomasbeta',
                'points': '1010'
              }
            },
            {
              'id': 253,
              'createdAt': '2015-09-30T22:41:02.000Z',
              'user': {
                'id': 1288,
                'name': 'Brandon Salt',
                'nickname': 'brandonsalt',
                'avatarUrl': 'https://pbs.twimg.com/profile_images/636210594899718148/0PL32W8s_bigger.png',
                'urlTwitter': 'https://twitter.com/iambrandonsalt',
                'handleTwitter': 'iambrandonsalt',
                'points': '0'
              }
            }
          ],
          'count': 2
        },
        'comments': {
          'data': [
            {
              'id': '119',
              'createdAt': '2015-10-23T02:47:41.668Z',
              'body': 'Wow! Any updates about what he thought?',
              'user': {
                'id': 1139,
                'name': 'Oliver Leopold',
                'nickname': 'oliver_leopold',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/007eee07-ddd7-495b-8e06-e3d458eeb51f_1139.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/oliver_leopold',
                'handleTwitter': 'oliver_leopold',
                'points': '1370'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '191',
              'createdAt': '2015-10-31T18:35:10.492Z',
              'body': 'Does it come with that solar panel?',
              'user': {
                'id': 1468,
                'name': 'Isaiah Carlson (Bestech Guru)',
                'nickname': 'techguruer',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/BestechGuru',
                'handleTwitter': 'BestechGuru',
                'points': '250'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '240',
              'createdAt': '2015-11-04T03:54:34.099Z',
              'body': 'How does this hold up in the weather? If there is a bad storm will it hold up?',
              'user': {
                'id': 865,
                'name': 'Eric Siemek',
                'nickname': 'ericsiemek',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/f080eb6a-ba36-4e29-b7c2-39cf4f289288_865.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/elistreviews',
                'handleTwitter': 'elistreviews',
                'points': '320'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            }
          ],
          'count': '3'
        }
      },
      {
        'id': '251',
        'body': 'Hello everyone, I am newly emerging tech youtuber (iceQman101). I have just received my review unit of the Bloomsky and I have posted an unboxing of it and I will be reviewing it in a week or so. So far I have really enjoyed the product and its functionality.\nUnboxing: https://youtu.be/nRRkUarnZgc',
        'createdAt': '2015-09-24T19:48:21.000Z',
        'user': {
          'id': 1016,
          'name': 'Kulneet Singh Choudhary',
          'nickname': 'kulneetsingh choudhary',
          'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
          'urlTwitter': 'http://twitter.com/iceQman101',
          'handleTwitter': 'iceQman101',
          'points': '4040'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '119',
          'title': 'BloomSky Weather Center Unboxing!',
          'url': 'https://youtu.be/nRRkUarnZgc',
          'createdAt': '2015-09-24T19:48:21.000Z',
          'description': 'Try BloomSky For Yourself!!!!: http://goo.gl/io4i6E Hello YouTube today I had the opportunity to receive a review unit from the courtesy of SproutUp and Bloo...',
          'image': 'https://i.ytimg.com/vi/nRRkUarnZgc/maxresdefault.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 225,
              'createdAt': '2015-09-24T20:15:32.000Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            },
            {
              'id': 226,
              'createdAt': '2015-09-24T20:15:59.000Z',
              'user': {
                'id': 5,
                'name': 'Tao Ni',
                'nickname': 'taoni',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/a132bd4a-5685-44fb-adbc-c08b94ba50e8_5.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '80'
              }
            }
          ],
          'count': 2
        },
        'comments': {
          'data': [
            {
              'id': '75',
              'createdAt': '2015-09-24T20:17:34.000Z',
              'body': 'Kulneet, welcome to SproutUp influencer community, and excited to get you started on BloomSky. Show more the beautiful sky weve got at NoVA :)',
              'user': {
                'id': 5,
                'name': 'Tao Ni',
                'nickname': 'taoni',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/a132bd4a-5685-44fb-adbc-c08b94ba50e8_5.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '80'
              },
              'likes': {
                'data': [
                  {
                    'id': 228,
                    'createdAt': '2015-09-24T20:47:48.000Z',
                    'user': {
                      'id': 1016,
                      'name': 'Kulneet Singh Choudhary',
                      'nickname': 'kulneetsingh choudhary',
                      'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
                      'urlTwitter': 'http://twitter.com/iceQman101',
                      'handleTwitter': 'iceQman101',
                      'points': '4040'
                    }
                  }
                ],
                'count': 1
              }
            },
            {
              'id': '76',
              'createdAt': '2015-09-24T20:49:02.000Z',
              'body': 'Thanks! I am scared that the device might get stolen that is why I did not take it out but I will soon!',
              'user': {
                'id': 1016,
                'name': 'Kulneet Singh Choudhary',
                'nickname': 'kulneetsingh choudhary',
                'avatarUrl': 'https://graph.facebook.com/639555319480752/picture/?type=large',
                'urlTwitter': 'http://twitter.com/iceQman101',
                'handleTwitter': 'iceQman101',
                'points': '4040'
              },
              'likes': {
                'data': [
                  {
                    'id': 420,
                    'createdAt': '2015-10-31T18:38:50.070Z',
                    'user': {
                      'id': 1468,
                      'name': 'Isaiah Carlson (Bestech Guru)',
                      'nickname': 'techguruer',
                      'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                      'urlTwitter': 'https://twitter.com/BestechGuru',
                      'handleTwitter': 'BestechGuru',
                      'points': '250'
                    }
                  }
                ],
                'count': 1
              }
            },
            {
              'id': '77',
              'createdAt': '2015-09-24T21:39:17.000Z',
              'body': 'Thanks a good question. @bloomsky - any advice on how to keep it safe? Its too cool not to attract any attention isnt it?',
              'user': {
                'id': 5,
                'name': 'Tao Ni',
                'nickname': 'taoni',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/a132bd4a-5685-44fb-adbc-c08b94ba50e8_5.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '80'
              },
              'likes': {
                'data': [
                  {
                    'id': 421,
                    'createdAt': '2015-10-31T18:38:54.668Z',
                    'user': {
                      'id': 1468,
                      'name': 'Isaiah Carlson (Bestech Guru)',
                      'nickname': 'techguruer',
                      'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                      'urlTwitter': 'https://twitter.com/BestechGuru',
                      'handleTwitter': 'BestechGuru',
                      'points': '250'
                    }
                  }
                ],
                'count': 1
              }
            }
          ],
          'count': '3'
        }
      },
      {
        'id': '188',
        'body': 'A local chief meteorologist for one of my news stations actually found footage of the time lapse videos I had been posting about my bloomsky weather station review, and found my review on my site and decided to contact me, and ask me some questions about it.  Was a total thrill to get noticed like that, as I havent had anything like that for my blog before.  In case you missed the review, here it is. \n\nhttp://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/',
        'createdAt': '2015-09-01T14:08:35.000Z',
        'user': {
          'id': 196,
          'name': 'Tom Shewbridge',
          'nickname': 'tomshewbridge',
          'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/5aa3fa1d-c674-4828-9b28-c29f10093715_196.jpg?w=256&h=256',
          'urlTwitter': 'http://twitter.com/medictom',
          'handleTwitter': 'medictom',
          'points': '3000'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '78',
          'title': 'I have joined the #weatherlution and Bloomsky made that possible - Review ~ A Medics World',
          'url': 'http://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/',
          'createdAt': '2015-09-01T14:08:35.000Z',
          'description': 'I have joined the weatherlution with Bloomsky, and boy is it fun. If you want a gadget that will capture weather in pictures and videos, the Bloomsky is for you.',
          'image': 'http://amedicsworld.com/wp-content/uploads/2015/08/Bloomsky-Ready-for-Action.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 80,
              'createdAt': '2015-09-01T14:42:12.000Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            },
            {
              'id': 81,
              'createdAt': '2015-09-01T15:09:09.000Z',
              'user': {
                'id': 9,
                'name': 'Peter Andersen',
                'nickname': 'andersenpeter',
                'avatarUrl': 'https://pbs.twimg.com/profile_images/608651100179283969/3ITsk2vB_bigger.jpg',
                'urlTwitter': 'https://twitter.com/andersen_peter',
                'handleTwitter': 'andersen_peter',
                'points': '0'
              }
            }
          ],
          'count': 2
        },
        'comments': {
          'data': [
            {
              'id': '21',
              'createdAt': '2015-09-01T15:02:41.000Z',
              'body': 'Congrats Tom!! I hope you had a great conversation with the meteorologist. Wondering what his thoughts on BloomSky?',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '136',
              'createdAt': '2015-10-23T02:56:22.982Z',
              'body': 'What kind of customer would this be for?',
              'user': {
                'id': 1139,
                'name': 'Oliver Leopold',
                'nickname': 'oliver_leopold',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/007eee07-ddd7-495b-8e06-e3d458eeb51f_1139.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/oliver_leopold',
                'handleTwitter': 'oliver_leopold',
                'points': '1370'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            },
            {
              'id': '203',
              'createdAt': '2015-10-31T19:07:21.206Z',
              'body': 'Is it accurate?',
              'user': {
                'id': 1468,
                'name': 'Isaiah Carlson (Bestech Guru)',
                'nickname': 'techguruer',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/bd617ebe-d2a0-4b09-85bb-c50177338ca5_1468.jpg?w=256&h=256',
                'urlTwitter': 'https://twitter.com/BestechGuru',
                'handleTwitter': 'BestechGuru',
                'points': '250'
              },
              'likes': {
                'data': [],
                'count': 0
              }
            }
          ],
          'count': '3'
        }
      },
      {
        'id': '120',
        'body': 'https://twitter.com/medictom/status/636896270897049601',
        'createdAt': '2015-08-27T16:14:32.000Z',
        'user': {
          'id': 196,
          'name': 'Tom Shewbridge',
          'nickname': 'tomshewbridge',
          'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/5aa3fa1d-c674-4828-9b28-c29f10093715_196.jpg?w=256&h=256',
          'urlTwitter': 'http://twitter.com/medictom',
          'handleTwitter': 'medictom',
          'points': '3000'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '68',
          'title': 'A Medics World on Twitter',
          'url': 'https://twitter.com/medictom/status/636896270897049601',
          'createdAt': '2015-08-27T16:14:32.000Z',
          'description': '“First time lapse video of Bloomskys Weather Station in action! @bloomsky #weatherlution http://t.co/mkqSZgMAKj”',
          'image': 'https://pbs.twimg.com/profile_images/577824275874213888/zWnxNjhz_400x400.jpeg'
        },
        'likes': {
          'data': [],
          'count': 0
        },
        'comments': {
          'data': [],
          'count': '0'
        }
      },
      {
        'id': '119',
        'body': 'https://twitter.com/medictom/status/636899327118573568',
        'createdAt': '2015-08-27T16:13:50.000Z',
        'user': {
          'id': 196,
          'name': 'Tom Shewbridge',
          'nickname': 'tomshewbridge',
          'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/5aa3fa1d-c674-4828-9b28-c29f10093715_196.jpg?w=256&h=256',
          'urlTwitter': 'http://twitter.com/medictom',
          'handleTwitter': 'medictom',
          'points': '3000'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '67',
          'title': 'A Medics World on Twitter',
          'url': 'https://twitter.com/medictom/status/636899327118573568',
          'createdAt': '2015-08-27T16:13:50.000Z',
          'description': '“Here is yesterdays weather from the @Bloomsky Weather Station, Review on http://t.co/VdFdODqVGx later today!... http://t.co/59JjwXoSXS”',
          'image': 'https://pbs.twimg.com/profile_images/577824275874213888/zWnxNjhz_400x400.jpeg'
        },
        'likes': {
          'data': [],
          'count': 0
        },
        'comments': {
          'data': [],
          'count': '0'
        }
      },
      {
        'id': '118',
        'body': 'http://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/',
        'createdAt': '2015-08-27T16:12:44.000Z',
        'user': {
          'id': 196,
          'name': 'Tom Shewbridge',
          'nickname': 'tomshewbridge',
          'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/5aa3fa1d-c674-4828-9b28-c29f10093715_196.jpg?w=256&h=256',
          'urlTwitter': 'http://twitter.com/medictom',
          'handleTwitter': 'medictom',
          'points': '3000'
        },
        'product': {
          'id': '6',
          'name': 'BloomSky',
          'slug': 'bloomsky',
          'tagline': 'Worlds first smart weather camera',
          'urlTwitter': 'http://twitter.com/bloomsky',
          'isAvailableForTrial': true,
          'isAvailableForDiscount': true,
          'isAvailableForContest': false,
          'trials': {
            'data': [
              {
                'id': 1554,
                'updatedAt': '2015-11-05T17:45:09.280Z',
                'createdAt': '2015-10-20T18:48:12.000Z',
                'name': 'Patrick Campanale',
                'reason': 'BloomSky would be awesome to use, especially in Florida. We have beautiful sunsets and sunrises. Id love to see if BloomSky works awesome here.',
                'status': 3,
                'user': {
                  'id': 480,
                  'name': 'Patrick Campanale',
                  'nickname': 'patrickcampanale',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/eab0dc0d-6822-4900-aabd-105687cddfa5_480.jpg?w=256&h=256',
                  'urlTwitter': 'http://twitter.com/pcamp96',
                  'handleTwitter': 'pcamp96',
                  'points': '2020'
                },
                'product_id': 6
              },
              {
                'id': 1969,
                'updatedAt': '2015-11-04T19:58:42.019Z',
                'createdAt': '2015-11-04T19:58:41.788Z',
                'name': 'Ramakrishna',
                'reason': 'I am very much interested testing new gadgets and also a i am android apps developer.',
                'status': 0,
                'user': {
                  'id': 2074,
                  'name': 'Ramakrishna',
                  'nickname': 'ramakrishna',
                  'avatarUrl': 'assets/images/default-avatar.png',
                  'urlTwitter': 'http://twitter.com/ramakrishna1978',
                  'handleTwitter': 'ramakrishna1978',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1018,
                'updatedAt': '2015-10-30T14:57:03.726Z',
                'createdAt': '2015-09-25T02:12:10.000Z',
                'name': 'ListHunt',
                'reason': 'Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!',
                'status': 4,
                'user': {
                  'id': 1106,
                  'name': 'ListHunt',
                  'nickname': 'listhunt',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png',
                  'urlTwitter': 'https://twitter.com/ListHunt',
                  'handleTwitter': 'ListHunt',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1626,
                'updatedAt': '2015-10-23T15:45:39.978Z',
                'createdAt': '2015-10-23T15:45:39.255Z',
                'name': 'Martini',
                'reason': 'Our weather here is insane, and know this product would help document it!',
                'status': 0,
                'user': {
                  'id': 794,
                  'name': 'Martini',
                  'nickname': 'martini',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/657527728493719553/sg0kKD3A_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/hizziehawk',
                  'handleTwitter': 'hizziehawk',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1007,
                'updatedAt': '2015-10-16T17:43:36.000Z',
                'createdAt': '2015-09-24T17:38:56.000Z',
                'name': 'Scotty Powell',
                'reason': 'Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience',
                'status': 3,
                'user': {
                  'id': 1095,
                  'name': 'Scotty Powell',
                  'nickname': 'scottypowell',
                  'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256',
                  'urlTwitter': 'https://twitter.com/Captcomeback',
                  'handleTwitter': 'Captcomeback',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1005,
                'updatedAt': '2015-10-15T21:41:13.000Z',
                'createdAt': '2015-09-24T16:11:24.000Z',
                'name': 'Ricky Matthews',
                'reason': 'Id like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.',
                'status': 4,
                'user': {
                  'id': 1094,
                  'name': 'Ricky Matthews',
                  'nickname': 'rickymatthews',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/wxrjm',
                  'handleTwitter': 'wxrjm',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 1412,
                'updatedAt': '2015-10-14T23:24:34.000Z',
                'createdAt': '2015-10-14T23:24:34.000Z',
                'name': 'Brad Cox',
                'reason': 'As a weather spotter for our local news this would be such a big help!',
                'status': 0,
                'user': {
                  'id': 1627,
                  'name': 'Brad Cox',
                  'nickname': 'bradcox',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/627999417044463616/-m2fpoSK_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/bradcox5975',
                  'handleTwitter': 'bradcox5975',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 999,
                'updatedAt': '2015-10-12T23:01:12.000Z',
                'createdAt': '2015-09-23T23:38:15.000Z',
                'name': 'Brad Panovich',
                'reason': 'Im really interested in Bloomsky as a way to crowdsource the weather',
                'status': 4,
                'user': {
                  'id': 1088,
                  'name': 'Brad Panovich',
                  'nickname': 'bradpanovich',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg',
                  'urlTwitter': 'https://twitter.com/wxbrad',
                  'handleTwitter': 'wxbrad',
                  'points': '0'
                },
                'product_id': 6
              },
              {
                'id': 978,
                'updatedAt': '2015-10-12T22:31:18.000Z',
                'createdAt': '2015-09-23T03:27:10.000Z',
                'name': 'Chad Gottfried',
                'reason': 'As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.',
                'status': 4,
                'user': {
                  'id': 1072,
                  'name': 'Chad Gottfried',
                  'nickname': 'chadgottfried',
                  'avatarUrl': 'https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg',
                  'urlTwitter': 'https://twitter.com/LoganDX',
                  'handleTwitter': 'LoganDX',
                  'points': '1010'
                },
                'product_id': 6
              },
              {
                'id': 1352,
                'updatedAt': '2015-10-12T05:42:05.000Z',
                'createdAt': '2015-10-12T05:42:05.000Z',
                'name': 'Owen Horne',
                'reason': 'I run a page #YETITv on an app called Yeti-Campus stories and I would love to give a product review behind this and any other products I can get my hands on so that I can build up support for not only my page but also different companies products.',
                'status': 0,
                'user': {
                  'id': 1565,
                  'name': 'Owen Horne',
                  'nickname': 'owenhorne',
                  'avatarUrl': 'https://graph.facebook.com/1061485080537042/picture/?type=large',
                  'urlTwitter': 'http://twitter.com/ItsJustMe_Owen',
                  'handleTwitter': 'ItsJustMe_Owen',
                  'points': '0'
                },
                'product_id': 6
              }
            ],
            'count': 39
          }
        },
        'content': {
          'id': '66',
          'title': 'I have joined the #weatherlution and Bloomsky made that possible - Review ~ A Medics World',
          'url': 'http://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/',
          'createdAt': '2015-08-27T16:12:44.000Z',
          'description': 'I have joined the weatherlution with Bloomsky, and boy is it fun. If you want a gadget that will capture weather in pictures and videos, the Bloomsky is for you.',
          'image': 'http://amedicsworld.com/wp-content/uploads/2015/08/Bloomsky-Ready-for-Action.jpg'
        },
        'likes': {
          'data': [
            {
              'id': 62,
              'createdAt': '2015-08-31T20:29:08.000Z',
              'user': {
                'id': 7,
                'name': 'Tao Ni',
                'nickname': 'tao.ni.81',
                'avatarUrl': 'http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256',
                'urlTwitter': 'http://twitter.com/taoni',
                'handleTwitter': 'taoni',
                'points': '990'
              }
            }
          ],
          'count': 1
        },
        'comments': {
          'data': [],
          'count': '0'
        }
      }
    ];
}

/* jshint ignore:end */