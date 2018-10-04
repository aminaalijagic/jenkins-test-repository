exports.config = {
    framework: 'jasmine',
    specs: ['test_wolfram.js'],
    capabilities: {
      browserName: 'chrome'
    },  
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      defaultTimeoutInterval: 100000
    },
    onPrepare: function(){
      var jasmineReporters = require('/Users/amina/node_modules/jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
    },
  }