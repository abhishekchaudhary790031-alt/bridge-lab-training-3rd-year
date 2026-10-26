(function () {
  "use strict";

  const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    "{invalid}",
    '{"user":"Mina","age":"22"}',
    '{"user":"Noah","age":"16"}',
  ];
  const cleanData = [];
  const errors = [];

  for (let index = 0; index < rawData.length; index += 1) {
    const lineNumber = index + 1;

    try {
      // Set a breakpoint here to follow each parsed row and its validation result.
      const parsedRecord = JSON.parse(rawData[index]);
      const hasRequiredKeys =
        Object.hasOwn(parsedRecord, "user") && Object.hasOwn(parsedRecord, "age");

      if (!hasRequiredKeys) {
        throw new Error('Missing required "user" or "age" key.');
      }
      if (typeof parsedRecord.user !== "string" || parsedRecord.user.trim() === "") {
        throw new TypeError('"user" must be a non-empty string.');
      }

      const age = Number(parsedRecord.age);
      if (!Number.isFinite(age) || age < 0) {
        throw new TypeError('"age" must be a non-negative number.');
      }

      cleanData.push({ user: parsedRecord.user, age });
    } catch (error) {
      errors.push({ line: lineNumber, message: error.message });
      console.log(`Line ${lineNumber}: ${error.name}: ${error.message}`);
    }
  }

  const under18Users = cleanData.filter((record) => record.age < 18);
  console.log("Valid records:", cleanData);
  console.log("Users under 18:", under18Users);
  console.log(`Valid record count: ${cleanData.length}`);
  console.log(`Invalid record count: ${errors.length}`);
  console.log("Validation errors:", errors);
})();
