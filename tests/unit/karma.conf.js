module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'jasmine-matchers'
      ],
    files: [
      '../../scripts/consts.js',
      '*Specs.js'
      ],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers'
    ],         
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}