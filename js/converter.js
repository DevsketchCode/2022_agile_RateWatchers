// Will wait until the document is ready before starting up the jQuery.
// Since document is jQuery's default selector, we can omit it and
// if document is selected, then ready() is the default method so we
// can omit it as well.
$(function() {
  // Click event listener function for submit button
  $('#UserSubmit').click(function(e) {
    
    // Prevents the default action of refreshing the page
    e.preventDefault();
    
    //Sets the user input to a variable if a number
    // otherwise will alert the user that they are incorrect
    if(Number($('#UserInputAmount'))) {
      $inputCurrency = $('#UserInputAmount');
      
      
    }
    else {
      alert('Please only enter numbers!');
    }
    
  });
  
  
});