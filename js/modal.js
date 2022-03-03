
// Fills modal box with Country List Content
function displayCountryList(modalContainer, modalContent, modalClose) {

  // Reset content field
  modalContent.innerHTML = "";

  // Populate countries
  // Format Countries into a display list
  var countryList = getCountries();

  // sort array alphabetically
  countryList.sort();

  for (i = 0; i < countryList.length; i++) {
    modalContent.innerHTML += "<div class='model-contry-div'><img src='images/" + countryList[i].toLowerCase() + "Flag.png' class='modal-flags' />" + countryList[i] + "</div>";
  }

  // Display Country list div
  modalContainer.style.display = "block";


  //Close the country list if clicks close Button
  modalClose.addEventListener("click",function() {
    modalContainer.style.display = "none";
  });

  // Close the country list if clicks outside of div
   window.onclick = function(event) {
     if (event.target === modalContainer) {
      modalContainer.style.display = "none";
     }
   };
}

// Display Modal Box and Fill with Content
function displayModal(content) {

  // Get Model Elements
  var modalContainer = document.getElementById("modal-container");
  var modalContent = document.getElementById("modal-content");
  var modalClose = document.getElementsByClassName("modal-close")[0];

  // run function according to content value
  // this will input data into the modal box and display it
  switch(content) {
    case "CountryList": 
      displayCountryList(modalContainer, modalContent, modalClose);
      break;
  }
}