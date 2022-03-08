//Ask user to confirm if they want to reset the form.
//Reset the entire form.
function resetForm() {
    document.getElementById("convertForm").reset();
    alert("Form is reset");
}

//Hide fields.
function hideConvertTo() {
    //Get the div for the field where user selects a country, then hide in next line.
    var convertSettings = document.getElementById("input-convert-to-country-div");
    convertSettings.style.display = "none";
}

function startResetForm() {
    //Ask user if they want to reset the fields.
    if (confirm("All values will be reset to default. You will lose your entries that you input. Are you sure you want to reset the form?") === true) {
        hideConvertTo();
        resetForm();
    } else {
        alert("You pressed Cancel.");
    }
}