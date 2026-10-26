(function () {
  "use strict";

  function outer() {
    // var count is hoisted in outer's function scope and starts as undefined.
    console.log("Outer count before assignment:", count);
    var count = 5;

    function inner() {
      // This var is hoisted in inner's separate scope, shadowing outer count.
      console.log("Inner count before assignment:", count);
      var count = 10;
    }

    inner();
    console.log("Outer count after inner returns:", count);
  }

  console.log("Original nested function output:");
  outer();

  function outerWithArrow() {
    var count = 5;

    const arrowWithLocalVar = () => {
      // The local var is still hoisted within the arrow's own function scope.
      console.log("Arrow-local count before assignment:", count);
      var count = 10;
    };

    const arrowUsingClosure = () => {
      // Without a local declaration, the arrow reads count from outerWithArrow.
      console.log("Arrow reading captured outer count:", count);
    };

    arrowWithLocalVar();
    arrowUsingClosure();
  }

  console.log("Arrow function comparison:");
  outerWithArrow();
  console.log(
    "Debugger call stack: outer -> inner (then return); the arrow examples run inside outerWithArrow.",
  );
})();
