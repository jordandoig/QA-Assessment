class MyMath {
  // add 2 numbers and return result
  add(a, b) {
    this.validateInput(a, b);
    return a + b;
  }

  // subtract 2 numbers and return result
  subtract(a, b) {
    this.validateInput(a, b);
    return a - b;
  }

  // multiply 2 numbers and return result
  multiply(a, b) {
    this.validateInput(a, b);
    return a * b;
  }

  // divide 2 numbers and return result
  divide(a, b) {
    this.validateInput(a, b);
    return a / b;
  }

  validateInput(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "Input must be numeric.";
    }
    return;
  }
}

exports.MyMath = MyMath;
