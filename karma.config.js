var webpackConfig = require('./webpack.config.js');

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
      './src/test/jsx/**/*.js'
    ],

    preprocessors: {
      './src/main/jsx/**/*.js': ['webpack'],
      './src/test/jsx/**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
