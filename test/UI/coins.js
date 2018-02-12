var webdriver = require('selenium-webdriver');
var common = require("../common");
var assert = common.assert;

describe("/#/coins", () => {
  var driver;
  before(() => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
  });

  it("Should get the title of the page.", (done) => {
    driver.get("https://shapeshift.io/#/coins")
      .then(() => {
        done();
      })
  });
});
