//Listerner for submit

document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

//Calculate result

function calculateResults(e) {
  // UI Variables from html
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayments = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-inerest");

  //Ceate Principali.e the amount loaned
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute the monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // To check if the given result from the formular above is the expected finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayments.value = monthly * calculatedPayments.toFixed(2);
    totalInterest.value = monthly * calculatedPayments - principal.toFixed(2);
  } else {
    // Call function that will take in an error message
    showError("Please check your numbers!");
  }

  e.preventDefault();
}
function showError(error) {
  // create a div
  const errorDiv = document.createElement("div");

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add class
  errorDiv.className = "alert alert-danger";

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Inser error above the heading

  card.insertBefore(errorDiv, heading);

  //Clear error 3 seconds

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
