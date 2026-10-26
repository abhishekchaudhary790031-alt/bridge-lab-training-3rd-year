(function () {
  "use strict";

  // Enter five marks, each between 0 and 100.
  const marks = [92, 86, 78, 88, 90];
  const expectedSubjectCount = 5;
  const allMarksValid =
    marks.length === expectedSubjectCount &&
    marks.every((mark) => Number.isFinite(mark) && mark >= 0 && mark <= 100);

  if (!allMarksValid) {
    console.error("Enter exactly five valid subject marks from 0 to 100.");
    return;
  }

  const totalMarks = marks.reduce((total, mark) => total + mark, 0);
  const average = totalMarks / marks.length;
  const percentage = (totalMarks / (marks.length * 100)) * 100;
  let result;

  if (marks.some((mark) => mark < 35) || percentage < 50) {
    result = "Detained";
  } else if (percentage >= 85) {
    result = "Promoted with Distinction";
  } else {
    result = "Promoted";
  }

  console.log(`Average marks: ${average.toFixed(2)}`);
  console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
  console.log(`Result: ${result}`);
})();
