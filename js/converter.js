/*
**********
Script is designed to get the data from the submission form,
validate the data and convert the currencies.
*/

// Set global variables so they can be used in both fileSize
// Variable for total after conversion and rate
  var newAmount;
  var currencyRate;

// Event listener for the submit button contains the logic for converting amounts.
document.querySelector("#convertForm").addEventListener("submit", function() {
  
  // Gets the text from the input field 
  var userInput = Number(document.querySelector("#UserInputAmount").value);
  
  // Validates only numbers are submitted and refreshes the input field
  // when invalid data is submitted.
  if(userInput === 0 || isNaN(userInput)){
    alert("You did not input a valid currency value! Please try again.");
    document.querySelector("#UserInputAmount").value = "";
  } else {
  
    // Variable for what country is selected
    var countryRateSelected = document.querySelector("#UserConvertCurrency").value;


    // Switch case to see what country was picked and create conversion
    switch(countryRateSelected) {
      
      case "USA":
        newAmount = userInput * 1.00;
        currencyRate = "1 USD = 1 USD";
      break;

      case "Mexico":
        newAmount = userInput * 20.40;
        currencyRate = "1 USD = 20.40 Mexican Pesos";
      break;
      
      case "Canada":
        newAmount = userInput * 1.27;
        currencyRate = "1 USD = 1.27 Candian Dollar";
      break;
      
      case "China":
        newAmount = userInput * 6.32;
        currencyRate = "1 USD = 6.32 Chinese Yuan";
      break;
    }
    
    

  }

});
