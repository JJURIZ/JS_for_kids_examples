//This file is a "playground" to work through and save my examples based on the book "JavaScript for Kids"

// && and ||

// Children under 13 and unaccompanied by an adult may not see PG-13 films.
// Code is needed to return a BOOLEAN value whether the child may see the movie. 

//if age < 12 && accompanied by adult = FALSE then return FALSE
//if age < 12 && accompanied by adult = TRUE then return TRUE
//if age >= 13 && unaccompanied by an adult return TRUE
//Ternary operator may address the 12 and under...

let childAge = document.getElementById("child_age"),
    adultPresent = document.getElementById("adult_present"),
    checkButton = document.getElementById("check_button"),
    displayAnswer = document.getElementById("display_answer");


let ageCheck = function ageCheck(){
    if (childAge.value < 13 && adultPresent.value)
    return true;
    else if (childAge.value >= 13 || adultPresent.value)
    return true;
    else 
    return false;
};


    checkButton.addEventListener("click", function(){
        displayAnswer.innerHTML += ageCheck() + "<br>";
    });

