
console.log("Testosterone Health Guide is ready!");

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});

const showMoreButton = document.getElementById("show-more-btn");
const extraInfo = document.getElementById("extra-info");

showMoreButton.addEventListener("click", function() {
  extraInfo.hidden = !extraInfo.hidden;

  if (extraInfo.hidden) {
    showMoreButton.textContent = "Show More";
  } else {
    showMoreButton.textContent = "Show Less";
  }
});
const bmiButton = document.getElementById("calculate-bmi");

bmiButton.addEventListener("click", function() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value) / 100;

  const result = document.getElementById("bmi-result");

  if (weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const bmi = weight / (height * height);
const indicator = document.getElementById("bmi-indicator");

if (indicator) {
  const position = Math.max(0, Math.min(100, ((bmi - 10) / 30) * 100));
  indicator.style.left = position + "%";
}
 let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 25) {
  category = "Normal weight";
} else if (bmi < 30) {
  category = "Overweight";
} else {
  category = "Obesity";
}

result.textContent = "Your BMI is: " + bmi.toFixed(1) + " - " + category;
if (bmi < 18.5) {
  result.style.color = "#2196F3";
} else if (bmi < 25) {
  result.style.color = "#008000";
} else if (bmi < 30) {
  result.style.color = "#FF9800";
} else {
  result.style.color = "#F44336";
}
});
const resetButton = document.getElementById("reset-bmi");

resetButton.addEventListener("click", function() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmi-result").textContent = "";
});
document.getElementById("bmi-indicator").style.left = "0%";
const calorieButton = document.getElementById("calculate-calories");

if (calorieButton) {
  calorieButton.addEventListener("click", function () {
    const age = Number(document.getElementById("calorie-age").value);
    const weight = Number(document.getElementById("calorie-weight").value);
    const height = Number(document.getElementById("calorie-height").value);
    const sex = document.getElementById("calorie-sex").value;
    const activity = Number(document.getElementById("activity-level").value);
    const result = document.getElementById("calorie-result");

    if (age <= 0 || weight <= 0 || height <= 0) {
      result.textContent = "Please enter valid age, weight, and height.";
      return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age
      + (sex === "male" ? 5 : -161);

    const calories = Math.round(bmr * activity);

    result.textContent =
      `Estimated daily calories: ${calories} kcal`;
  });
}
const resetCaloriesButton = document.getElementById("reset-calories");

if (resetCaloriesButton) {
  resetCaloriesButton.addEventListener("click", function () {
    document.getElementById("calorie-age").value = "";
    document.getElementById("calorie-weight").value = "";
    document.getElementById("calorie-height").value = "";
    document.getElementById("calorie-sex").value = "male";
    document.getElementById("activity-level").value = "1.2";
    document.getElementById("calorie-result").textContent = "";
  });
}
const convertButton = document.getElementById("convert-testosterone");

if (convertButton) {
  convertButton.addEventListener("click", function () {
    const input = document.getElementById("testosterone-value");
    const unit = document.getElementById("testosterone-unit").value;
    const result = document.getElementById("testosterone-result");

    const value = Number(input.value);

    if (input.value.trim() === "" || !Number.isFinite(value) || value < 0) {
      result.textContent = "Please enter a valid testosterone level.";
      return;
    }

    if (unit === "to-nmol") {
      result.textContent =
        `${(value * 0.0347).toFixed(2)} nmol/L`;
    } else {
      result.textContent =
        `${(value / 0.0347).toFixed(2)} ng/dL`;
    }
  });
}
