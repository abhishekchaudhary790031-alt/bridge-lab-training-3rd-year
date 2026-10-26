(function () {
  "use strict";

  const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 },
  ];

  const originalTotal = cart.reduce((total, product) => total + product.price, 0);
  const discountedItems = [];

  // Apply category discounts to each item before any cart-wide discount.
  for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
      discountRate = 0.1;
    } else if (product.category === "fashion") {
      discountRate = 0.05;
    }

    const finalPrice = product.price * (1 - discountRate);
    discountedItems.push({
      item: product.item,
      category: product.category,
      originalPrice: product.price.toFixed(2),
      discount: `${discountRate * 100}%`,
      priceAfterDiscount: finalPrice,
    });
  }

  let finalTotal = discountedItems.reduce(
    (total, product) => total + product.priceAfterDiscount,
    0,
  );
  const qualifiesForCartDiscount = originalTotal > 50000;

  if (qualifiesForCartDiscount) {
    finalTotal *= 0.95;
  }

  console.table(discountedItems);
  console.log(`Original cart total: ${originalTotal.toFixed(2)}`);
  console.log(
    `Extra 5% cart discount: ${qualifiesForCartDiscount ? "Applied" : "Not applied"}`,
  );
  console.log(`Final cart total: ${finalTotal.toFixed(2)}`);
})();
