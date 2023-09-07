document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculate");
  const clearButton = document.getElementById("clear");
  const resultSpan = document.getElementById("result");
  const messageSpan = document.getElementById("message");

  calculateButton.addEventListener("click", calculateBMI);
  clearButton.addEventListener("click", clearForm);

  function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters

    if (gender === "male" || gender === "female") {
      const bmi = weight / (height * height);
      resultSpan.textContent = "Your BMI: " + bmi.toFixed(2);

      if (bmi < 18.5) {
        messageSpan.textContent = "You are underweight.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        messageSpan.textContent = "You have a normal weight.";
      } else if (bmi > 24.9) {
        messageSpan.textContent = "You are overweight.";
      } else {
        messageSpan.textContent = "";
      }
    } else {
      resultSpan.textContent = "Please select a valid gender.";
      messageSpan.textContent = "";
    }
  }

  function clearForm() {
    document.getElementById("gender").value = "male";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    resultSpan.textContent = "";
    messageSpan.textContent = "";
  }
});
