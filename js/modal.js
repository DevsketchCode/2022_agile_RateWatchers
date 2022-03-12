
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

  // add a world map image, opening with the CountryList content and fit to the width of the popup.
  modalContent.innerHTML += "<p style='font-size: 16px;'>World Map of Countries</p><div class='model-country-div' style='object-fit: cover'><img src='images/world_map.png' style='height: 200px; width: 300px; margin: 0 15px;'></div>"; 
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
  var contactName = encodeURI(document.querySelector("#contact-name").value.trim());
  var contactSubject = encodeURI(document.querySelector("#contact-subject").value.trim());
  var contactBody = encodeURI(document.querySelector("#contact-body").value.trim());

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

function selectBanks(countrySelection) {
  var topBanks = [];

  switch(countrySelection) {
    
    case "USA":
      topBanks[0] = "JPMorgan Chase & Co.";
      topBanks[1] = "Bank of America Corp";
      topBanks[2] = "Wells Fargo & Co.";
      topBanks[3] = "Citigroup Inc.";
      topBanks[4] = "U.S. Bancorp";
    break;
    
    case "Mexico":
      topBanks[0] = "BBVA Bancomer";
      topBanks[1] = "Santander Mexico";
      topBanks[2] = "Banamex";
      topBanks[3] = "Banorte";
      topBanks[4] = "HSBC Mexico";
    break;
    
    case "Canada":
      topBanks[0] = "Royal Bank of Canada";
      topBanks[1] = "Toronto-Dominion Bank";
      topBanks[2] = "Bank of Nova Scotia";
      topBanks[3] = "Bank of Montreal";
      topBanks[4] = "Canadian Imperial Bank of Commerce";
    break;
    
    case "China":
      topBanks[0] = "Industrial and Commercial Bank of China";
      topBanks[1] = "Bank of China";
      topBanks[2] = "Agricultural Bank of China";
      topBanks[3] = "China Construction Bank";
      topBanks[4] = "Bank of Communications";
    break;

    case "Australia":
      topBanks[0] = "National Australian Bank";
      topBanks[1] = "Westpac Bank";
      topBanks[2] = "Bank of Queensland";
      topBanks[3] = "Macquarie Bank";
      topBanks[4] = "Bendigo Bank";
    break;

    case "Barbados":
      topBanks[0] = "Republic Bank";
      topBanks[1] = "RBC Royal Bank";
      topBanks[2] = "First Caribbean International Bank";
      topBanks[3] = "Bank of Nova Scotia";
      topBanks[4] = "First Citizens Bank";
    break;

    case "Bolivia":
      topBanks[0] = "BISA Bank";
      topBanks[1] = "Bank of Credit of Bolivia";
      topBanks[2] = "Mercantil Santa Cruz Bank";
      topBanks[3] = "National Bank of Bolivia";
      topBanks[4] = "FIE Bank";
    break;

    case "Denmark":
      topBanks[0] = "Danske Bank";
      topBanks[1] = "Nykredit";
      topBanks[2] = "Jyske Bank";
      topBanks[3] = "Nordea";
      topBanks[4] = "DLR Kredit";
    break;

    case "Egypt":
      topBanks[0] = "Central Bank of Egypt";
      topBanks[1] = "Credit Agricole";
      topBanks[2] = "HSBC Bank Egypt";
      topBanks[3] = "Bank of Alexandria";
      topBanks[4] = "Qatar National Bank";
    break;

    case "Ecuador":
      topBanks[0] = "Banco Pichincha";
      topBanks[1] = "Banco de Guayaquil";
      topBanks[2] = "Produbanco";
      topBanks[3] = "Banco Promérica";
      topBanks[4] = "Citi Ecuador";
    break;

    case "Gambia":
      topBanks[0] = "First International Bank";
      topBanks[1] = "International Commercial Bank";
      topBanks[2] = "Guaranty Trust Bank Gambia";
      topBanks[3] = "Prime Bank";
      topBanks[4] = "Skye Bank Gambia";
    break;

    case "Georgia":
      topBanks[0] = "TBC Bank";
      topBanks[1] = "The Bank of Georgia";
      topBanks[2] = "Liberty Bank";
      topBanks[3] = "Basisbank";
      topBanks[4] = "VTB Bank - Georgia";
    break;

    case "Grenada":
      topBanks[0] = "Grenada State Bank";
      topBanks[1] = "Southern Security Federal Credit Union";
      topBanks[2] = "BankPlus";
      topBanks[3] = "Renasant Bank";
      topBanks[4] = "BancorpSouth";
    break;

    case "Jamaica":
      topBanks[0] = "National Commercial Bank";
      topBanks[1] = "Scotiabank Jamaica";
      topBanks[2] = "Sagicor Bank";
      topBanks[3] = "CIBC First Caribbean";
      topBanks[4] = "First Global Bank";
    break;

    case "Madagascar":
      topBanks[0] = "Central Bank of Madagascar";
      topBanks[1] = "Access Bank";
      topBanks[2] = "Bank of Africa";
      topBanks[3] = "Banque Industrielle et Commerciale de Madagascar";
      topBanks[4] = "Banque Malgache de L’ocean Indien";
    break;
  }

  // Returns the selection
  return topBanks;
}

// Function selects and displays the top five banks
function displayBanks(modalContent) {
  var listItem;

  // Gets and saves the array 
  var bankList = selectBanks(document.querySelector("#UserConvertCurrency").value);

  // Adds a title
  modalContent.innerHTML += "<h2>Top Banks:</h2>";

  // Creates the ordered list under the TopBanks Div
  var orderedList = document.createElement("OL");
  orderedList.setAttribute("id", "BankList");
  modalContent.appendChild(orderedList);

  // Creates the list items
  for(i = 0; i < bankList.length; i++) {
    listItem = document.createElement("LI");
    listItem.innerHTML = bankList[i];
    document.querySelector("#BankList").appendChild(listItem);
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
    case "BankList":
      displayBanks(modalContent);
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