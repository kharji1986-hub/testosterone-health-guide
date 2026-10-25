const proteinButton = document.getElementById("calculate-protein");

proteinButton.addEventListener("click", function() {
  const weight = parseFloat(
    document.getElementById("protein-weight").value
  );

  const activity = parseFloat(
    document.getElementById("activity-level").value
  );

  const result = document.getElementById("protein-result");

  if (!Number.isFinite(weight) || weight <= 0) {
    result.textContent = "Please enter a valid weight.";
    return;
  }

  const protein = weight * activity;

  result.textContent =
    "Estimated daily protein: " + protein.toFixed(1) + " grams";
});
