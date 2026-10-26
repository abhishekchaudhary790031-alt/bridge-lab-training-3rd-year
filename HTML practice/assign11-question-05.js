(function () {
  "use strict";

  // Change these sample conditions to get a different recommendation.
  const temperature = 22;
  const isRaining = false;
  const windSpeed = 12;
  let recommendation;

  if (isRaining || (temperature < 15 && windSpeed > 20)) {
    recommendation = isRaining
      ? "Stay indoors with hot coffee."
      : "Too cold and windy — stay home.";
  } else if (temperature > 35) {
    recommendation = "Go swimming.";
  } else {
    recommendation = "Perfect day for a walk.";
  }

  console.log(recommendation);
})();
