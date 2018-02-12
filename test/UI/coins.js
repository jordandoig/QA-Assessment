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

  after(() => {
    driver.quit();
  })

  beforeEach(() => {
    driver.get("https://shapeshift.io/#/coins")
  })

  it("Should get the title of the page.", (done) => {
    driver.getTitle()
      .then((title) => {
        assert.equal('ShapeShift | Cryptocurrency Exchange | Simple Coin Conversion', title, 'shapeshift.io/#/coins should have title "ShapeShift | Cryptocurrency Exchange | Simple Coin Conversion".');
        done();
      });
  });
});
