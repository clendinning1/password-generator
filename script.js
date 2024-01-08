// TO DO
// 1. gen button onclick, user is presented with a series of prompts for password criteria
// 2. user selects which criteria to include in the password
// criteria options:
// 3. length - user chooses length between 8-128 characters
// 4. character types - do(n't) include lowercase, uppercase, numeric, and/or special characters
// 5. at each criteria prompt answer, the user input should be validated and at least one character type should be selected
// 6. after all of the prompts are answered, generate a password that matches chosen criteria
// 7. after the password generates, it either displays in an alert or written into the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);