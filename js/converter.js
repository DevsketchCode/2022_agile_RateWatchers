/*
**********
Script is designed to get the data from the submission form,
validate the data and convert the currencies.
*/

// Set global variables so they can be used in both fileSize
// Variable for total after conversion and rate
  let newFinalAmount;
  let newFinalRate;
  
// Variables for country stats
  let originPop;
  let originLang;
  let originGDP;
  let originCap;
  let originLead;
  
  let newPop;
  let newLang;
  let newGDP;
  let newCap;
  let newLead;
  
  // Variable for base conversion rates
  var originCurrencyCode = "";
  var originSelectionBaseRate = "";
  var firstConvertToCountry_CurrencyCode = "";
  var firstConvertToCountry_BaseRate = 0;

  // Functions
  function displayFunctionMessage(){
    alert("Flags can be clicked to display extra information about them.");
  }

  // Calculates the values for the tables
  function updateTableAmounts (rate, tableCell, tablePreset) {

    // Preset amounts
    var presetAmount = [5, 10, 50, 100, 200];
    var tableAmount = 0;
    var cellCounter = 1;

    for (i = 0; i < presetAmount.length; i++) {

      // Calculates the amount and adds it to an array
    tableAmount = Math.round((rate * presetAmount[i])*100)/100;
      $("#" + tableCell + cellCounter).html(tableAmount);
      $("#" + tablePreset + cellCounter).html(presetAmount[i]);
      cellCounter++;
    }
    
  }

  // Remaining code

// Event listener for the submit button contains the logic for converting amounts.
document.querySelector("#convertForm").addEventListener("submit", function(e) {
  
  e.preventDefault();

  // Gets the text from the input field 
  var userInput = Number(document.querySelector("#UserInputAmount").value);
  
  // Validates only numbers are submitted. Provides an alert popup. Refreshes the 
  //input field and page when invalid data is submitted.
  if(userInput <= 0 || isNaN(userInput)){
    alert("You did not input a valid currency value! Please try again.");
    document.querySelector("#UserInputAmount").value = "";
    location.reload();
  } else {
  
    const baseRateMap = new Map();
    baseRateMap.set("USD",1.00);
    baseRateMap.set("MXN",20.8122);
    baseRateMap.set("CAD",1.2723);
    baseRateMap.set("CNY",6.3176);
    baseRateMap.set("AUD",1.3597);
    baseRateMap.set("BBD",2.00);
    baseRateMap.set("BOB",6.7123);
    baseRateMap.set("DKK",6.7780);
    baseRateMap.set("EGP",15.6818);
    baseRateMap.set("USD",1.00);
    baseRateMap.set("GMD",53.0341);
    baseRateMap.set("GEL",3.1914);
    baseRateMap.set("XCD",2.70);
    baseRateMap.set("JMD",153.523);
    baseRateMap.set("MGA",3962.31);
    
    // Variable to grab original country flag
    let countryOriginData = document.querySelector("#UserInputCurrency").value;
    
    // Variable to grab new country flag
    let countryNewData = document.querySelector("#UserConvertCurrency").value;

    
    // Switch case to grab what was selected and asign stats
    // This will also set the base conversion rate for the selected country. Base Rate = the countries rate to 1 USD
    switch(countryOriginData) {
      
      case "USA":
        originPop = "329.5 Billion";
        originLang = "English";
        originGDP = "20.94 Trillion";
        originCap = "Washingtion, D.C.";
        originLead = "Joe Biden";
        originCurrencyCode = "USD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;

      case "Mexico":
        originPop = "128.9 Million";
        originLang = "Spanish";
        originGDP = "1.076 Trillion";
        originCap = "Mexico City";
        originLead = "Andres Manuel Lopez Obrador";
        originCurrencyCode = "MXN";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Canada":
        originPop = "38.01 Million";
        originLang = "French/English";
        originGDP = "1.643";
        originCap = "Ottawa";
        originLead = "Justin Trudeau";
        originCurrencyCode = "CAD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);        
      break;
      
      case "China":
        originPop = "1.402 Billion";
        originLang = "Mandarin";
        originGDP = "14.72 Trillion";
        originCap = "Beijing";
        originLead = "Xi Jinping";
        originCurrencyCode = "CNY";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);       
      break;
      
      case "Australia":
        originPop = "25.69 million";
        originLang = "English";
        originGDP = "1.331 Trillion";
        originCap = "Canberra";
        originLead = "Scott Morrison";
        originCurrencyCode = "AUD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Barbados":
        originPop = "287,000";
        originLang = "English";
        originGDP = "4.366 Billion";
        originCap = "Bridgetown";
        originLead = "Mia Mottley";
        originCurrencyCode = "BBD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Bolivia":
        originPop = "11.67 Million";
        originLang = "Spanish";
        originGDP = "36.69 Billion";
        originCap = "Sucre";
        originLead = "Luis Acre";
        originCurrencyCode = "BOB";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Denmark":
        originPop = "5.831 Million";
        originLang = "Danish";
        originGDP = "355.2 Billion";
        originCap = "Copenhagen";
        originLead = "Mette Frederiksen";
        originCurrencyCode = "DKK";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Egypt":
        originPop = "102.3 Million";
        originLang = "Modern Standard Arabic";
        originGDP = "363.1 Billion";
        originCap = "Cairo";
        originLead = "Abdel Fattah Al-Sisi";
        originCurrencyCode = "EGP";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Ecuador":
        originPop = "17.64 Million";
        originLang = "Spanish";
        originGDP = "98.81 Billion";
        originCap = "Quito";
        originLead = "Guillermo Lasso";
        originCurrencyCode = "USD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Gambia":
        originPop = "2.417 Million";
        originLang = "English";
        originGDP = "1.902 Billion";
        originCap = "Banjul";
        originLead = "Adama Barrow";
        originCurrencyCode = "GMD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Georgia":
        originPop = "10.62 Million";
        originLang = "Georgian";
        originGDP = "15.89 Billion";
        originCap = "Tbilisi";
        originLead = "Salome Zourabichvili";
        originCurrencyCode = "GEL";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Grenada":
        originPop = "112,519";
        originLang = "English";
        originGDP = "1.089 Billion";
        originCap = "Saint George's";
        originLead = "Keith Mitchell";
        originCurrencyCode = "XCD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Jamaica":
        originPop = "2.961 Million";
        originLang = "English";
        originGDP = "13.81 Billion";
        originCap = "Kingston";
        originLead = "Andrew Holness";
        originCurrencyCode = "JMD";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
      
      case "Madagascar":
        originPop = "27.69 Million";
        originLang = "Malagasy/French";
        originGDP = "13.72 Billion";
        originCap = "Antananarivo";
        originLead = "Andry Rajoelina";
        originCurrencyCode = "MGA";
        originSelectionBaseRate = baseRateMap.get(originCurrencyCode);
      break;
    }
    // Switch case to grab new flag and assign stats
    // This will also set the base conversion rate for the selected country. Base Rate = the countries rate to 1 USD    
    switch(countryNewData) {
      
      case "USA":
        newPop = "329.5 Billion";
        newLang = "English";
        newGDP = "20.94 Trillion";
        newCap = "Washingtion, D.C.";
        newLead = "Joe Biden";
        firstConvertToCountry_CurrencyCode = "USD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);
      break;

      case "Mexico":
        newPop = "128.9 Million";
        newLang = "Spanish";
        newGDP = "1.076 Trillion";
        newCap = "Mexico City";
        newLead = "Andres Manuel Lopez Obrador";
        firstConvertToCountry_CurrencyCode = "MXN";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);
      break;
      
      case "Canada":
        newPop = "38.01 Million";
        newLang = "French/English";
        newGDP = "1.643";
        newCap = "Ottawa";
        newLead = "Justin Trudeau";
        firstConvertToCountry_CurrencyCode = "CAD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "China":
        newPop = "1.402 Billion";
        newLang = "Mandarin";
        newGDP = "14.72 Trillion";
        newCap = "Beijing";
        newLead = "Xi Jinping";
        firstConvertToCountry_CurrencyCode = "CNY";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);
      break;
      
      case "Australia":
        newPop = "25.69 million";
        newLang = "English";
        newGDP = "1.331 Trillion";
        newCap = "Canberra";
        newLead = "Scott Morrison";
        firstConvertToCountry_CurrencyCode = "AUD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);
      break;
      
      case "Barbados":
        newPop = "287,000";
        newLang = "English";
        newGDP = "4.366 Billion";
        newCap = "Bridgetown";
        newLead = "Mia Mottley";
        firstConvertToCountry_CurrencyCode = "BBD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);
      break;
      
      case "Bolivia":
        newPop = "11.67 Million";
        newLang = "Spanish";
        newGDP = "36.69 Billion";
        newCap = "Sucre";
        newLead = "Luis Acre";
        firstConvertToCountry_CurrencyCode = "BOB";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);       
      break;
      
      case "Denmark":
        newPop = "5.831 Million";
        newLang = "Danish";
        newGDP = "355.2 Billion";
        newCap = "Copenhagen";
        newLead = "Mette Frederiksen";
        firstConvertToCountry_CurrencyCode = "DKK";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Egypt":
        newPop = "102.3 Million";
        newLang = "Modern Standard Arabic";
        newGDP = "363.1 Billion";
        newCap = "Cairo";
        newLead = "Abdel Fattah Al-Sisi";
        firstConvertToCountry_CurrencyCode = "EGP";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Ecuador":
        newPop = "17.64 Million";
        newLang = "Spanish";
        newGDP = "98.81 Billion";
        newnCap = "Quito";
        newLead = "Guillermo Lasso";
        firstConvertToCountry_CurrencyCode = "USD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Gambia":
        originPop = "2.417 Million";
        originLang = "English";
        originGDP = "1.902 Billion";
        originCap = "Banjul";
        originLead = "Adama Barrow";
        firstConvertToCountry_CurrencyCode = "GMD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Georgia":
        newPop = "10.62 Million";
        newLang = "Georgian";
        newGDP = "15.89 Billion";
        newCap = "Tbilisi";
        newLead = "Salome Zourabichvili";
        firstConvertToCountry_CurrencyCode = "GEL";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Grenada":
        newPop = "112,519";
        newLang = "English";
        newGDP = "1.089 Billion";
        newCap = "Saint George's";
        newLead = "Keith Mitchell";
        firstConvertToCountry_CurrencyCode = "XCD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Jamaica":
        newPop = "2.961 Million";
        newLang = "English";
        newGDP = "13.81 Billion";
        newCap = "Kingston";
        newLead = "Andrew Holness";
        firstConvertToCountry_CurrencyCode = "JMD";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
      
      case "Madagascar":
        newPop = "27.69 Million";
        newLang = "Malagasy/French";
        newGDP = "13.72 Billion";
        newCap = "Antananarivo";
        newLead = "Andry Rajoelina";
        firstConvertToCountry_CurrencyCode = "MGA";
        firstConvertToCountry_BaseRate = baseRateMap.get(firstConvertToCountry_CurrencyCode);        
      break;
    }

    // Calculate the currency conversion


    // Calculation
    // Base Rates are all the amount that equals 1 USD
    // ((ConvertToBaseRate / OriginBaseRate) * inputAmount)
    
    newFinalRate = Math.round((firstConvertToCountry_BaseRate / originSelectionBaseRate)*100)/100;
    secondFinalRate = Math.round((originSelectionBaseRate / firstConvertToCountry_BaseRate)*100)/100;

    newFinalAmount = Math.round((newFinalRate * userInput)*100)/100;

    // Sets the cells for the first table
    updateTableAmounts(newFinalRate, "TableOneAmount", "TableOneSet");
    // Sets the cells for the second table
    updateTableAmounts(secondFinalRate, "TableTwoAmount", "TableTwoSet");
  }
});
