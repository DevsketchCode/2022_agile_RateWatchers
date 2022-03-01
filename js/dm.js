/*
**********
Script is designed to get the data from the submission form, display flags,
display the data in result fields, and any other DOM manipulation.
*/

/* -- DOM FUNCTIONS -- */

// Sets the input field values
function AddOption(selection) {
  // Sets up the arrays and variables for the input fields
  const country = ["USA", "Mexico", "Canada", "China", "Australia", "Barbados", "Bolivia", "Denmark", "Egypt", "Ecuador", "Gambia", "Georgia", "Grenada", 
  "Jamaica", "Madagascar"];

  const countryCurrency = ["United States Dollar (USD)", "Mexican Peso (MXN)", "Canadian Dollar (CAD)", "Chinese Renminbi (RMB)", "Australian dollar (AUD)",
   "Barbadian Dollar (BBD)", "Bolivian Boliviano (BOB)", "Danish Krone (DKK)", "Egyptian Pound (EGP)", "United States Dollar (USD)", "Gambian Dalasi (GMD)", 
   "Georgian Lari (GEL)", "East Caribbean Dollar (XCD)", "	Jamaican Dollar (JMD)", "Malagasy Ariary (MGA)"];

  // Sets the options for the drop down fields 
  for(var i = 0; i < country.length; i++) {
    var option = document.createElement("option");
    option.value = country[i];
    option.text = countryCurrency[i];
    selection.add(option, i);
}
}

// Show field function
function ShowField(id) {
  id.style.display = "block";
}

// Fill Results Fields
function FillConversionResultsTable(amountEntered, originCurrency, newCurrency, newFinalAmount, newFinalRate) {
  document.querySelector("#AmountEntered").innerHTML = amountEntered;
  document.querySelector("#origin-currency-name").innerHTML = originCurrency;
  document.querySelector("#NewCurrencyName").innerHTML = newCurrency;
  document.querySelector("#ConvertedAmount").innerHTML = newFinalAmount;
  document.querySelector("#Rate").innerHTML = newFinalRate;
  
}

// Adds the fields to the input when the window is fully loaded
window.onload = function () {

  // Gets the drop down field data
  AddOption(document.querySelector("#UserInputCurrency"));
  AddOption(document.querySelector("#UserConvertCurrency"));
};

// Display Country Conversion if data entered in currency field
document.querySelector("#UserInputAmount").addEventListener("keypress", (event) => {
  currencyCountryDiv = document.querySelector("#currency-country-div");
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
  var countrySelected = document.querySelector("#UserConvertCurrency");
  var originSelected = document.querySelector("#UserInputCurrency");
  
  // Get Selected Convert To Currency Texts
  var originCurrencyName = originSelected.options[originSelected.selectedIndex].text;
  var newCurrencyName = countrySelected.options[countrySelected.selectedIndex].text;
  
  // Get converted values from other file
  var newFinalAmount = newAmount;
  var newFinalRate = currencyRate;

  var originCountryFlag;
  var newCountryFlag;

    // Sets the flag for the original country currency selected by the user
  switch(originSelected.value) {
    
    case "USA":
      originCountryFlag = "usa";
    break;
    
    case "Mexico":
      originCountryFlag = "mexico";
    break;
    
    case "Canada":
      originCountryFlag = "canada";
    break;
    
    case "China":
      originCountryFlag = "china";
    break;

    case "Australia":
      originCountryFlag = "australia";
    break;
  
    case "Barbados":
      originCountryFlag = "barbados";
    break;
  
    case "Bolivia":
      originCountryFlag = "bolivia";
    break;
  
    case "Denmark":
      originCountryFlag = "denmark";
    break;
  
    case "Egypt":
      originCountryFlag = "egypt";
    break;
  
    case "Ecuador":
      originCountryFlag = "ecuador";
    break;
  
    case "Gambia":
      originCountryFlag = "gambia";
    break;
  
    case "Georgia":
      originCountryFlag = "georgia";
    break;
  
    case "Grenada":
      originCountryFlag = "grenada";
    break;
  
    case "Jamaica":
      originCountryFlag = "jamaica";
    break;
  
    case "Madagascar":
      originCountryFlag = "madagascar";
    break;
  }

  // Sets the flag for the new country currency selected by the user
  switch(countrySelected.value) {
    
    case "USA":
      newCountryFlag = "usa";
    break;
    
    case "Mexico":
      newCountryFlag = "mexico";
    break;
    
    case "Canada":
      newCountryFlag = "canada";
    break;
    
    case "China":
      newCountryFlag = "china";
    break;

    case "Australia":
      newCountryFlag = "australia";
    break;

    case "Barbados":
      newCountryFlag = "barbados";
    break;

    case "Bolivia":
      newCountryFlag = "bolivia";
    break;

    case "Denmark":
      newCountryFlag = "denmark";
    break;

    case "Egypt":
      newCountryFlag = "egypt";
    break;

    case "Ecuador":
      newCountryFlag = "ecuador";
    break;

    case "Gambia":
      newCountryFlag = "gambia";
    break;

    case "Georgia":
      newCountryFlag = "georgia";
    break;

    case "Grenada":
      newCountryFlag = "grenada";
    break;

    case "Jamaica":
      newCountryFlag = "jamaica";
    break;

    case "Madagascar":
      newCountryFlag = "madagascar";
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
  FillConversionResultsTable(amountEntered, originCurrencyName, newCurrencyName, newFinalAmount, newFinalRate);

  // Display Converted Results Div on Convert Button Click if input data is correct
  if(amountEntered !== "" && !isNaN(amountEntered)){
    resultsDiv = document.querySelector("#converted-results");
    ShowField(resultsDiv);
  }
});

