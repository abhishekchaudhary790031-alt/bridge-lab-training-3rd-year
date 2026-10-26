(function () {
  "use strict";

  const x = 16.75;
  const roundedValue = Math.round(x);
  const squareRoot = Math.sqrt(x);
  const cube = Math.pow(x, 3);
  const randomNumber = Math.floor(Math.random() * 41) + 10;

  console.log(`Math Utility Dashboard for x = ${x}`);
  console.log(`Rounded value: ${roundedValue}`);
  console.log(`Square root: ${squareRoot.toFixed(2)}`);
  console.log(`x raised to the power of 3: ${cube.toFixed(2)}`);
  console.log(`Random number (10-50): ${randomNumber}`);
})();
