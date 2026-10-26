(function () {
  "use strict";

  console.log("Original sequence (each statement is isolated for observation):");

  try {
    // score is hoisted as undefined; announce is hoisted as a callable function.
    console.log("score before assignment:", score);
    announce();
    var score = 50;
    function announce() {
      console.log("Game started");
    }

    // Calling startGame before this let initialization reads status in its
    // temporal dead zone and throws a ReferenceError.
    startGame();
    let status = "ready";
    function startGame() {
      console.log(status);
    }
  } catch (error) {
    console.log(`Original sequence error: ${error.name}: ${error.message}`);
  }

  console.log("Fixed declaration order:");
  const fixedScore = 50;
  const fixedStatus = "ready";
  const fixedAnnounce = () => console.log("Game started");
  const fixedStartGame = () => console.log(fixedStatus);
  console.log("score:", fixedScore);
  fixedAnnounce();
  fixedStartGame();

  console.log("A function declaration is hoisted; its arrow equivalent is not:");
  try {
    callFunctionBeforeDeclaration();
  } catch (error) {
    console.log(`Declaration call before initialization: ${error.name}`);
  }

  function callFunctionBeforeDeclaration() {
    console.log("Function declaration is callable before its source line.");
  }

  try {
    callArrowBeforeInitialization();
    const callArrowBeforeInitialization = () =>
      console.log("Arrow function called.");
  } catch (error) {
    console.log(`Arrow called before initialization: ${error.name}`);
  }
  const initializedArrow = () => console.log("Arrow function called after initialization.");
  initializedArrow();
  console.log(
    "Arrow functions must be initialized before use; after initialization they run normally.",
  );
})();
