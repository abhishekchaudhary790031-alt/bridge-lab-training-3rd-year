(function () {
  "use strict";

  const productName = " wireless headphones PRO ";

  // Trim and lowercase before capitalizing each word.
  const titleCasedName = productName
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Apply the requested product-label replacement to the formatted title.
  const cleanedTitle = titleCasedName.replace("Pro", "Pro Edition");

  console.log(`Cleaned title: ${cleanedTitle}`);
  console.log(`Title length: ${cleanedTitle.length}`);
})();
