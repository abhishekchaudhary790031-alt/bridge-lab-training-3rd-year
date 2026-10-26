(function () {
  "use strict";

  const currentSalary = 50000;
  const annualIncrementRate = 8;
  let projectedSalary = currentSalary;
  const projection = [];

  for (let year = 1; year <= 5; year += 1) {
    projectedSalary *= 1 + annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary * 100) / 100;
    projection.push({
      year,
      salary: projectedSalary.toFixed(2),
    });
  }

  console.table(projection);
})();
