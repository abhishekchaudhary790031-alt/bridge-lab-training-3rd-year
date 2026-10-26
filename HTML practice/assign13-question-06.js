(function () {
  "use strict";

  // Change this sample input to generate a taller or shorter pyramid.
  const requestedLimit = 5;
  const rowLimit =
    Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;
  let pattern = "";

  for (let row = 1; row <= rowLimit; row += 1) {
    pattern += `${"* ".repeat(row).trimEnd()}\n`;
  }

  console.log(`Pyramid with ${rowLimit} rows:\n${pattern}`);

  // With let, each callback keeps its own iteration value.
  const letCallbacks = [];
  for (let index = 1; index <= 3; index += 1) {
    letCallbacks.push(() => index);
  }
  console.log("Loop callbacks using let:", letCallbacks.map((callback) => callback()));

  // With var, the callbacks share one function-scoped variable.
  const varCallbacks = [];
  for (var varIndex = 1; varIndex <= 3; varIndex += 1) {
    varCallbacks.push(() => varIndex);
  }
  console.log("Loop callbacks using var:", varCallbacks.map((callback) => callback()));
  console.log(
    "Debugger: set a breakpoint on the var loop and watch varIndex; it is reused and ends at 4.",
  );

  try {
    // A strict-mode loop variable must be declared.
    Function('"use strict"; for (rowIndex = 0; rowIndex < 1; rowIndex += 1) {}')();
  } catch (error) {
    console.log(`Undeclared strict-mode loop variable: ${error.name}: ${error.message}`);
  }
})();
