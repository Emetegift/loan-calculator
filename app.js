//Listerner for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide Result
  document.getElementById("results").style.display = "none";

  //Show Loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate result
function calculateResults() {
  // UI Variables from html
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayments = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-inerest");

  //Ceate Principal i.e the amount loaned, interest and amount to pay in 2 decimal places
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

    //Show results
    document.getElementById("results").style.display = "block";

    // Hide loader after showing result
    document.getElementById("loading").style.display = "none";
  } else {
    // Call function that will take in an error message
    showError("Please check your numbers!");
  }
}

//Show error message function
function showError(error) {
  //Hide results if theres is an error
  document.getElementById("results").style.display = "none";

  // Hide loader after showing result if theres is an error
  document.getElementById("loading").style.display = "none";

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

// To clear the error
function clearError() {
  document.querySelector(".alert").remove();
}
