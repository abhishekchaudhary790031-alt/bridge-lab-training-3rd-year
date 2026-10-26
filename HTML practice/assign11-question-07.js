(function () {
  "use strict";

  const secretNumber = Math.floor(Math.random() * 50) + 1;
  // Change this test guess to check different outcomes.
  const userGuess = 24;
  let result;

  if (userGuess === secretNumber) {
    result = "Correct guess!";
  } else if (Math.abs(userGuess - secretNumber) <= 3) {
    result = "Very close!";
  } else if (userGuess > secretNumber) {
    result = "Too high";
  } else {
    result = "Too low";
  }

  console.log(`Secret number: ${secretNumber}`);
  console.log(`Your guess: ${userGuess}`);
  console.log(result);
})();
