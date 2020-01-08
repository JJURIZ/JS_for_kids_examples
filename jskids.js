//This file is a "playground" to work through and save my examples based on the book "JavaScript for Kids"

// && and ||

// Children under 13 and unaccompanied by an adult may not see PG-13 films.
// Code is needed to return a BOOLEAN value whether the child may see the movie. 

//if age < 12 && accompanied by adult = FALSE then return FALSE
//if age < 12 && accompanied by adult = TRUE then return TRUE
//if age >= 13 && unaccompanied by an adult return TRUE
//Ternary operator may address the 12 and under...

// let childAge = document.getElementById("child_age"),
//     adultPresent = document.getElementById("adult_present"),
//     permitButton = document.getElementById("permit_button");


// let ageCheck = function ageCheck(){
//     if (childAge < 12 && adultPresent || childAge >= 13) return true
//     else return false
// }

//     permitButton.addEventListener("click", function{

// });

let age = 12;
let parent = false;
let check = function check() {
    if (age < 13 && parent)
    return true;
    else if (age >= 13 || parent)
    return true;
    else 
    return false;
};



console.log(check());


// function newFunction() {
//     let check = function check(age, parent) 
//         if (age < 13 && parent)
//             = true;
//         return true;
//     };
//     if (age > 13 && parent)
//         = true;
//     return true;
//     ;
// }