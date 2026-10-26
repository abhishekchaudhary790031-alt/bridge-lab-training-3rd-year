(function () {
  "use strict";

  let count = 0;

  function logCount(action) {
    // This nested function reads the count variable in its enclosing scope.
    function reportUpdate() {
      console.log(`${action}: count is now ${count}`);
    }

    reportUpdate();
  }

  function increment() {
    count += 1;
    logCount("Increment");
  }

  function decrement() {
    count -= 1;
    logCount("Decrement");
  }

  // Simulate button clicks by calling each function.
  increment();
  increment();
  decrement();
})();
