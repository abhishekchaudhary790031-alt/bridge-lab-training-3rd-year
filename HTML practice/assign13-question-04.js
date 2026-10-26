(function () {
  "use strict";

  function showMessage() {
    // In the broken version, assigning to undeclared greeting throws a
    // ReferenceError in strict mode instead of creating an accidental global.
    const greeting = "Welcome";
    console.log(greeting);
    return greeting;
  }

  const watchGreeting = showMessage();
  console.log(`Watch variable greeting after the call: ${watchGreeting}`);
  console.log(
    "Debugger: pause inside showMessage to see the showMessage -> script call stack.",
  );
})();
