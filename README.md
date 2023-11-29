# Loan Calculator

![image](https://github.com/Emetegift/loan-calculator/assets/104801555/05fd756e-1f6c-4ebb-8a90-a93aa4d7d38a)


![image](https://github.com/Emetegift/loan-calculator/assets/104801555/458cbc09-7ea2-4d18-8bda-067b199b80f1)

The calculator allows users to input the loan amount, interest rate, and loan term (in years) to calculate the monthly payment, total payments, and total interest.

## Getting Started

To use this loan calculator, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <https://github.com/Emetegift/loan-calculator>
   ```

2. Open the `index.html` file in a web browser.

3. Enter the loan amount, interest rate, and loan term in the provided form.

4. Submit the form to calculate the loan details.

## Usage

The loan calculator is implemented using HTML and JavaScript. The main functionality is triggered when the user submits the loan form. The event listener is set up to handle the form submission and execute the `calculateResults` function.

### Event Listener for Submit

```javascript
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // ... (Hiding results and showing loader)
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});
```

### Calculate Results Function

The `calculateResults` function extracts input values from the form, performs calculations, and displays the results or shows an error message.

```javascript
function calculateResults() {
  // ... (Extracting input values and performing calculations)
  if (isFinite(monthly)) {
    // ... (Displaying results and hiding loader)
  } else {
    showError("Please check your numbers!");
  }
}
```

### Show Error Function

The `showError` function creates and displays an error message if the calculation results in non-finite values.

```javascript
function showError(error) {
  // ... (Hiding results and loader, displaying error message)
  setTimeout(clearError, 3000);
}
```

### Clear Error Function

The `clearError` function removes the displayed error message after a specified delay.

```javascript
function clearError() {
  document.querySelector(".alert").remove();
}
```

## Contributing

If you'd like to contribute to the development of this loan calculator, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository's `master` branch.

## License

This loan calculator is open source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own projects.
