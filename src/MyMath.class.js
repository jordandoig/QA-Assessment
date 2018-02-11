class MyMath {
  // add 2 numbers and return result
  static add(a, b) {
    this.validateInput(a, b);
    return a + b;
  }

  // subtract 2 numbers and return result
  static subtract(a, b) {
    this.validateInput(a, b);
    return a - b;
  }

  // multiply 2 numbers and return result
  static multiply(a, b) {
    this.validateInput(a, b);
    return a * b;
  }

  // divide 2 numbers and return result
  static divide(a, b) {
    this.validateInput(a, b);
    return a / b;
  }

  static validateInput(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "Input must be numeric.";
    }
    return;
  }
}

exports.MyMath = MyMath;
