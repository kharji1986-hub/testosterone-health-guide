
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
