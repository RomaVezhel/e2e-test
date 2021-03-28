const { onPrepare } = require("./src/OnPrepare");
exports.config = {
  allScriptsTimeout: 20000,
  getPageTimeout: 20000,
  specs: ["./src/**/lesson2.js", "./src/**/lesson3.js"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "https://movies-finder.firebaseapp.com",
  framework: "jasmine2",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000,
  },
  onPrepare,
};
