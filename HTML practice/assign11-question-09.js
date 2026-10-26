(function () {
  "use strict";

  const firstNumber = Math.floor(Math.random() * 20) + 1;
  const secondNumber = Math.floor(Math.random() * 20) + 1;
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;

  switch (operator) {
    case "+":
      correctAnswer = firstNumber + secondNumber;
      break;
    case "-":
      correctAnswer = firstNumber - secondNumber;
      break;
    case "*":
      correctAnswer = firstNumber * secondNumber;
      break;
    case "/":
      correctAnswer = Number((firstNumber / secondNumber).toFixed(2));
      break;
    default:
      console.error("Unsupported math operator.");
      return;
  }

  console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
  console.log(
    `Correct answer: ${operator === "/" ? correctAnswer.toFixed(2) : correctAnswer}`,
  );
})();
