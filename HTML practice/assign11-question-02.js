(function () {
  "use strict";

  const userName = "Samira";
  const age = 21;
  const isEnrolled = true;
  const favoriteSubjects = ["JavaScript", "HTML", "CSS"];
  const profile = { city: "Pune", course: "Web Development" };
  const middleName = null;
  let graduationYear;

  const entries = [
    ["Name", userName],
    ["Age", age],
    ["Currently enrolled", isEnrolled],
    ["Favorite subjects", favoriteSubjects],
    ["Profile", profile],
    ["Middle name", middleName],
    ["Graduation year", graduationYear],
  ];

  const report = entries.map(([label, value]) => {
    const type = value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
    const formattedValue =
      value !== null && typeof value === "object" ? JSON.stringify(value) : String(value);
    return { label, value: formattedValue, type };
  });

  console.table(report);
})();
