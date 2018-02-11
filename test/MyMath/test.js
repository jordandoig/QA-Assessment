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

it("Should return 3 when 6 is subtracted from 9.", () => {
  var instance = new MyMath();
  var result = instance.subtract(9,6);

  assert.strictEqual(3,result);
});

it("Should return 21 when 7 and 3 are multiplied.", () => {
  var instance = new MyMath();
  var result = instance.multiply(7,3);

  assert.strictEqual(21,result);
});

it("Should return 5 when 30 is divided by 6.", () => {
  var instance = new MyMath();
  var result = instance.divide(30,6);

  assert.strictEqual(5,result);
});
