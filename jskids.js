//This file is a "playground" to work through and save my examples based on the book "JavaScript for Kids"

// && and ||

// Children under 13 and unaccompanied by an adult may not see PG-13 films.
// Code is needed to return a BOOLEAN value whether the child may see the movie. 

//if age < 12 && accompanied by adult = FALSE
//if age < 12 && accompanied by adult = TRUE
//if age >= 13 return TRUE (adult status unnecessary)
//Ternary operator may address the 12 and under...

let childAge = document.getElementById("child_age"),
    adultPresent = document.getElementById("adult_present"),
    checkButton = document.getElementById("check_button"),
    displayAnswer = document.getElementById("display_answer");

let checkChildAge = function checkChildAge(){
        if (childAge.value >= 13 || adultPresent.value.toLowerCase() == "yes")
        return true;
        else 
        return false;
    }

checkButton.addEventListener("click", function(){
    displayAnswer.innerHTML += checkChildAge() + "<br>";
});

// What I struggled with:
// 1. I understood the logic of what was needed quickly. However after a day 
// I simplified the necessary logic down to one OR SVGPatternElement. 
// 2. Didn't know how to get BOOLEAN value from an HTML checkbox. Googled but the 
// available answers were too complicated for me at this point. Next I tried radio buttons
// then dropdowns, all to no avail. Finally went with the worst option of textbox. This worked.
// 3. Though I completed the challenge it highlighed just how little I know. 