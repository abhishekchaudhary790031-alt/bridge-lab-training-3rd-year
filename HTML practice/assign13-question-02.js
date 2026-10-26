(function () {
  "use strict";

  const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "Incomplete", salary: "not provided", years: "3" },
    { name: "Missing data", salary: "41000" },
  ];

  for (const employee of employees) {
    try {
      if (!employee || employee.name === undefined) {
        throw new TypeError("Missing employee name or employee record.");
      }
      if (employee.salary === undefined || employee.years === undefined) {
        throw new TypeError("Missing salary or years of service.");
      }

      const salary = Number(employee.salary);
      const years = Number(employee.years);
      if (!Number.isFinite(salary) || !Number.isFinite(years)) {
        throw new TypeError("Salary and years must convert to valid numbers.");
      }

      const bonusRate = years > 3 ? 0.1 : 0.05;
      const bonus = salary * bonusRate;
      console.log(
        `${employee.name}: salary ${salary.toFixed(2)}, ` +
          `${years} years, bonus ${(bonusRate * 100).toFixed(0)}% ` +
          `(${bonus.toFixed(2)}), total ${(salary + bonus).toFixed(2)}`,
      );
    } catch (error) {
      console.log(`Employee record skipped: ${error.name}: ${error.message}`);
    }
  }
})();
