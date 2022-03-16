//Ask user to confirm if they want to reset the form.
//Reset the entire form.
function resetForm() {
    document.getElementById("convertForm").reset();
}

//Hide fields.
function hideConvertTo() {
    //Get the div for the field where user selects a country, then hide in next line.
    var convertSettings = document.getElementById("input-convert-to-country-div");
    convertSettings.style.display = "none";
    // Hide Banks List button
    var banksButton = document.getElementById("new-currency-banks");
    banksButton.style.display = "none";
    // Hide Convert Button
    var convertButton = document.getElementById("btn-submit");
    convertButton.style.display = "none";
    // Hide Reset Button
    var resetButton = document.getElementById("btn-reset");
    resetButton.style.display = "none";
    // Hide Results
    var convertedResults = document.getElementById("converted-results");
    convertedResults.style.display = "none";
    // Hide Conversions Table
    var conversionTables = document.getElementById("conversion-tables");
    conversionTables.style.display = "none";
}

function startResetForm() {
    //Ask user if they want to reset the fields.
    if (confirm("All values will be reset to default. You will lose your entries that you input. Are you sure you want to reset the form?") === true) {
        hideConvertTo();
        resetForm();
    }
}