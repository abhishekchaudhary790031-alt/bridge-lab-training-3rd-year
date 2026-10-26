(function () {
  "use strict";

  console.log("Non-strict behavior:");
  try {
    const nonStrictDemo = Function(`
      function demo(a, a) {
        total = 10;
        const totalBeforeDelete = total;
        const deleted = delete total;
        return { secondArgument: a, totalBeforeDelete, deleted };
      }
      return demo(5, 10);
    `);
    console.log("Duplicate parameters are accepted; later a wins:", nonStrictDemo());
  } catch (error) {
    console.log(`Non-strict demonstration error: ${error.name}: ${error.message}`);
  }

  console.log("Strict-mode behavior:");
  const strictExamples = [
    [
      "duplicate parameter names",
      `"use strict"; return function demo(a, a) {};`,
    ],
    ["assignment to undeclared total", `"use strict"; total = 10;`],
    ["deleting an identifier", `"use strict"; const total = 10; return delete total;`],
  ];

  for (const [description, source] of strictExamples) {
    try {
      Function(source)();
      console.log(`${description}: unexpectedly succeeded`);
    } catch (error) {
      console.log(`${description}: ${error.name}: ${error.message}`);
    }
  }

  function correctDemo(firstArgument, secondArgument) {
    const total = firstArgument + secondArgument;
    return { firstArgument, secondArgument, total };
  }

  console.log("Correct ES6 version:", correctDemo(5, 10));
  console.log(
    "Strict mode rejects ambiguous duplicate parameters, accidental globals, and deleting local bindings.",
  );
})();
