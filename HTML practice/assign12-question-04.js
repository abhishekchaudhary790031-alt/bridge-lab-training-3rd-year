(function () {
  "use strict";

  // Generate eight integer scores in the inclusive range from 30 to 100.
  const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30,
  );

  const highestScore = Math.max(...scores);
  const lowestScore = Math.min(...scores);
  const totalScore = scores.reduce((total, score) => total + score, 0);
  const averageScore = totalScore / scores.length;
  const passingScores = scores.filter((score) => score >= 50);
  const scoreReport = scores.map((score, index) => ({
    student: index + 1,
    score,
    result: score >= 50 ? "Pass" : "Below passing score",
  }));

  console.table(scoreReport);
  console.log(`Highest score: ${highestScore}`);
  console.log(`Lowest score: ${lowestScore}`);
  console.log(`Average score: ${averageScore.toFixed(2)}`);
  console.log(`Students who passed: ${passingScores.length}`);
})();
