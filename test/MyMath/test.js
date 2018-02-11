var common = require("../common");
var assert = common.assert;
var MyMath = require("../../src/MyMath.class").MyMath;

it("Should create an instance.", () => {
  var instance = new MyMath();

  assert.exists(instance, 'MyMath() should create an instance.');
});

it("Should create an instance of the MyMath class.", () => {
  var instance = new MyMath();

  assert.instanceOf(instance, MyMath, 'MyMath() should create an instance of the MyMath class.');
});

it("Should reject non-numeric input.", () => {
  var result = function () {
    MyMath.add("not","number");
  }

  assert.throws(result, "Input must be numeric.", 'MyMath should throw when any input is not a number.');
});

it("Should return 4 when 3 and 1 are added.", () => {
  var result = MyMath.add(3,1);

  assert.strictEqual(4, result, 'MyMath.add() should return the value of the two inputs added.');
});

it("Should return -3 when 9 is subtracted from 6.", () => {
  var result = MyMath.subtract(6,9);

  assert.strictEqual(-3, result, 'MyMath.subtract() should return the value of the second input subtracted from the first.');
});

it("Should return 7.5 when 2.5 and 3 are multiplied.", () => {
  var result = MyMath.multiply(2.5,3);

  assert.strictEqual(7.5, result, 'MyMath.multiply() should return the value of the two inputs multiplied.');
});

it("Should return 5 when 30 is divided by 6.", () => {
  var result = MyMath.divide(30,6);

  assert.strictEqual(5, result, 'MyMath.divide() should return the value of the first input divided by the second.');
});

it ("Should return 'undefined' when 1 is divided by 0.", () => {
  var result = MyMath.divide(1,0);

  assert.strictEqual(undefined, result, 'MyMath.divide() should return undefined when the second parameter is 0.');
});
