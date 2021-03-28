const onPrepare = function () {
  browser.manage().window().maximize();
  browser.waitForAngularEnabled(false);

  // Adding nice console output.
  // Provided by: https://github.com/razvanz/jasmine2-reporter
  let ConsoleReporter = require("jasmine2-reporter").Jasmine2Reporter;
  let console_reporter_options = {
    startingSpec: true,
  };
  jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));
};

module.exports = {
  onPrepare,
};
