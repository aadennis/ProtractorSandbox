// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec2.js'],
    multiCapabilities: [ 
        {browserName: 'chrome'},
        {browserName: 'firefox'},
    ]
  }
  