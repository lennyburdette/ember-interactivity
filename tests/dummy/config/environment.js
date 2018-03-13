'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    metricsAdapters: [{
      name: 'Mixpanel',
      environments: ['all'],
      config: {
        token: '028ea13aa27ef5a62bb2fe1ef5d8cc1f'
      }
    }],

    // Ember Interactivity Options
    interactivity: {
      instrumentation: {
        disableComponents: false,
        disableRoutes: false,
      },
      timelineMarking: {
        disableComponents: false,
        disableLeafComponents: false,
        disableRoutes: false,
        disableParentRoutes: false
      },
      tracking: {
        disableComponents: false,
        disableLeafComponents: false,
        disableRoutes: false,
        disableParentRoutes: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Allow ember-cli-addon-docs to update the rootURL in compiled assets
    ENV.rootURL = 'ADDON_DOCS_ROOT_URL';
    // here you can enable a production-specific feature
  }

  return ENV;
};
