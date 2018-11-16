// An example configuration file.
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,

  baseUrl: 'https://qacoe-app.aerobatic.io',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
            args: [ "--disable-dev-shm-usage", "--headless", "--disable-gpu", "--window-size=1024x768" ]
        }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: __dirname + '/reports',
        fixedScreenshotName: true,
        fileName: 'test_report'
      })
    );
  }
};
