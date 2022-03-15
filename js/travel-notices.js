document.querySelector("#convertForm").addEventListener("submit", function(e) {
    //get id for the destination info paragraph
    //var destination_info = document.querySelector("#destination-information");

    console.log(document.querySelector("#UserConvertCurrency").value);

    switch(document.querySelector("#UserConvertCurrency").value) {
        
            case "USA":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: N/A</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: COVID-19, Usual CDC Recommendations</p>";
            break;
            
            case "Mexico":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 3</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Usual CDC Recommendations</p>";
            break;
            
            case "Canada":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: COVID-19, Usual CDC Recommendations</p>";                
            break;
            
            case "China":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 3</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: COVID-19, Usual CDC Recommendations</p>";                
            break;
        
            case "Australia":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: COVID-19, Usual CDC Recommendations</p>";                
            break;
        
            case "Barbados":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Usual CDC Recommendations</p>";                
            break;
        
            case "Bolivia":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Yellow Fever, Usual CDC Recommendations</p>";                
            break;
        
            case "Denmark":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Usual CDC Recommendations</p>";                
            break;
        
            case "Egypt":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Usual CDC Recommendations</p>";                
            break;
        
            case "Ecuador":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Usual CDC Recommendations</p>";                
            break;
        
            case "Gambia":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 2</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Yellow Fever if arriving from Yellow Fever zone, Usual CDC Recommendations</p>";                
            break;
        
            case "Georgia":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Hepatitis A and pre-exposure rabies are recommended, Usual CDC Recommendations</p>";                
            break;
        
            case "Grenada":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 4</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Yellow Fever if arriving from regions with endemic Yellow Fever, Usual CDC Recommendations</p>";                
            break;
        
            case "Jamaica":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 3</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Yellow Fever if arriving from regions with risk of Yellow Fever, Usual CDC Recommendations</p>";                
            break;
        
            case "Madagascar":
                document.getElementById("DestLevelAlert").innerHTML = "<p>State Department Alert Level: 3</p>";
                document.getElementById("DestVaccineReq").innerHTML = "<p>Vaccination Requirements: Yellow Fever if traveler has been in a yellow fever endemic country within 6 months of arrival, Usual CDC Recommendations</p>";                
            break;
        }
    
});