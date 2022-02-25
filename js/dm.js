/*
**********
Script is designed to get the data from the submission form, display flags,
display the data in result fields, and any other DOM manipulation.
*/

/* -- DOM FUNCTIONS -- */
// Show field function
function ShowField(id) {
  id.style.display = "block";
}

// Fill Results Fields
function FillConversionResultsTable(amountEntered, originCurrency, newCurrency) {
  document.querySelector("#AmountEntered").innerHTML = amountEntered;
  document.querySelector("#OriginCurrencyName").innerHTML = originCurrency;
  document.querySelector("#NewCurrencyName").innerHTML = newCurrency;
}

// Display Country Conversion if data entered in currency field
document.querySelector("#UserInputAmount").addEventListener("keypress", (event) => {
  currencyCountryDiv = document.querySelector("#CurrencyCountryDiv");
  if(currencyCountryDiv.style.display === "none" || 
      currencyCountryDiv.style.display === "") {
    // Display the currency Country div
    ShowField(currencyCountryDiv);
  }
});


// Event listener for the submit button contains the logic for DOM manipulation.
document.querySelector("#convertForm").addEventListener("submit", function() {

  // Get Values Form User Input
  var amountEntered = document.querySelector("#UserInputAmount").value;
  var originCurrencyName = document.querySelector("#OriginalCurrencyName").innerHTML;
  var countrySelected = document.querySelector("#UserConvertCurrency").value;
  
  // Get Selected Convert To Currency Text
  var selectedToCurrency = document.querySelector("#UserConvertCurrency");
  var newCurrencyName = selectedToCurrency.options[selectedToCurrency.selectedIndex].text;

  var originCountryFlag = "usa";
  var newCountryFlag;
    // Sets the flag for the current or country selected
  switch(countrySelected) {
    
    case "Mexico":
    newCountryFlag = "mexico";
    break;
    
    case "Canada":
    newCountryFlag = "canada";
    break;
    
    case "China":
    newCountryFlag = "china";
    break;
  }

  // Sets the flag labels in the results to blank
  var originFlagLabel = document.querySelector("#OriginFlag");
  var newFlagLabel = document.querySelector("#NewFlag");
  
  originFlagLabel.innerHTML = "";
  newFlagLabel.innerHTML = "";
  
  // Displays the flags of the origin currency and new currency
  var originFlagImage = document.createElement("img");
  var newFlagImage = document.createElement("img");
  
  originFlagImage.setAttribute("src", "images/" + originCountryFlag + "Flag.png");
  newFlagImage.setAttribute("src", "images/" + newCountryFlag + "Flag.png");
  
  originFlagLabel.appendChild(originFlagImage);
  newFlagLabel.appendChild(newFlagImage);

  // Populate the Results Fields
  FillConversionResultsTable(amountEntered, originCurrencyName, newCurrencyName);

  // Display Converted Results Div on Convert Button Click
  resultsDiv = document.querySelector("#ConvertedResults");
  ShowField(resultsDiv);
});

