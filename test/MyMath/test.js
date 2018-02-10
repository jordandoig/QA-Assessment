var common = require("../common");
var assert = common.assert;
var MyMath = require("../../src/MyMath.class").MyMath;

it("Should create an instance.", () => {
  var instance = new MyMath();

  assert.exists(instance);
});

it("Should return 4 when 3 and 1 are added.", () => {
  var instance = new MyMath();
  var result = instance.add(3,1);

  assert.strictEqual(4,result);
});
