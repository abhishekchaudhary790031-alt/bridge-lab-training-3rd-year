(function () {
  "use strict";

  const apiData = ["25", "true", "false", "NaN", "  ", "100px", "3.14", null, undefined];
  const validNumbers = [];
  const invalidValues = [];
  const report = [];

  for (let index = 0; index < apiData.length; index += 1) {
    const value = apiData[index];
    const numericValue = Number(value);
    const isBlankString = typeof value === "string" && value.trim() === "";
    const isValidNumber = !isBlankString && Number.isFinite(numericValue);

    if (isValidNumber) {
      validNumbers.push(numericValue);
    } else {
      invalidValues.push(value);
    }

    report.push({
      index,
      original: String(value),
      number: Number.isNaN(numericValue) ? "NaN (invalid)" : numericValue,
      boolean: Boolean(value),
      string: String(value),
      status: isValidNumber ? "Valid number" : "Invalid number",
    });
  }

  console.table(report);
  console.log("Valid numeric data:", validNumbers);
  console.log("Invalid values:", invalidValues);
  console.log(
    "Note: Number(null) is 0, so null is valid under numeric coercion; blank text is explicitly rejected.",
  );
})();
