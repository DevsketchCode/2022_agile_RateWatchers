/*
**********
Script is designed to get the data from the submission form,
validate the data and convert the currencies.
*/

// Event listener for the submit button contains the logic for converting amounts.
document.querySelector("#convertForm").addEventListener("submit", function() {
  
  // Gets the text from the input field 
  var userInput = Number(document.querySelector("#UserInputAmount").value);
  
  // Validates only numbers are submitted and refreshes the input field
  // when invalid data is submitted.
  if(userInput == '' || isNaN(userInput) ){
    alert("Make sure you only enter a number!");
    document.querySelector("#UserInputAmount").value = "";
  }

});
