// TO DO
// 1. gen button onclick, user is presented with a series of prompts for password criteria
// 2. user selects which criteria to include in the password
// criteria options:
// 3. length - user chooses length between 8-128 characters
// 4. character types - do(n't) include lowercase, uppercase, numeric, and/or special characters
// 5. at each criteria prompt answer, the user input should be validated and at least one character type should be selected
// 6. after all of the prompts are answered, generate a password that matches chosen criteria
// 7. after the password generates, it either displays in an alert or written into the page


// ok so we need the pieces that respond to you typing in info & checking boxes,
// then we need the piece that actually generates the password based on what you
// inputted.


var generateBtn = document.querySelector("#generate");
// links the button variable to its html location
generateBtn.addEventListener("click", writePassword);
// adds onclick functionality to the button;
// when clicked, the button runs the writePassword function

function writePassword() {
    var password = generatePassword();
    // runs the generatePassword funct
    var passwordText = document.querySelector("#password");
    // locates the text box in the html

    passwordText.value = password;
    // prints the value of the "password" variable in the "your secure password" box
    // password = generatePassword(), so it will print the value of generatePassword()

}

// some varries
var length
var lowerPrompt
var upperPrompt
var numPrompt
var specPrompt

// generate password based off of inputs
// funct from Programiz
function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generatePassword() {
    // this is what runs the prompts and figures out the parameters
    findLength();
    findPrompts();

    if (upperPrompt === true) {
        console.log("please, god");
    }

    console.log(generateString(length));
}

function findLength() {
    // this is the length popup
    length = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (length >= 8 && length <= 128) {
    } else {
        generatePassword();
    }
}

function findPrompts() {
    // these are the character type popups
    lowerPrompt = confirm("Include lowercase letters?");
    upperPrompt = confirm("Include uppercase letters?");
    numPrompt = confirm("Include numbers?");
    specPrompt = confirm("Include special characters?");

}