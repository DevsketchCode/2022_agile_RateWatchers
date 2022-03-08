//Dark-Light Mode

//user wants to switch to light mode.
function lightMode() {

    //Setting attributes using querySelector() to ensure all elements change as necessary. 
    document.querySelector('body').style.backgroundColor = "#3c3744";
    document.querySelector('main').style.backgroundColor = "#fbfff1";
    document.querySelector('main').style.color = "#3c3744";
    document.querySelector('h1').style.color = "#090c9b";
    document.querySelector('input[type="button"]').style.color = "#3c3744";
    document.querySelector('input[type="button"]').style.backgroundColor = "#fbfff1";
    document.querySelector('input[type="button"]').style.border = "3px solid #3066be";
    document.querySelector('input[type="submit"]').style.color = "#3c3744";
    document.querySelector('input[type="submit"]').style.backgroundColor = "#fbfff1";
    document.querySelector('input[type="submit"]').style.border = "3px solid #3066be";
    document.querySelector('footer a').style.color = "#000"; //Original CSS uses #fff, so I used the exact opposite of that.
    document.querySelector('footer').style.color = "#090c9b";

    document.querySelector('#btn-country-list').style.color = "#3c3744";
    document.querySelector('#btn-country-list').style.backgroundColor = "#d8d8df";
    document.querySelector('#btn-dark-light-mode').style.color = "#3c3744";
    document.querySelector('#btn-dark-light-mode').style.backgroundColor = "#d8d8df";    
    document.querySelector('#results-data-container-original').style.backgroundColor = "#d8d8df";
    document.querySelector('#results-data-container-converted').style.backgroundColor = "#d8d8df";      

    //Set the button to read Dark Mode.
    document.getElementById('btn-dark-light-mode').innerHTML = "Dark Mode";

}

//user wants to switch to dark mode. Dark mode is also default
function darkMode() {

    //Setting attributes using querySelector() to ensure all elements change as necessary. 
    //Reset to defaults. If left blank, the values from original CSS should pass in. 
    document.querySelector('body').style.backgroundColor = "";
    document.querySelector('main').style.backgroundColor = "";
    document.querySelector('main').style.color = "";
    document.querySelector('h1').style.color = "";
    document.querySelector('input[type="button"]').style.color = "";
    document.querySelector('input[type="button"]').style.backgroundColor = "";
    document.querySelector('input[type="button"]').style.border = "";
    document.querySelector('input[type="submit"]').style.color = "";
    document.querySelector('input[type="submit"]').style.backgroundColor = "";
    document.querySelector('input[type="submit"]').style.border = "";
    document.querySelector('footer a').style.color = "";
    document.querySelector('footer').style.color = "";
    
    document.querySelector('#btn-country-list').style.color = "#fbfff1";
    document.querySelector('#btn-country-list').style.backgroundColor = "#3066be";
    document.querySelector('#btn-dark-light-mode').style.color = "#fbfff1";
    document.querySelector('#btn-dark-light-mode').style.backgroundColor = "#3066be";
    document.querySelector('#results-data-container-original').style.backgroundColor = "#2f2b35";
    document.querySelector('#results-data-container-converted').style.backgroundColor = "#2f2b35";    

    //Set the button to read Light Mode.
    document.getElementById('btn-dark-light-mode').innerHTML = "Light Mode";
}

function configureLights() {

    switch (document.getElementById('btn-dark-light-mode').innerHTML) {
        case "Light Mode":
            lightMode();
            alert("Light Mode is selected.");
            break;
        
        case "Dark Mode":
            darkMode();
            alert("Dark Mode is selected.");
            break;
        default:
            break;
    }

}

//Click event listener
document.getElementById('btn-dark-light-mode').addEventListener("click", configureLights);


