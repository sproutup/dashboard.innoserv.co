angular
    .module('community')
    .factory('TrialService', TrialService);

TrialService.$inject = ['$resource'];

function TrialService($resource) {
	var service = {
		getTrials: getTrials
	};

	var trials = [];

	function getTrials() {
		return 
	}

	return service;

	trials = [
        {
            "id": 52,
            "name": "Barry Smith",
            "reason": "I am a complete weather geek. In my next life I want to come back as a Meteorologist! I am always looking for new tools to add to my weather watching arsenal!",
            "active": true,
            "status": 0,
            "createdAt": "2015-07-13T17:14:29.000Z",
            "updatedAt": "2015-07-24T21:05:32.000Z",
            "user": {
              "id": 148,
              "description": null,
              "name": "Barry Smith",
              "nickname": "barrysmith",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/bsmith3121",
              "urlFacebook": "http://www.facebook.com/barry.smith.100046",
              "urlBlog": "http://www.whotookmycountry.com",
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/dV0iNh"
          },
          {
            "id": 67,
            "name": "Magnus Hjert",
            "reason": "I have a slight obsession with weather and would definitely put this thing through its paces as I also live in a very changeable climate, Wellington being in the \"Roaring Forties\".",
            "active": true,
            "status": 0,
            "createdAt": "2015-07-16T01:56:20.000Z",
            "updatedAt": "2015-07-24T21:05:36.000Z",
            "user": {
              "id": 166,
              "description": null,
              "name": "Magnus Hjert",
              "nickname": "magnushjert",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/d7f4c207-3d58-4925-9bc1-826b87bb6b24_166.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/MagnusHjert",
              "urlFacebook": "http://www.facebook.com/mhjert",
              "urlBlog": null,
              "urlPinterest": "http://www.pinterest.com/bluswedeshu",
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/Qbzf99"
          },
          {
            "id": 78,
            "name": "Bryan Andersen",
            "reason": "This is one of the greatest ideas out there & I have always wondered why the weather data on my phone was rarely correct.  THIS SOLVES THE PROBLEM",
            "active": true,
            "status": 0,
            "createdAt": "2015-07-16T16:59:14.000Z",
            "updatedAt": "2015-07-24T21:05:38.000Z",
            "user": {
              "id": 178,
              "description": null,
              "name": "Bryan Andersen",
              "nickname": "bryanandersen",
              "avatarUrl": "https://pbs.twimg.com/profile_images/668185420207947776/kMAYFVl5_bigger.jpg",
              "urlTwitter": "https://twitter.com/BryanTheFoamGuy",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/CKtuLr"
          },
          {
            "id": 94,
            "name": "Tom Shewbridge",
            "reason": "I am a weather fanatic and a geek, and I love both in the same design.  This would be so awesome to review, and I think people would be jealous if I got a chance to.  ~Tom",
            "active": true,
            "status": 4,
            "createdAt": "2015-07-18T13:50:43.000Z",
            "updatedAt": "2015-09-21T19:17:29.000Z",
            "user": {
              "id": 196,
              "description": "Just a geek who loves innovative and unique products to try and review.  Bring on the awesome stuff!",
              "name": "Tom Shewbridge",
              "nickname": "tomshewbridge",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/5aa3fa1d-c674-4828-9b28-c29f10093715_196.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/medictom",
              "urlFacebook": "https://www.facebook.com/AMedicsWorld",
              "urlBlog": "http://amedicsworld.com/",
              "urlPinterest": "http://www.pinterest.com/medictom",
              "urlYoutube": "http://www.youtube.com/TomShewbridge",
              "isInfluencer": true,
              "points": "3000",
              "posts": 7,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [
              {
                "id": 66,
                "url": "http://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/",
                "createdAt": "2015-08-27T16:12:44.000Z",
                "updatedAt": "2015-08-27T16:12:44.000Z",
                "openGraph": {
                  "id": 27,
                  "title": "I have joined the #weatherlution and Bloomsky made that possible - Review ~ A Medic's World",
                  "type": "article",
                  "image": "http://amedicsworld.com/wp-content/uploads/2015/08/Bloomsky-Ready-for-Action.jpg",
                  "url": "http://amedicsworld.com/2015/08/i-have-joined-the-weatherlution-and-bloomsky-made-that-possible-review/",
                  "description": "I have joined the weatherlution with Bloomsky, and boy is it fun. If you want a gadget that will capture weather in pictures and videos, the Bloomsky is for you.",
                  "siteName": "A Medic's World",
                  "video": null
                }
              },
              {
                "id": 67,
                "url": "https://twitter.com/medictom/status/636899327118573568",
                "createdAt": "2015-08-27T16:13:50.000Z",
                "updatedAt": "2015-08-27T16:13:50.000Z",
                "openGraph": {
                  "id": 28,
                  "title": "A Medic's World on Twitter",
                  "type": "article",
                  "image": "https://pbs.twimg.com/profile_images/577824275874213888/zWnxNjhz_400x400.jpeg",
                  "url": "https://twitter.com/medictom/status/636899327118573568",
                  "description": "“Here is yesterdays weather from the @Bloomsky Weather Station, Review on http://t.co/VdFdODqVGx later today!... http://t.co/59JjwXoSXS”",
                  "siteName": "Twitter",
                  "video": null
                }
              },
              {
                "id": 68,
                "url": "https://twitter.com/medictom/status/636896270897049601",
                "createdAt": "2015-08-27T16:14:32.000Z",
                "updatedAt": "2015-08-27T16:14:32.000Z",
                "openGraph": {
                  "id": 29,
                  "title": "A Medic's World on Twitter",
                  "type": "article",
                  "image": "https://pbs.twimg.com/profile_images/577824275874213888/zWnxNjhz_400x400.jpeg",
                  "url": "https://twitter.com/medictom/status/636896270897049601",
                  "description": "“First time lapse video of Bloomsky's Weather Station in action! @bloomsky #weatherlution http://t.co/mkqSZgMAKj”",
                  "siteName": "Twitter",
                  "video": null
                }
              }
            ],
            "log": [],
            "refURL": "http://goo.gl/vIdixh"
          },
          {
            "id": 114,
            "name": "Mylik Duncan",
            "reason": "Hi my name is Mylik Duncan i love promoting companies and brands i have a large following on Instagram and I am a hard working person and it would be an honor to work with you.",
            "active": true,
            "status": 0,
            "createdAt": "2015-07-23T00:19:25.000Z",
            "updatedAt": "2015-07-24T21:30:58.000Z",
            "user": {
              "id": 225,
              "description": null,
              "name": "Mylik Duncan",
              "nickname": "mylikduncan",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/meek1772",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/Wt8uzG"
          },
          {
            "id": 286,
            "name": "Emmanuel mahgerefteh",
            "reason": "My name is Emmanuel Mahgerefteh and I am a well established Tech reviewer on Youtube. I have a large audience with over 1k+ subs and I would love to review this product and hopefully bring along some new customers and sales.",
            "active": true,
            "status": -2,
            "createdAt": "2015-07-28T15:57:49.000Z",
            "updatedAt": "2015-08-27T15:34:48.000Z",
            "user": {
              "id": 276,
              "description": "I am a well established tech reviewer on Youtube, and I hope to provide good content to my viewers.",
              "name": "Emmanuel mahgerefteh",
              "nickname": "emmanuelmahgerefteh",
              "avatarUrl": "https://pbs.twimg.com/profile_images/663859034865270784/rbQ8nUo4_bigger.jpg",
              "urlTwitter": "https://twitter.com/EmmTechReviews",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/emmtechreviews",
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/VOynvq"
          },
          {
            "id": 388,
            "name": "Tech Spec",
            "reason": "I make tech reviews on youtube and thought this was a great idea for a product and needs some publicity.",
            "active": true,
            "status": 0,
            "createdAt": "2015-07-31T23:25:21.000Z",
            "updatedAt": "2015-08-05T14:53:52.000Z",
            "user": {
              "id": 377,
              "description": null,
              "name": "Tech Spec",
              "nickname": "techspec",
              "avatarUrl": "https://pbs.twimg.com/profile_images/625719458879946756/A5dUakl2_bigger.png",
              "urlTwitter": "https://twitter.com/TechspecYT",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 15
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/n5Tvmt"
          },
          {
            "id": 538,
            "name": "Toby Atterstrom",
            "reason": "I have a huge interest in cameras that have unique characteristics, and overall enjoy trying to make the best of them in all ways possible.",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-11T00:14:12.000Z",
            "updatedAt": "2015-08-11T00:14:12.000Z",
            "user": {
              "id": 545,
              "description": null,
              "name": "Toby Atterstrom",
              "nickname": "tobyatterstrom",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/TechTheory_",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/c/TechTheoryShow",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/Z49QRg"
          },
          {
            "id": 549,
            "name": "Saad Ahsan",
            "reason": "One of the coolest thing I have seen in my whole life.As a tech reviewer it fascinated me!",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-11T03:06:42.000Z",
            "updatedAt": "2015-08-11T03:06:42.000Z",
            "user": {
              "id": 553,
              "description": null,
              "name": "Saad Ahsan",
              "nickname": "saadahsan",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/p://twitter.com/saatp://twitter.com/saadahsan",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/Qt9Iup"
          },
          {
            "id": 599,
            "name": "Kripal S",
            "reason": "Sounds interesing IOT  device .  Will be good replacement for weather app .",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-14T15:04:21.000Z",
            "updatedAt": "2015-08-14T15:04:22.000Z",
            "user": {
              "id": 616,
              "description": null,
              "name": "Kripal S",
              "nickname": "kripals",
              "avatarUrl": "https://pbs.twimg.com/profile_images/651788818262151168/yb2T9L-8_bigger.png",
              "urlTwitter": "https://twitter.com/manuvns",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/EwuHNK"
          },
          {
            "id": 602,
            "name": "Khizar Badshah",
            "reason": "i would like to review them on my youtube channell because you cant really trust the weather app",
            "active": true,
            "status": -2,
            "createdAt": "2015-08-14T20:05:00.000Z",
            "updatedAt": "2015-08-14T20:05:00.000Z",
            "user": {
              "id": 621,
              "description": null,
              "name": "Khizar Badshah",
              "nickname": "khizarbadshah",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/khizarofficial",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 1017,
                "status": -2,
                "createdAt": "2015-10-19T02:51:02.000Z"
              }
            ],
            "refURL": "http://goo.gl/BmGiYK"
          },
          {
            "id": 661,
            "name": "Daniel Garcia",
            "reason": "This would be great to review on my YouTube channel seems to be a very advanced and useful tool",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-19T04:03:45.000Z",
            "updatedAt": "2015-08-19T04:03:45.000Z",
            "user": {
              "id": 649,
              "description": null,
              "name": "Daniel Garcia",
              "nickname": "danielgarcia",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/Danielnote",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/zlpb9N"
          },
          {
            "id": 690,
            "name": "addison gallamore",
            "reason": "This product stands out the most to me. Mainly because I love the outdoors I spend every minute outside and knowing if the weather is going to be good that day and the next day is amazing. I have been waiting for someone to make a product like this for about 2 years and now someone has finally done it, I would live to test and review this product :) - Addison",
            "active": true,
            "status": -2,
            "createdAt": "2015-08-20T18:44:35.000Z",
            "updatedAt": "2015-08-20T18:44:35.000Z",
            "user": {
              "id": 700,
              "description": "I love the outdoors, photography, and technology :)",
              "name": "addison gallamore",
              "nickname": "addisongallamore",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/71e153d8-285a-475a-bb4c-a17af3b2a146_700.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/addisongallamo1",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 857,
                "status": -2,
                "createdAt": "2015-10-17T04:50:49.000Z"
              }
            ],
            "refURL": "http://goo.gl/qeaJfY"
          },
          {
            "id": 697,
            "name": "WD HD",
            "reason": "I have a youtube channel  that has 700 subscribers and most of my subscribers will love this product ! youtube.com/MrTechnowill",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-22T02:13:50.000Z",
            "updatedAt": "2015-08-22T02:13:51.000Z",
            "user": {
              "id": 635,
              "description": null,
              "name": "WD HD",
              "nickname": "wdhd",
              "avatarUrl": "https://pbs.twimg.com/profile_images/641426270497042432/qVQP1mZT_bigger.png",
              "urlTwitter": "https://twitter.com/WDHD18",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/BcWcwU"
          },
          {
            "id": 715,
            "name": "Andrew Davis",
            "reason": "I always complain about my phone apps getting the weather wrong and I would also like to participate in the community by being able to provide accurate weather updates in my area.",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-24T05:24:45.000Z",
            "updatedAt": "2015-08-24T05:24:45.000Z",
            "user": {
              "id": 735,
              "description": null,
              "name": "Andrew Davis",
              "nickname": "andrewdavis",
              "avatarUrl": "https://graph.facebook.com/1049423108423494/picture/?type=large",
              "urlTwitter": "http://twitter.com/@arng_davis",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/1049423108423494/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/LJV7Eo"
          },
          {
            "id": 717,
            "name": "Christopher Sese-Khalid (iAndroid Chris)",
            "reason": "With me not only being a tech nerd, I also love weather. Sometimes I look up at the sky hoping that it will rain because I love the mood that it gives off sometimes. Which is why I would like to make a High Quality YouTube video about your it to spread the word about your amazing product. Thank You.",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-24T09:02:02.000Z",
            "updatedAt": "2015-08-24T09:02:02.000Z",
            "user": {
              "id": 732,
              "description": "I make tech videos of products I would like to advertise, and give my review on them. My YouTube channel is www.youtube.com/iandroidchris",
              "name": "Christopher Sese-Khalid Jr (iAndroid Chris)",
              "nickname": "christophersesekhalid",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/b1f25824-b527-47b5-a03b-5778e25a84ef_732.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/iandroidchris",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/iandroidchris",
              "isInfluencer": false,
              "points": "0",
              "posts": 1,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/H3Bmpj"
          },
          {
            "id": 743,
            "name": "Carter Wilson",
            "reason": "Needing to make a new youtube video for my channel and this product looks perfect to review ?",
            "active": true,
            "status": 0,
            "createdAt": "2015-08-27T03:29:34.000Z",
            "updatedAt": "2015-08-27T03:29:34.000Z",
            "user": {
              "id": 773,
              "description": null,
              "name": "Carter Wilson",
              "nickname": "carterwilson",
              "avatarUrl": "https://abs.twimg.com/sticky/default_profile_images/default_profile_4_bigger.png",
              "urlTwitter": "https://twitter.com/TheRugbyKingz",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/srdGjx"
          },
          {
            "id": 798,
            "name": "Adam,mrchucknoris789",
            "reason": "I want to see what the weather is in my area and it seems like a good device",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-03T04:35:23.000Z",
            "updatedAt": "2015-09-03T04:35:23.000Z",
            "user": {
              "id": 830,
              "description": null,
              "name": "Adam,mrchucknoris789",
              "nickname": "adammrchucknoris789",
              "avatarUrl": "https://pbs.twimg.com/profile_images/575516668798984192/0viK9ebN_bigger.jpeg",
              "urlTwitter": "https://twitter.com/technewsweekly5",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/af7M8W"
          },
          {
            "id": 807,
            "name": "Steven Jacks",
            "reason": "Here in Florida, not a single decision the involves the outdoors can be made without first checking the weather forecast and weather conditions. Rarely do the two match. Since my home is located directly in between Tampa and Ocala, forecasts are always off and real-time conditions viewed in weather apps use sensors that are at least 30 miles away. Any tool that can put even some of the power of a meteorologist in my hands would be absolutely indespenseable.",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-03T20:09:25.000Z",
            "updatedAt": "2015-09-03T20:09:25.000Z",
            "user": {
              "id": 403,
              "description": null,
              "name": "Steven Jacks",
              "nickname": "stevenjacks",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/stevenjacks",
              "urlFacebook": "http://www.facebook.com/stevenrjacks",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/lRIry8"
          },
          {
            "id": 839,
            "name": "Odin Larsen",
            "reason": "I really love the idea",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-09T14:19:26.000Z",
            "updatedAt": "2015-09-09T14:19:26.000Z",
            "user": {
              "id": 890,
              "description": null,
              "name": "Odin Larsen",
              "nickname": "odinlarsen",
              "avatarUrl": "https://graph.facebook.com/1472146603088599/picture/?type=large",
              "urlTwitter": "http://twitter.com/goproodin",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/1472146603088599/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/08GysR"
          },
          {
            "id": 884,
            "name": "Tao Ni",
            "reason": "Weather forecast is never accurate. BloomSky is a new way to precisely \"see\" weather in real time.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-14T01:53:44.000Z",
            "updatedAt": "2015-09-24T02:33:31.000Z",
            "user": {
              "id": 7,
              "description": "Co-founder & Chief Product Officer at SproutUp. Tech enthusiast. Product Lover.",
              "name": "Tao Ni",
              "nickname": "tao.ni.81",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/8eb2d739-a5bc-45be-a293-4e998dfcf844_7.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/taoni",
              "urlFacebook": "http://www.facebook.com/nitao",
              "urlBlog": "https://medium.com/@taoni",
              "urlPinterest": "http://www.pinterest.com/taoni",
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "5810",
              "posts": 17,
              "trials": 7
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/E4BjMt"
          },
          {
            "id": 898,
            "name": "Aditya shah",
            "reason": "Hi my name is Aditya and I have a YouTube fanbase of over 410 subscribers and I will like to have the product to review on my channel and help the developers of the product know on what they have to add and the ups and downs and I PROMISE I will be honest on the review of the product",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-16T01:59:13.000Z",
            "updatedAt": "2015-09-16T01:59:14.000Z",
            "user": {
              "id": 969,
              "description": "Hi My name is Aditya Shah and I am YouTuber with a fanbase of over 410 subscribers and want to grow higher and higher with the relationship between me and my tech in my YouTube channel I also have 2 other people Eddy Shallow And Randell Darant Which do iral Videos",
              "name": "Aditya shah",
              "nickname": "adityashah",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/1053571a-d057-449e-8c3e-f6fe4c06ecbb_969.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/adityashah17",
              "urlFacebook": "http://www.facebook.com/adityashah56",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "https://www.youtube.com/channel/UCe5ATzOKjxsM8k6eHXMBy6g",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 1135,
                "status": -2,
                "createdAt": "2015-10-21T00:32:19.000Z"
              },
              {
                "id": 1136,
                "status": -2,
                "createdAt": "2015-10-21T00:32:20.000Z"
              }
            ],
            "refURL": "http://goo.gl/Qmkpwy"
          },
          {
            "id": 942,
            "name": "Kulneet Singh Choudhary",
            "reason": "I am an upcoming technology youtuber (https://www.youtube.com/user/iceqman101) and I love to try out new and cool technology. I love unboxings and reviews I could also give you guys a shout out!I would love to try this because I am interested in weather related stuff.",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-20T02:30:33.000Z",
            "updatedAt": "2015-10-08T21:46:30.000Z",
            "trialEndsAt": "2015-10-09T17:41:31.000Z",
            "user": {
              "id": 1016,
              "description": "Tech Youtuber, tech enthusiast!",
              "name": "Kulneet Singh Choudhary",
              "nickname": "kulneetsingh choudhary",
              "avatarUrl": "https://graph.facebook.com/639555319480752/picture/?type=large",
              "urlTwitter": "http://twitter.com/iceQman101",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/639555319480752/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/iceQman101",
              "isInfluencer": true,
              "points": "4040",
              "posts": 4,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 34,
                "status": 3,
                "createdAt": "2015-09-23T17:41:31.000Z"
              },
              {
                "id": 387,
                "status": 4,
                "createdAt": "2015-10-08T21:46:30.000Z"
              }
            ],
            "refURL": "http://goo.gl/io4i6E"
          },
          {
            "id": 944,
            "name": "Kent K Barnes",
            "reason": "I was in the first Beta test. I miss my device.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-20T16:48:59.000Z",
            "updatedAt": "2015-09-22T04:05:16.000Z",
            "user": {
              "id": 1023,
              "description": null,
              "name": "Kent K Barnes",
              "nickname": "kentbarnes",
              "avatarUrl": "https://pbs.twimg.com/profile_images/645689249732276224/aypsOy3I_bigger.jpg",
              "urlTwitter": "https://twitter.com/KeNTKB",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 0
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/hvJccn"
          },
          {
            "id": 956,
            "name": "Fashion Disruptor",
            "reason": "I live in the Netherlands but I travel a lot. I would love to see how my garden is doing when I am away from from home!",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-21T09:04:17.000Z",
            "updatedAt": "2015-09-21T09:04:17.000Z",
            "user": {
              "id": 831,
              "description": null,
              "name": "Fashion Disruptor",
              "nickname": "fashiondisruptor",
              "avatarUrl": "https://pbs.twimg.com/profile_images/574598273178075140/FQSzhzHK_bigger.jpeg",
              "urlTwitter": "https://twitter.com/FashionDisruptr",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 2
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/JMYn68"
          },
          {
            "id": 960,
            "name": "Scott McCloud",
            "reason": "Hello,\nI am an IT Pro by trade, but just a Geek at home.  I love to try out new technology.  I am currently working to make my home a Smart Home and would love to incorporate Weather Monitoring into the mix.  I live in a suburb of Chattanooga and would love the opportunity to test your product.  Thanks for your consideration.  \nScott\n#ChattanoogaStrong",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-21T16:32:58.000Z",
            "updatedAt": "2015-09-21T16:32:59.000Z",
            "user": {
              "id": 1048,
              "description": null,
              "name": "Scott McCloud",
              "nickname": "scottmccloud",
              "avatarUrl": "https://graph.facebook.com/10207568022297066/picture/?type=large",
              "urlTwitter": "http://twitter.com/gsmccloud",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/10207568022297066/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/kvW0An"
          },
          {
            "id": 963,
            "name": "Kent K Barnes",
            "reason": "Was in the Kickstarter and the first BETA test. Everyone should have one.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-21T18:25:46.000Z",
            "updatedAt": "2015-09-22T12:23:23.000Z",
            "user": {
              "id": 15,
              "description": null,
              "name": "Kent K Barnes",
              "nickname": "kentkb",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/kentkb",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/nvPjx1"
          },
          {
            "id": 978,
            "name": "Chad Gottfried",
            "reason": "As a geek and a weather fan I want something that is more accurate than the local weather.  BloomSky looks to fit the bill in a few geeky ways.",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-23T03:27:10.000Z",
            "updatedAt": "2015-10-12T22:31:18.000Z",
            "trialEndsAt": "2015-10-10T17:41:31.000Z",
            "user": {
              "id": 1072,
              "description": null,
              "name": "Chad Gottfried",
              "nickname": "chadgottfried",
              "avatarUrl": "https://pbs.twimg.com/profile_images/1319365635/2011-04-21_00.27.04_bigger.jpg",
              "urlTwitter": "https://twitter.com/LoganDX",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "1010",
              "posts": 1,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 63,
                "status": 3,
                "createdAt": "2015-09-24T17:41:31.000Z"
              },
              {
                "id": 681,
                "status": 4,
                "createdAt": "2015-10-12T22:31:18.000Z"
              }
            ],
            "refURL": "http://goo.gl/s2hsGY"
          },
          {
            "id": 983,
            "name": "Robin",
            "reason": "I love the weather and learning all about it. This would be amazing to try",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-23T10:50:12.000Z",
            "updatedAt": "2015-11-05T19:54:19.000Z",
            "user": {
              "id": 1070,
              "description": "Married mother of four who loves to test and review products",
              "name": "Robin mcdowell",
              "nickname": "robin",
              "avatarUrl": "https://pbs.twimg.com/profile_images/663450587892051968/Adp5Fdsq_bigger.jpg",
              "urlTwitter": "https://twitter.com/OdieSnacks",
              "urlFacebook": "http://www.facebook.com/robin.d.mcdowell.3",
              "urlBlog": "http://robinmcdowell42.blogspot.com/",
              "urlPinterest": "http://www.pinterest.com/robinmcdowell",
              "urlYoutube": "https://www.youtube.com/channel/UCUvItUHBNH-l2rfdG5s0P3A",
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 2215,
                "status": -2,
                "createdAt": "2015-11-05T19:54:19.000Z"
              }
            ],
            "refURL": "http://goo.gl/cMe6Gn"
          },
          {
            "id": 995,
            "name": "Montel Gray",
            "reason": "Its been a long time coming for a device so magnificent. I have always been interested in meteorology but could never obtain software or hardware that was fluid enough to pique my interest. On account of the many things that I've heard about SproutUp,  believe that this may be the key to reuniting me with my lost passion.",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-23T17:09:22.000Z",
            "updatedAt": "2015-09-23T17:09:23.000Z",
            "user": {
              "id": 1083,
              "description": null,
              "name": "Montel Gray",
              "nickname": "montelgray",
              "avatarUrl": "https://graph.facebook.com/10207388400205907/picture/?type=large",
              "urlTwitter": "http://twitter.com/teezythakidd",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/10207388400205907/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/1n1mgx"
          },
          {
            "id": 999,
            "name": "Brad Panovich",
            "reason": "I'm really interested in Bloomsky as a way to crowdsource the weather",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-23T23:38:15.000Z",
            "updatedAt": "2015-10-12T23:01:12.000Z",
            "trialEndsAt": "2015-10-14T17:41:31.000Z",
            "user": {
              "id": 1088,
              "description": null,
              "name": "Brad Panovich",
              "nickname": "bradpanovich",
              "avatarUrl": "https://pbs.twimg.com/profile_images/495078741270224896/h4qoVRWY_bigger.jpeg",
              "urlTwitter": "https://twitter.com/wxbrad",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 44,
                "status": 3,
                "createdAt": "2015-09-28T17:41:31.000Z"
              },
              {
                "id": 684,
                "status": 4,
                "createdAt": "2015-10-12T23:01:12.000Z"
              }
            ],
            "refURL": "http://goo.gl/PHwdSM"
          },
          {
            "id": 1005,
            "name": "Ricky Matthews",
            "reason": "I'd like to try the Bloomsky to see how viable it is for a broadcast TV functionality. I work with WCYB-TV in Bristol,VA and we would be interested in placing more cameras around the area.",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-24T16:11:24.000Z",
            "updatedAt": "2015-10-15T21:41:13.000Z",
            "trialEndsAt": "2015-10-16T17:41:31.000Z",
            "user": {
              "id": 1094,
              "description": null,
              "name": "Ricky Matthews",
              "nickname": "rickymatthews",
              "avatarUrl": "https://pbs.twimg.com/profile_images/653337674699403264/WS7F14x5_bigger.jpg",
              "urlTwitter": "https://twitter.com/wxrjm",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 54,
                "status": 3,
                "createdAt": "2015-09-30T17:41:31.000Z"
              },
              {
                "id": 805,
                "status": 4,
                "createdAt": "2015-10-15T21:41:13.000Z"
              }
            ],
            "refURL": "http://goo.gl/OVZRNz"
          },
          {
            "id": 1007,
            "name": "Scotty Powell",
            "reason": "Meteorologist in Western North Carolina, and would love to add footage and real time data to our audience",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-24T17:38:56.000Z",
            "updatedAt": "2015-11-17T15:33:38.000Z",
            "trialEndsAt": "2015-11-01T17:43:36.000Z",
            "user": {
              "id": 1095,
              "description": "Meteorologist for Foothills Weater Network, Hickory Crawdads & WSVM. Host of Carolina Weather Group.",
              "name": "Scotty Powell",
              "nickname": "scottypowell",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/8fa209d8-2538-4685-a59b-d02179a76d1f_1095.jpg?w=256&h=256",
              "urlTwitter": "https://twitter.com/Captcomeback",
              "urlFacebook": "https://www.facebook.com/scotty.powell.10",
              "urlBlog": "http://www.foothillsweathernetwork.com/",
              "urlPinterest": null,
              "urlYoutube": "https://www.youtube.com/channel/UCmhGiYbMDccQcdSjpf87nGg",
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 826,
                "status": 3,
                "createdAt": "2015-10-16T17:43:36.000Z"
              },
              {
                "id": 3016,
                "status": 4,
                "createdAt": "2015-11-17T15:33:38.000Z"
              }
            ],
            "refURL": "http://goo.gl/P8vb9C"
          },
          {
            "id": 1008,
            "name": "Stuart McDaniel",
            "reason": "Looks like a very useful product that may be better that my current system. Really want to try it, as I help report and forecast for our local county weather. I am a advanced NWS certified spotter and photographer.  Also report to local TV stations.",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-24T18:30:58.000Z",
            "updatedAt": "2015-09-24T18:30:59.000Z",
            "user": {
              "id": 1097,
              "description": null,
              "name": "Stuart McDaniel",
              "nickname": "stuartmcdaniel",
              "avatarUrl": "https://graph.facebook.com/899915960089586/picture/?type=large",
              "urlTwitter": "http://twitter.com/wxstuart",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/899915960089586/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/qOMXin"
          },
          {
            "id": 1009,
            "name": "Jesse Wise",
            "reason": "I have been a weather fan for years now... currently using an accurate system that has been in my yard for about 5 years now and i need to upgrade!",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-24T19:02:09.000Z",
            "updatedAt": "2015-09-24T19:02:10.000Z",
            "user": {
              "id": 1098,
              "description": null,
              "name": "Jesse Wise",
              "nickname": "jessewise",
              "avatarUrl": "https://graph.facebook.com/10153136281384103/picture/?type=large",
              "urlTwitter": "http://twitter.com/jwisephoto",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/10153136281384103/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/Z6XnZa"
          },
          {
            "id": 1011,
            "name": "Coleman Hamilton",
            "reason": "Always love new technology and weather is an amazing thing as well!",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-24T22:49:21.000Z",
            "updatedAt": "2015-09-24T22:49:21.000Z",
            "user": {
              "id": 1101,
              "description": null,
              "name": "Coleman Hamilton",
              "nickname": "colemanhamilton",
              "avatarUrl": "https://graph.facebook.com/10203885860101965/picture/?type=large",
              "urlTwitter": null,
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/10203885860101965/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/nDo8za"
          },
          {
            "id": 1012,
            "name": "Jeanie Elliott Elmore",
            "reason": "I am interested in weather and enjoy weather related data",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-24T23:43:09.000Z",
            "updatedAt": "2015-09-24T23:43:09.000Z",
            "user": {
              "id": 1102,
              "description": null,
              "name": "Jeanie Elliott Elmore",
              "nickname": "jeanieelmore",
              "avatarUrl": "https://graph.facebook.com/969058086484281/picture/?type=large",
              "urlTwitter": "http://twitter.com/@labrat40",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/969058086484281/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/OfGosi"
          },
          {
            "id": 1018,
            "name": "ListHunt",
            "reason": "Weather in Kansas changes by the hour so this will be great to keep track of what is happening outside!",
            "active": true,
            "status": 4,
            "createdAt": "2015-09-25T02:12:10.000Z",
            "updatedAt": "2015-10-30T14:57:03.000Z",
            "trialEndsAt": "2015-10-14T17:41:31.000Z",
            "user": {
              "id": 1106,
              "description": null,
              "name": "ListHunt",
              "nickname": "listhunt",
              "avatarUrl": "https://pbs.twimg.com/profile_images/636011375865675776/7wpVvUOC_bigger.png",
              "urlTwitter": "https://twitter.com/ListHunt",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": true,
              "points": "0",
              "posts": 0,
              "trials": 1
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 40,
                "status": 3,
                "createdAt": "2015-09-28T17:41:31.000Z"
              },
              {
                "id": 1857,
                "status": 4,
                "createdAt": "2015-10-30T14:57:03.000Z"
              }
            ],
            "refURL": "http://goo.gl/FsY1Zk"
          },
          {
            "id": 1034,
            "name": "Oliver Leopold",
            "reason": "I make YouTube videos that are mainly focused around Technology and Electronics. I have around 4,000 subscribers and would love to showcase this product.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-26T16:24:12.000Z",
            "updatedAt": "2015-10-28T19:50:42.000Z",
            "user": {
              "id": 1139,
              "description": "I make technology and overall fun YouTube videos! Come check me out!",
              "name": "Oliver Leopold",
              "nickname": "oliver_leopold",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/007eee07-ddd7-495b-8e06-e3d458eeb51f_1139.jpg?w=256&h=256",
              "urlTwitter": "https://twitter.com/oliver_leopold",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/theinvestmenttimes",
              "isInfluencer": true,
              "points": "2430",
              "posts": 3,
              "trials": 5
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 91,
                "status": 1,
                "createdAt": "2015-10-02T03:35:50.000Z"
              },
              {
                "id": 1638,
                "status": -2,
                "createdAt": "2015-10-28T19:50:42.000Z"
              }
            ],
            "refURL": "http://goo.gl/cpX9Gh"
          },
          {
            "id": 1039,
            "name": "zachary estell",
            "reason": "I am interested in using this because every single morning before school I always have to say \"Ok google whats the weather like.\" and I want a new way of checking the weather.",
            "active": true,
            "status": 0,
            "createdAt": "2015-09-26T16:56:46.000Z",
            "updatedAt": "2015-09-26T16:56:47.000Z",
            "user": {
              "id": 1143,
              "description": null,
              "name": "zachary estell",
              "nickname": "zacharyestell",
              "avatarUrl": "http://d30xksqof6w2my.cloudfront.net/ab594379-32d2-42f4-9191-ba43399e078b_1143.jpg?w=256&h=256",
              "urlTwitter": "http://twitter.com/mac2zach",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/mac2zach",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [],
            "refURL": "http://goo.gl/ph6Zyf"
          },
          {
            "id": 1095,
            "name": "Darsh Khithani",
            "reason": "I always hate checking my weather app and the accuracy being terrible. I want this to help create a more accurate solution for everyone around me.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-27T16:16:43.000Z",
            "updatedAt": "2015-09-27T16:16:44.000Z",
            "user": {
              "id": 1218,
              "description": null,
              "name": "Darsh Khithani",
              "nickname": "darshkhithani",
              "avatarUrl": "https://graph.facebook.com/539348876219438/picture/?type=large",
              "urlTwitter": "http://twitter.com/darshkhithani",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/539348876219438/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "http://www.youtube.com/thevibration",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 109,
                "status": -2,
                "createdAt": "2015-10-03T00:44:45.000Z"
              }
            ],
            "refURL": "http://goo.gl/FRFBxY"
          },
          {
            "id": 1119,
            "name": "syamshukla",
            "reason": "In my office I have a lot of windows that are very high and It would be amazing to know when it is going to rain without leaving my seat.",
            "active": true,
            "status": -2,
            "createdAt": "2015-09-29T20:22:43.000Z",
            "updatedAt": "2015-11-11T03:51:41.000Z",
            "user": {
              "id": 1261,
              "description": null,
              "name": "syamshukla",
              "nickname": "shuklasyam13",
              "avatarUrl": "assets/images/default-avatar.png",
              "urlTwitter": "http://twitter.com/shuks1200",
              "urlFacebook": null,
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": null,
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 2694,
                "status": -2,
                "createdAt": "2015-11-11T03:51:41.000Z"
              }
            ],
            "refURL": "http://goo.gl/jsFsiY"
          },
          {
            "id": 1143,
            "name": "Jacob Hough",
            "reason": "I am interested in the Bloomsky because I am starting a tech review channel and would like to start with top notch products.",
            "active": true,
            "status": -2,
            "createdAt": "2015-10-02T05:38:10.000Z",
            "updatedAt": "2015-10-02T05:38:11.000Z",
            "user": {
              "id": 1311,
              "description": "I am a huge tech fan and am also a student pilot, hoping to become a pilot in the near future.",
              "name": "Jacob Hough",
              "nickname": "jacobhough",
              "avatarUrl": "https://graph.facebook.com/1634107023535231/picture/?type=large",
              "urlTwitter": "http://twitter.com/aviatorjake21",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/1634107023535231/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "https://www.youtube.com/channel/UCxgRObou2BDZS9I5g2WB_pQ",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 0
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 92,
                "status": 0,
                "createdAt": "2015-10-02T05:38:10.000Z"
              },
              {
                "id": 93,
                "status": 0,
                "createdAt": "2015-10-02T05:38:11.000Z"
              },
              {
                "id": 133,
                "status": -2,
                "createdAt": "2015-10-03T22:08:41.000Z"
              }
            ],
            "refURL": "http://goo.gl/2dokTa"
          },
          {
            "id": 1160,
            "name": "Hrithik Gupta",
            "reason": "i love the concept of the product , and i could do great publicity of this product.",
            "active": true,
            "status": -2,
            "createdAt": "2015-10-04T09:31:04.000Z",
            "updatedAt": "2015-10-04T09:31:04.000Z",
            "user": {
              "id": 1343,
              "description": null,
              "name": "Hrithik Gupta",
              "nickname": "hrithikgupta",
              "avatarUrl": "https://graph.facebook.com/968852813172217/picture/?type=large",
              "urlTwitter": "http://twitter.com/hrigta",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/968852813172217/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "https://www.youtube.com/channel/UCPAV-RMIDQ9uuns0qmX__QQ",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 166,
                "status": 0,
                "createdAt": "2015-10-04T09:31:04.000Z"
              },
              {
                "id": 168,
                "status": 0,
                "createdAt": "2015-10-04T09:31:04.000Z"
              },
              {
                "id": 170,
                "status": -2,
                "createdAt": "2015-10-04T09:31:20.000Z"
              }
            ],
            "refURL": "http://goo.gl/KkhDgH"
          },
          {
            "id": 1161,
            "name": "Hrithik Gupta",
            "reason": "i love the concept of the product , and i could do great publicity of this product.",
            "active": true,
            "status": 0,
            "createdAt": "2015-10-04T09:31:04.000Z",
            "updatedAt": "2015-10-04T09:31:04.000Z",
            "user": {
              "id": 1343,
              "description": null,
              "name": "Hrithik Gupta",
              "nickname": "hrithikgupta",
              "avatarUrl": "https://graph.facebook.com/968852813172217/picture/?type=large",
              "urlTwitter": "http://twitter.com/hrigta",
              "urlFacebook": "https://www.facebook.com/app_scoped_user_id/968852813172217/",
              "urlBlog": null,
              "urlPinterest": null,
              "urlYoutube": "https://www.youtube.com/channel/UCPAV-RMIDQ9uuns0qmX__QQ",
              "isInfluencer": false,
              "points": "0",
              "posts": 0,
              "trials": 3
            },
            "product": {
              "id": 6,
              "name": "BloomSky",
              "slug": "bloomsky",
              "tagline": "World's first smart weather camera",
              "urlHome": "http://www.bloomsky.com",
              "urlFacebook": "http://www.facebook.com/bloomsky",
              "urlTwitter": "http://twitter.com/bloomsky",
              "banner": {
                "filename": "ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg",
                "type": "image/jpeg",
                "url": {
                  "image": "http://d30xksqof6w2my.cloudfront.net/ba2a3c2f-9186-4603-9f35-8f2563a64e38_0_admin.jpg"
                },
                "createdAt": "2015-05-02T03:34:31.000Z"
              }
            },
            "content": [],
            "log": [
              {
                "id": 167,
                "status": 0,
                "createdAt": "2015-10-04T09:31:04.000Z"
              },
              {
                "id": 169,
                "status": 0,
                "createdAt": "2015-10-04T09:31:04.000Z"
              }
            ],
            "refURL": "http://goo.gl/jH3rKc"
        }];

}