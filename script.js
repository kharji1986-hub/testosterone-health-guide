
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

  result.textContent = "Your BMI is: " + bmi.toFixed(1);
});
