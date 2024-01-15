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







// prompt 1: length. empty input box, enter length between 8-128.
var lengthBox = document.getElementById("length");


// if [number entered] === 8-128, then var pwdLength = [number entered]
// else [feed error message]
// if (lengthBox >= 8 || lengthBox <= 128) {
//     var pwdLength = lengthBox;
// } else {
//    console.log("gimme a better number");
// }




// prompt function 
// Prompt for password criteria
// var length = prompt("Enter the length of the password (between 8 and 128 characters):");





// prompt 2: checkboxes for character types: lowercase, uppercase, mumeric, and special
var lowerBox = document.getElementById("lowercase");
var upperBox = document.getElementById("uppercase");
var numBox = document.getElementById("numeric");
var specBox = document.getElementById("special");






// generate password based off of inputs

function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// console.log(generateString(pwdLength));

// display password

// ok so we need the pieces that respond to you typing in info & checking boxes,
// then we need the piece that actually generates the password based on what you
// inputted.