(function () {
  "use strict";

  function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const isUnsafe =
      !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
    const isSecure =
      isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside && !isUnsafe;

    console.log(
      `Door locked: ${isDoorLocked}, window closed: ${isWindowClosed}, ` +
        `alarm on: ${isAlarmOn}, owner inside: ${isOwnerInside} -> ` +
        `${isSecure ? "Secure" : "Unsafe"}`,
    );
  }

  // Test one fully secured home and one scenario with an open window.
  const isDoorLocked = true;
  const isWindowClosed = true;
  const isAlarmOn = true;
  const isOwnerInside = true;

  checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);
  checkSecurity(isDoorLocked, false, isAlarmOn, isOwnerInside);
})();
