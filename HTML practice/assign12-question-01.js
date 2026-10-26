(function () {
  "use strict";

  // The bonus belongs to the outer, global scope.
  const bonus = 5000;

  function calculateSalary(permanentStatus) {
    const salary = 40000;
    // This local variable controls the calculation without changing the global bonus.
    let isPermanent = permanentStatus;
    const totalSalary = isPermanent ? salary + bonus : salary;

    console.log(
      `${isPermanent ? "Permanent" : "Non-permanent"} employee total salary: ${totalSalary}`,
    );

    isPermanent = !isPermanent;
    console.log(`Changing local isPermanent to ${isPermanent} does not change global bonus.`);
  }

  calculateSalary(true);
  calculateSalary(false);
  console.log(`Global bonus remains: ${bonus}`);
})();
