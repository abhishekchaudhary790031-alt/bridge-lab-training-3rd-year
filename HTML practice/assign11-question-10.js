(function () {
  "use strict";

  // This sample follows the assignment's "vote only" age band: 18–20.
  // The prompt also says "all services" from age 18, which overlaps that band;
  // age 21+ is treated as the all-services threshold so both outcomes are reachable.
  const age = 19;
  const isCitizen = true;
  let eligibility;

  if (isCitizen) {
    if (age >= 21) {
      eligibility = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
      eligibility = "Eligible to vote only.";
    } else {
      eligibility = "Not eligible yet.";
    }
  } else if (age >= 18) {
    eligibility = "Only age criteria met.";
  } else {
    eligibility = "Not eligible yet.";
  }

  console.log(eligibility);
})();
