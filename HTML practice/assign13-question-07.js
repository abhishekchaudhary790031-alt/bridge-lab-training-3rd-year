(function () {
  "use strict";

  const operations = ["add", "divide", "power", "root", "subtract"];
  const num1 = 25;
  const num2 = 0;

  class DivideByZeroError extends Error {
    constructor(message) {
      super(message);
      this.name = "DivideByZeroError";
    }
  }
  class NegativeRootError extends Error {
    constructor(message) {
      super(message);
      this.name = "NegativeRootError";
    }
  }
  class InvalidOperationError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidOperationError";
    }
  }

  function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
      case "add":
        return firstNumber + secondNumber;
      case "divide":
        if (secondNumber === 0) {
          throw new DivideByZeroError("Cannot divide by zero.");
        }
        return firstNumber / secondNumber;
      case "power":
        return Math.pow(firstNumber, secondNumber);
      case "root":
        if (firstNumber < 0) {
          throw new NegativeRootError("Cannot find a real square root of a negative number.");
        }
        return Math.sqrt(firstNumber);
      case "subtract":
        return firstNumber - secondNumber;
      default:
        throw new InvalidOperationError(`Unknown calculator operation: ${operation}`);
    }
  }

  for (const operation of operations) {
    try {
      const result = calculate(operation, num1, num2);
      console.log(`${operation}(${num1}, ${num2}) = ${result}`);
    } catch (error) {
      console.log(`${operation} error: ${error.name}: ${error.message}`);
    }
  }

  for (const [operation, firstNumber, secondNumber] of [
    ["root", -9, 0],
    ["modulo", 25, 3],
  ]) {
    try {
      const result = calculate(operation, firstNumber, secondNumber);
      console.log(`${operation}(${firstNumber}, ${secondNumber}) = ${result}`);
    } catch (error) {
      console.log(`Additional test: ${error.name}: ${error.message}`);
    }
  }
})();
