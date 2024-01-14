// TO DO
// 1. gen button onclick, user is presented with a series of prompts for password criteria
// 2. user selects which criteria to include in the password
// criteria options:
// 3. length - user chooses length between 8-128 characters
// 4. character types - do(n't) include lowercase, uppercase, numeric, and/or special characters
// 5. at each criteria prompt answer, the user input should be validated and at least one character type should be selected
// 6. after all of the prompts are answered, generate a password that matches chosen criteria
// 7. after the password generates, it either displays in an alert or written into the page


var generateBtn = document.querySelector("#generate");
// gB var is the #generate id in the html

function generatePassword() {
    var promptsList = document.getElementById("prompts");
    promptsList.style.display='block';
}

function writePassword() {
    // creates a funct called writePassword
    var password = generatePassword();
    // "password" runs the generatePassword funct
    var passwordText = document.querySelector("#password");
    // "passwordText" is the #password location in the html

    passwordText.value = password;
    // (the pT variable's value is changed to the "password" variable)
    // the pT variable calls the funct generatePassword at #password in the html
    //      aka, prints something in the "your secure password" box

}

generateBtn.addEventListener("click", writePassword);
// gB var will do something:
// ("click" = when it's clicked)(wP = function that runs on the button click)




// when you click the "generate password" button, it opens the series of prompts


// prompt 1: length. empty input box, enter length between 8-128.


// prompt 2: checkboxes for character types: lowercase, uppercase, mumeric, and special


// generate password based off of inputs


// display password