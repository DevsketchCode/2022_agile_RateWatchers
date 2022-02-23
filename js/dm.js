/*
**********
Script is designed to get the data from the submission form, display flags,
display the data in result fields, and any other DOM manipulation.
*/

// Event listener for the submit button contains the logic for DOM manipulation.
document.querySelector("#convertForm").addEventListener("submit", function() {
  
  // Sets the flag for the current or country selected
  switch(document.querySelector("#UserConvertCurrency").value) {
    
    case Pesos:
    // TODO Add logic for flag
    break;
    
    case Euros:
    // TODO Add logic for flag
    break;
    
    case RMB:
    // TODO Add logic for flag
    break;
  }
  
});