const onPrepare = function () {
  browser.manage().window().maximize();
  browser.waitForAngularEnabled(false);

  // Adding nice console output.
  // Provided by: https://github.com/razvanz/jasmine2-reporter
  let ConsoleReporter = require("jasmine2-reporter").Jasmine2Reporter;  // заимпортели модуль
  let console_reporter_options = {
    startingSpec: true,
    // можно добавить другие опции через ключ-значение...
  };
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));

  // let reporters = require('jasmine-reporters');
  //   let junitReporter = new reporters.JUnitXmlReporter({
  //       savePath: `${__dirname}/xml`,
  //       consolidateAll: false
  //   });
  //   jasmine.getEnv().addReporter(junitReporter)

    let AllureReporter = require('jasmine-allure-reporter');
     jasmine.getEnv().addReporter(new AllureReporter({
         resultsDir: 'allure-results'
     }));
};

module.exports = {
  onPrepare,
};



// var jasmineReporters = require('jasmine-reporters');
// jasmine.getEnv().clearReporters();
// jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
