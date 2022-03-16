/*
**********
Script is designed to get the data from the submission form, display flags,
display the data in result fields, and any other DOM manipulation.
*/

/* -- DOM FUNCTIONS -- */

// added countries to it's own, as it is needed in other scripts.
function getCountries() {
  return ["USA", "Mexico", "Canada", "China", "Australia", "Barbados", "Bolivia", "Denmark", "Egypt", "Ecuador", "Gambia", "Georgia", "Grenada", 
  "Jamaica", "Madagascar"];
}

// Sets the input field values
function AddOption(selection) {
  // Sets up the arrays and variables for the input fields
  const country = getCountries();

  const countryCurrency = ["United States Dollar (USD)", "Mexican Peso (MXN)", "Canadian Dollar (CAD)", "Chinese Yuan Renminbi (CNY)", "Australian dollar (AUD)",
   "Barbadian Dollar (BBD)", "Bolivian Boliviano (BOB)", "Danish Krone (DKK)", "Egyptian Pound (EGP)", "United States Dollar (USD)", "Gambian Dalasi (GMD)", 
   "Georgian Lari (GEL)", "East Caribbean Dollar (XCD)", "Jamaican Dollar (JMD)", "Malagasy Ariary (MGA)"];

  // Sets the options for the drop down fields 
  for(var i = 0; i < country.length; i++) {
    var option = document.createElement("option");
    option.value = country[i];
    option.text = country[i] + " - " + countryCurrency[i];
    selection.add(option, i);
  }
}

// Show field function
function ShowField(id) {
  $(id).fadeIn(1250).css("display", "block");
}

// Sets the flag for the original and new currency countries
function selectFlag(countrySelection) {
  var countrySelected;

  switch(countrySelection) {
    
    case "USA":
      countrySelected = "usa";
    break;
    
    case "Mexico":
      countrySelected = "mexico";
    break;
    
    case "Canada":
      countrySelected = "canada";
    break;
    
    case "China":
      countrySelected = "china";
    break;

    case "Australia":
      countrySelected = "australia";
    break;

    case "Barbados":
      countrySelected = "barbados";
    break;

    case "Bolivia":
      countrySelected = "bolivia";
    break;

    case "Denmark":
      countrySelected = "denmark";
    break;

    case "Egypt":
      countrySelected = "egypt";
    break;

    case "Ecuador":
      countrySelected = "ecuador";
    break;

    case "Gambia":
      countrySelected = "gambia";
    break;

    case "Georgia":
      countrySelected = "georgia";
    break;

    case "Grenada":
      countrySelected = "grenada";
    break;

    case "Jamaica":
      countrySelected = "jamaica";
    break;

    case "Madagascar":
      countrySelected = "madagascar";
    break;
  }

  // Returns the selection
  return countrySelected;
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
//window.onload = function () {
  $(function(){

  // Gets the drop down field data
  AddOption(document.querySelector("#UserInputCurrency"));
  AddOption(document.querySelector("#UserConvertCurrency"));
});

// Display Country Conversion if data entered in currency field
document.querySelector("#UserInputAmount").addEventListener("keydown", (event) => {
  currencyCountryDiv = document.querySelector("#input-convert-to-country-div");
  convertButton = document.querySelector("#btn-submit");
  if(currencyCountryDiv.style.display === "none" || 
      currencyCountryDiv.style.display === "") {
    // Display the currency Country div
    ShowField(currencyCountryDiv);
    ShowField(convertButton);
  }
});

// Event listener for the submit button contains the logic for DOM manipulation.
document.querySelector("#convertForm").addEventListener("submit", function() {

  // Get Values Form User Input
  var amountEntered = document.querySelector("#UserInputAmount").value;
  var countrySelected = document.querySelector("#UserConvertCurrency");
  var originSelected = document.querySelector("#UserInputCurrency");
  
  // Round amount entered to "###.##"
  amountEntered = Math.round(amountEntered * 100)/100;
  
  // Get Selected Convert To Currency Texts
  var originCurrencyName = originSelected.options[originSelected.selectedIndex].text;
  var newCurrencyName = countrySelected.options[countrySelected.selectedIndex].text;

  // Sets the flag for the original country currency selected by the user
  var originCountryFlag = selectFlag(originSelected.value);

  // Sets the flag for the new country currency selected by the user
  var newCountryFlag = selectFlag(countrySelected.value);

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

  // Display Banks and Converted Results Div on Convert Button Click if input data is correct
  if(amountEntered !== "" && !isNaN(amountEntered) && Number(amountEntered) > 0){
    resultsDiv = document.querySelector("#converted-results");
    ShowField(resultsDiv);

    // Saves the value of the dropdowns
    currentOriginCountry = $("select#UserInputCurrency").val();
    currentNewCountry = $("select#UserConvertCurrency").val();
    
    //Creates an image tag variable for use for the fixed amount tables
    var imageFlag1 = "<img src='images/" + originCountryFlag + "Flag.png" + "' alt='" + originSelected.value +"' width='20' height='15'>";
    var imageFlag2 = "<img src='images/" + newCountryFlag + "Flag.png" + "' alt='" + countrySelected.value +"' width='20' height='15'>";

    // Fills in the fixed amount table information                                                                                                                
    $("#original-currency-first").html(imageFlag1 + currentOriginCountry);
    $("#foreign-currency-first").html(imageFlag2 + currentNewCountry);
    $("#original-currency-second").html(imageFlag2 + currentNewCountry);
    $("#foreign-currency-second").html(imageFlag1 + currentOriginCountry);

    // Displays the Top Banks button
    $("#btn-bank-list").html("View  " + $("select#UserConvertCurrency").val() + "'s Top Banks");
    if(screen.width >= 1000) {
    $("#input-convert-to-country-div").css("display", "inline-block");
    $("#new-currency-banks").fadeIn(1250).css("display", "inline-block");
    }
    else {
      $("#new-currency-banks").fadeIn(1250).css("display", "block");
    }

    // Displays the fixed amount tables
    $("#conversion-tables").fadeIn(1250).css("display", "block");    

    // Refreshes the page if either selection has changed
    $("select#UserInputCurrency").change(function() {
      if(currentOriginCountry !== $("select#UserInputCurrency").val()) {
        $("#UserInputAmount").val("");
        location.reload();
      }
    });
    $("select#UserConvertCurrency").change(function() {
      if(currentNewCountry !== $("select#UserConvertCurrency").val()) {
        $("#UserInputAmount").val("");
        location.reload();
      }
    });

  }
  else {
    resultsDiv.style.display = "none";
  }  
  
  
  // Display stats for new country on click
  function displayStats(){
   
    
    var newFlagStats = document.querySelector("#NewFlag");
    var newFlagStatsStatus = 1;
    // Display stats for new country on click
    newFlagStats.onclick = function() {
      if(newFlagStatsStatus === 1){
        newFlagStats.innerHTML = "Population: " + newPop + "<br />Language: " + newLang + "<br />GDP: " + newGDP + "<br />Capital: " + newCap + "<br />Leader: " + newLead;
        newFlagStatsStatus = 0;
        return newFlagStatsStatus;
      } else {
        newFlagStats.innerHTML = "<img src=\"images/" + newCountryFlag + "Flag.png\">";
        newFlagStatsStatus = 1;
        return newFlagStatsStatus;
      }
    };
      
    // Display stats for origin country on click
    var originFlagStats = document.querySelector("#OriginFlag");
    var originFlagStatus = 1;
    originFlagStats.onclick = function() {
      if(originFlagStatus === 1){
        originFlagStats.innerHTML = "Population: " + originPop + "<br />Language: " + originLang + "<br />GDP: " + originGDP + "<br />Capital: " + originCap + "<br />Leader: " + originLead;
        originFlagStatus = 0;
        return originFlagStatus;
      } else {
        originFlagStats.innerHTML = "<img src=\"images/" + originCountryFlag + "Flag.png\">";
        originFlagStatus = 1;
        return originFlagStatus;
      }
      
    };
     
     
    // Display on touch
    var newFlagStatsTouch = document.querySelector("#NewFlag");
    var originFlagStatsTouch = document.querySelector("#OriginFlag");
    
    // Display origin stats on touch (mobile)
    function touchEndNew(){
          originFlagStatsTouch.innerHTML = "<img src=\"images/" + originCountryFlag + "Flag.png\">";
    }
    function touchStartNew(){
          originFlagStatsTouch.innerHTML = "Population: " + originPop + "<br />Language: " + originLang + "<br />GDP: " + originGDP + "<br />Capital: " + originCap + "<br />Leader: " + originLead;
    }
    function touchStartOld(){
      newFlagStatsTouch.innerHTML = "Population: " + newPop + "<br />Language: " + newLang + "<br />GDP: " + newGDP + "<br />Capital: " + newCap + "<br />Leader: " + newLead;
    }
    function touchEndOld(){
      newFlagStatsTouch.innerHTML = "<img src=\"images/" + newCountryFlag + "Flag.png\">";
    }
    originFlagStatsTouch.addEventListener('touchstart', touchStartNew); 
        
    originFlagStatsTouch.addEventListener('touchend', touchEndNew);
        
    newFlagStatsTouch.addEventListener('touchstart', touchStartOld);

    newFlagStatsTouch.addEventListener('touchend', touchEndOld);
      
    
  }
  
  
  displayStats();
  
});

