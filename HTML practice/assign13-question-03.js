(function () {
  "use strict";

  const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
  ];
  const validTransactions = [];
  const invalidTransactions = [];

  class NegativeAmountError extends Error {
    constructor(message) {
      super(message);
      this.name = "NegativeAmountError";
    }
  }
  class MissingTransactionFieldError extends Error {
    constructor(message) {
      super(message);
      this.name = "MissingTransactionFieldError";
    }
  }
  class NullTransactionError extends Error {
    constructor(message) {
      super(message);
      this.name = "NullTransactionError";
    }
  }

  for (const transaction of transactions) {
    try {
      // Set a VS Code breakpoint here and watch transaction, validTransactions,
      // and invalidTransactions while stepping through each record.
      if (transaction === null) {
        throw new NullTransactionError("Transaction entry is null.");
      }
      if (transaction.id === undefined || transaction.amount === undefined) {
        throw new MissingTransactionFieldError("Transaction is missing id or amount.");
      }
      if (transaction.amount < 0) {
        throw new NegativeAmountError("Transaction amount cannot be negative.");
      }

      validTransactions.push(transaction);
      console.log(`Transaction ${transaction.id}: valid`);
    } catch (error) {
      invalidTransactions.push({
        transaction,
        errorType: error.name,
        message: error.message,
      });
      console.log(`${error.name}: ${error.message}`);
    }
  }

  console.log(`Successful transactions: ${validTransactions.length}`);
  console.log(`Failed transactions: ${invalidTransactions.length}`);
  console.log("Valid report:", validTransactions);
  console.log("Invalid report:", invalidTransactions);
})();
