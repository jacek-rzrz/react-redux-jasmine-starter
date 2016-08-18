var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.resolve.root.push(
  path.resolve(path.join(__dirname, 'src', 'test', 'scripts'))
);

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['spec'],
    specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
    },
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './src/test/scripts/**/*.spec.js'
    ],

    preprocessors: {
      './src/main/scripts/**/*.js': ['webpack'],
      './src/test/scripts/**/*.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
