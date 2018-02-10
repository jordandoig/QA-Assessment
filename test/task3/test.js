var common = require("../common");
var assert = common.assert;
var MyMath = require("../../src/MyMath.class").MyMath;

it("Should create an instance of the MyMath class.", () => {
  var instance = new MyMath();
  assert.exists(instance);
});
