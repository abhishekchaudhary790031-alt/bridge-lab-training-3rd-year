(function () {
  "use strict";

  // Change this sample purchase amount to test a discount tier.
  const purchaseTotal = 6500;
  let discountRate;

  if (purchaseTotal >= 10000) {
    discountRate = 0.25;
  } else if (purchaseTotal >= 5000) {
    discountRate = 0.15;
  } else if (purchaseTotal >= 2000) {
    discountRate = 0.05;
  } else {
    discountRate = 0;
  }

  const finalPrice = Math.round(purchaseTotal * (1 - discountRate));

  console.log(`Original total: ${purchaseTotal.toFixed(2)}`);
  console.log(`Discount: ${discountRate * 100}%`);
  console.log(`Final price after discount: ${finalPrice}`);
})();
