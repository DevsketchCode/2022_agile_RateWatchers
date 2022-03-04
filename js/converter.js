/*
**********
Script is designed to get the data from the submission form,
validate the data and convert the currencies.
*/

// Set global variables so they can be used in both fileSize
// Variable for total after conversion and rate
  var newAmount;
  var currencyRate;
  
// Variables for country stats
  var originPop;
  var originLang;
  var originGDP;
  var originCap;
  var originLead;
  
  var newPop;
  var newLang;
  var newGDP;
  var newCap;
  var newLead;

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
    
    // Variable to grab original country flag
    var countryOriginFlag = document.querySelector("#UserInputCurrency").value;
    
    // Variable to grab new country flag
    var countryNewFlag = document.querySelector("#UserConvertCurrency").value;
    
    // Switch case to grab what was selected and asign stats
    switch(countryOriginFlag) {
      
      case "USA":
        originPop = "329.5 Billion";
        originLang = "English";
        originGDP = "20.94 Trillion";
        originCap = "Washingtion, D.C.";
        originLead = "Joe Biden";
      break;

      case "Mexico":
        originPop = "128.9 Million";
        originLang = "Spanish";
        originGDP = "1.076 Trillion";
        originCap = "Mexico City";
        originLead = "Andres Manuel Lopez Obrador";
        
      break;
      
      case "Canada":
        originPop = "38.01 Million";
        originLang = "French/English";
        originGDP = "1.643";
        originCap = "Ottawa";
        originLead = "Justin Trudeau";
      break;
      
      case "China":
        originPop = "1.402 Billion";
        originLang = "Mandarin";
        originGDP = "14.72 Trillion";
        originCap = "Beijing";
        originLead = "Xi Jinping";
        
        
      break;
      
      case "Australia":
        originPop = "25.69 million";
        originLang = "English";
        originGDP = "1.331 Trillion";
        originCap = "Canberra";
        originLead = "Scott Morrison";
      break;
      
      case "Barbados":
        originPop = "287,000";
        originLang = "English";
        originGDP = "4.366 Billion";
        originCap = "Bridgetown";
        originLead = "Mia Mottley";
      break;
      
      case "Bolivia":
        originPop = "11.67 Million";
        originLang = "Spanish";
        originGDP = "36.69 Billion";
        originCap = "Sucre";
        originLead = "Luis Acre";
      break;
      
      case "Denmark":
        originPop = "5.831 Million";
        originLang = "Danish";
        originGDP = "355.2 Billion";
        originCap = "Copenhagen";
        originLead = "Mette Frederiksen";
      break;
      
      case "Egypt":
        originPop = "102.3 Million";
        originLang = "Modern Standard Arabic";
        originGDP = "363.1 Billion";
        originCap = "Cairo";
        originLead = "Abdel Fattah Al-Sisi";
      break;
      
      case "Ecuador":
        originPop = "17.64 Million";
        originLang = "Spanish";
        originGDP = "98.81 Billion";
        originCap = "Quito";
        originLead = "Guillermo Lasso";
      break;
      
      case "Gambia":
        originPop = "2.417 Million";
        originLang = "English";
        originGDP = "1.902 Billion";
        originCap = "Banjul";
        originLead = "Adama Barrow";
      break;
      
      case "Georgia":
        originPop = "10.62 Million";
        originLang = "Georgian";
        originGDP = "15.89 Billion";
        originCap = "Tbilisi";
        originLead = "Salome Zourabichvili";
      break;
      
      case "Grenada":
        originPop = "112,519";
        originLang = "English";
        originGDP = "1.089 Billion";
        originCap = "Saint George's";
        originLead = "Keith Mitchell";
      break;
      
      case "Jamaica":
        originPop = "2.961 Million";
        originLang = "English";
        originGDP = "13.81 Billion";
        originCap = "Kingston";
        originLead = "Andrew Holness";
      break;
      
      case "Madagascar":
        originPop = "27.69 Million";
        originLang = "Malagasy/French";
        originGDP = "13.72 Billion";
        originCap = "Antananarivo";
        originLead = "Andry Rajoelina";
      break;
    }
    
    // Switch case to grab new flag and assign stats
    switch(countryNewFlag) {
      
      case "USA":
        newPop = "329.5 Billion";
        newLang = "English";
        newGDP = "20.94 Trillion";
        newCap = "Washingtion, D.C.";
        newLead = "Joe Biden";
      break;

      case "Mexico":
        newPop = "128.9 Million";
        newLang = "Spanish";
        newGDP = "1.076 Trillion";
        newCap = "Mexico City";
        newLead = "Andres Manuel Lopez Obrador";
        
      break;
      
      case "Canada":
        newPop = "38.01 Million";
        newLang = "French/English";
        newGDP = "1.643";
        newCap = "Ottawa";
        newLead = "Justin Trudeau";
      break;
      
      case "China":
        newPop = "1.402 Billion";
        newLang = "Mandarin";
        newGDP = "14.72 Trillion";
        newCap = "Beijing";
        newLead = "Xi Jinping";
        
        
      break;
      
      case "Australia":
        newPop = "25.69 million";
        newLang = "English";
        newGDP = "1.331 Trillion";
        newCap = "Canberra";
        newLead = "Scott Morrison";
      break;
      
      case "Barbados":
        originPop = "287,000";
        originLang = "English";
        originGDP = "4.366 Billion";
        originCap = "Bridgetown";
        originLead = "Mia Mottley";
      break;
      
      case "Bolivia":
        newPop = "11.67 Million";
        newLang = "Spanish";
        newGDP = "36.69 Billion";
        newCap = "Sucre";
        newLead = "Luis Acre";
      break;
      
      case "Denmark":
        newPop = "5.831 Million";
        newLang = "Danish";
        newGDP = "355.2 Billion";
        newCap = "Copenhagen";
        newLead = "Mette Frederiksen";
      break;
      
      case "Egypt":
        newPop = "102.3 Million";
        newLang = "Modern Standard Arabic";
        newGDP = "363.1 Billion";
        newCap = "Cairo";
        newLead = "Abdel Fattah Al-Sisi";
      break;
      
      case "Ecuador":
        newPop = "17.64 Million";
        newLang = "Spanish";
        newGDP = "98.81 Billion";
        newnCap = "Quito";
        newLead = "Guillermo Lasso";
      break;
      
      case "Gambia":
        originPop = "2.417 Million";
        originLang = "English";
        originGDP = "1.902 Billion";
        originCap = "Banjul";
        originLead = "Adama Barrow";
      break;
      
      case "Georgia":
        newPop = "10.62 Million";
        newLang = "Georgian";
        newGDP = "15.89 Billion";
        newCap = "Tbilisi";
        newLead = "Salome Zourabichvili";
      break;
      
      case "Grenada":
        newPop = "112,519";
        newLang = "English";
        newGDP = "1.089 Billion";
        newCap = "Saint George's";
        newLead = "Keith Mitchell";
      break;
      
      case "Jamaica":
        newPop = "2.961 Million";
        newLang = "English";
        newGDP = "13.81 Billion";
        newCap = "Kingston";
        newLead = "Andrew Holness";
      break;
      
      case "Madagascar":
        newPop = "27.69 Million";
        newLang = "Malagasy/French";
        newGDP = "13.72 Billion";
        newCap = "Antananarivo";
        newLead = "Andry Rajoelina";
      break;
    }
    

  }

});
