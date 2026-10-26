(function () {
  "use strict";

  // Update these category amounts to track a different month.
  const expenses = [
    { category: "Food", amount: 4200 },
    { category: "Travel", amount: 1800 },
    { category: "Rent", amount: 12000 },
    { category: "Bills", amount: 2300 },
    { category: "Leisure", amount: 1500 },
  ];

  function updateExpense(category, updatedAmount) {
    const expense = expenses.find(
      (entry) => entry.category.toLowerCase() === category.toLowerCase(),
    );

    if (!expense || !Number.isFinite(updatedAmount) || updatedAmount < 0) {
      console.error("Provide an existing expense category and a non-negative amount.");
      return;
    }

    expense.amount = updatedAmount;
  }

  updateExpense("Leisure", 1600);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const averageExpense = totalExpenses / expenses.length;
  let totalAfterTax = totalExpenses;
  totalAfterTax += totalAfterTax * 0.1;

  console.table(
    expenses.map(({ category, amount }) => ({
      category,
      amount: amount.toFixed(2),
    })),
  );
  console.log(`Total expenses: ${totalExpenses.toFixed(2)}`);
  console.log(`Average expense: ${averageExpense.toFixed(2)}`);
  console.log(`Total after 10% tax: ${totalAfterTax.toFixed(2)}`);
})();
