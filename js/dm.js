/*
**********
Script is designed to get the data from the submission form, display flags,
display the data in result fields, and any other DOM manipulation.
*/

// Event listener for the submit button contains the logic for DOM manipulation.
document.querySelector("#convertForm").addEventListener("submit", function() {
  
  var countrySelected = document.querySelector("#UserConvertCurrency").value
  var originCountryFlag = "usa";
  var newCountryFlag;
  
  // Test for country currency selected
  //alert("Country is " + countrySelected);
  
  // Sets the flag for the current or country selected
  switch(countrySelected) {
    
    case "Mexico":
    newCountryFlag = "mexico"
    break;
    
    case "Canada":
    newCountryFlag = "canada"
    break;
    
    case "China":
    newCountryFlag = "china"
    break;
  }
  
  // Test for country flag selected
  //alert("Country is " + newCountryFlag);
  
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
});