(function () {
  "use strict";

  const feedback =
    "Great product! Fast delivery and amazing sound quality!";
  const normalizedFeedback = feedback.toLowerCase();
  const words = feedback.trim().split(/\s+/);
  const containsNegativeFeedback =
    normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");
  const result = containsNegativeFeedback
    ? "Needs Improvement"
    : "Positive Feedback";

  console.log(`Feedback: ${feedback}`);
  console.log(`Word count: ${words.length}`);
  console.log(`Result: ${result}`);
})();
