'use strict';

module.exports = {
  app: {
    title: 'SproutUp Dashboard for Brands',
    description: 'Video is the best way to present your product to prospective customers. We help you find talented enthusiasts on YouTube or lifestyle trendsetters on Instagram to show how your product works, its quality, design and value.',
    keywords: 'marketing, influencer marketing, branding, campaign, influencer, content creator, content marketing, analytics',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  server: {
    api: process.env.SERVER_API || 'http://localhost:3333'
  },
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || '6379'
  },
  google: {
    maps: {
      key: process.env.GOOGLE_MAPS_KEY || 'AIzaSyDnnN1fL1vkptQQLdTL17pFrnH3XOlDNdo'
    }
  },
  mixpanel: {
    token: process.env.MIXPANEL_TOKEN || '90327b5fc1f60a0b7b51366fa5b432dc'
  },
  port: process.env.PORT || 3030,
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 7 * 24 hours
    maxAge: 7 * 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: 'MEAN',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  logo: 'modules/core/client/img/team-banner.jpg',
  favicon: 'modules/core/client/img/brand/favicon-96x96.png'};
