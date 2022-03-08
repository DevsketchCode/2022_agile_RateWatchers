
// Fills modal box with Country List Content
function displayCountryList(modalContent) {

  // Populate countries
  // Format Countries into a display list
  var countryList = getCountries();

  // sort array alphabetically
  countryList.sort();

  for (i = 0; i < countryList.length; i++) {
    modalContent.innerHTML += "<div class='model-contry-div'><img src='images/" + countryList[i].toLowerCase() + "Flag.png' class='modal-flags' />" + countryList[i] + "</div>";
  }
}

// Fills the modal box with Contact Administrator format
function displayContactForm(modalContent) {
  
  // Create a multiline string using backtick
  var contactAdminForm = `
  <!-- Contact Administrator Form -->
  <div id="contact-admin-container">
      <label for="contact-name">Name: </label>
      <input type="text" id="contact-name" name="contact-name" maxlength="50" placeholder="Enter your name">
      <label for="contact-subject">Subject: </label>
      <input type="text" id="contact-subject" name="contact-subject" maxlength="50" placeholder="Enter a subject">
      <label for="contact-body">Message: </label>
      <textarea id="contact-body" name="contact-body" placeholder="Enter your message here" maxlength="250"></textarea>
      <button type="submit" id="contact-submit" name="contact-submit" onClick="emailContactInfo()">Submit</button>
  </div>
  `;

  modalContent.innerHTML = contactAdminForm;  
}

function emailContactInfo() {
  // Get user contact form input
  var contactName = encodeURI(document.querySelector("#contact-name").value).trim();
  var contactSubject = encodeURI(document.querySelector("#contact-subject").value).trim();
  var contactBody = encodeURI(document.querySelector("#contact-body").value).trim();

  // Send email using their default email program
  // Only send if form is populated
  if (contactName !== "" && contactSubject !== "" && contactBody !== "") {
    var emailString = "mailto:doberlander@student.cvtc.edu?subject=" + contactName + encodeURI(" sent this message: ")  + contactSubject + "&body=" + contactBody;
    // Submit the email to the default e-mail program
    window.location = emailString;
  } else {
    alert("You must enter all the fields in the contact form before you can submit");
  }
}

// Display Modal Box and Fill with Content
function displayModal(content) {

  // Get Model Elements
  var modalContainer = document.getElementById("modal-container");
  var modalContent = document.getElementById("modal-content");
  var modalClose = document.getElementsByClassName("modal-close")[0];

  // If you want the option to close by clicking outside the box. True or False
  var closeByClickingOutside = false;

  // Reset content field
  modalContent.innerHTML = "";

  // run function according to content value
  // this will input data into the modal box and display it
  switch(content) {
    case "CountryList": 
      displayCountryList(modalContent);
      // not necessary but putting the boolean here for consistency
      closeByClickingOutside = true; 
      break;
    case "Contact":
      displayContactForm(modalContent);
      closeByClickingOutside = false;
      break;
    default: 
      // If the option is not in this switch case, set content variable to empty so it does nothing
      content = "";
  }

  // If content exists and is in switch case, then display the modal, with options to close it.
  if(content !== "") {
    // Display Modal div
    modalContainer.style.display = "block";

    //Close the country list if clicks close Button
    modalClose.addEventListener("click",function() {
      modalContainer.style.display = "none";
    });

    // Only close the modal if the option is set to true
    if(closeByClickingOutside) {
      // Close the modal box if clicks outside of div
      window.onclick = function(event) {
        if (event.target === modalContainer) {
          modalContainer.style.display = "none";
        }
      };
    } else {
      // Disable the window.onclick feature if option set to false
      window.onclick = null;
    }
  }
}