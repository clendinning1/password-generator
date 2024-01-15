// TO DO
// 5. at each criteria prompt answer, the user input should be validated and at least one character type should be selected
// 6. after all of the prompts are answered, generate a password that matches chosen criteria
// 7. after the password generates, it either displays in an alert or written into the page


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

// some varries :3
var length
var lowerPrompt
var upperPrompt
var numPrompt
var specPrompt


// function from Programiz
function generateString(length) {
    // generates the password!
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generatePassword() {
    // this function runs the prompts and figures out the parameters

    // prompts:
    findLength();
    findPrompts();

    // 
    if (lowerPrompt === true) {
        console.log("please, god");
    } else {
        console.log("yippee!");
    }

    // password!!:
    console.log(generateString(length));
    // figure out how to put it in da box
}

function findLength() {
    // this is the length prompt/popup
    length = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (length >= 8 && length <= 128) {
    } else {
        generatePassword();
    }
}

function findPrompts() {
    // these are the character type prompts/popups
    lowerPrompt = confirm("Include lowercase letters?");
    upperPrompt = confirm("Include uppercase letters?");
    numPrompt = confirm("Include numbers?");
    specPrompt = confirm("Include special characters?");
}