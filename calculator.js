// Объектно-ориентированный JavaScript.

class Calculator {
  constructor() {}
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (a === 0 || b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log(calculator.divide(1, 1));
