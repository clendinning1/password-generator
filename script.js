// TO DO
// 1. fix no ch type bug
// 2. deploy
// 3. readme

// some varries :3
// pwd
var password;
// pwd length
var length;
// character types
var lowerPrompt;
var upperPrompt;
var numPrompt;
var specPrompt;

// character types for validation message
var ll;
var upl;
var nums;
var spch;


var generateBtn = document.querySelector('#generate');
// links the button variable to its html location
generateBtn.addEventListener('click', writePassword);
// adds onclick functionality to the button;
// when clicked, the button runs the writePassword function

function writePassword() {
    generatePassword();
    // runs the generatePassword funct
    var passwordText = document.querySelector('#password');
    // locates the text box in the html

    passwordText.value = password;
    // prints the value of the 'password' variable in the 'your secure password' box
    // password = generatePassword(), so it will print the value of generatePassword(), i think??
}


// function from Programiz
function generateString(length) {
    // generates the password!
    const characters = lowerPrompt + upperPrompt + numPrompt + specPrompt;
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generatePassword() {
    // this function runs the prompts and figures out the parameters

    // length prompt:
    findLength();

    // determines settings for length & sends error msg at bad input:
    if (length >= 8 && length <= 128) {
        confirm('Your password will be ' + length + ' characters long.')
    } else {
        confirm('Please enter a valid number.');
        return;
    }

    // character type prompts & settings:
    findPrompts();

    // password!!:
    password = generateString(length);
}

function findLength() {
    // this is the length prompt/popup
    length = prompt('Enter the length of the password (between 8 and 128 characters):');
}

function findPrompts() {
    // these are the character type prompts/popups
    lowerPrompt = confirm('Include lowercase letters?');
    // if () determines the variable settings
    if (lowerPrompt === true) {
        lowerPrompt = 'abcdefghijklmnopqrstuvwxyz';
        ll = 'lowercase letters, ';
    } else {
        lowerPrompt = null;
        ll = 'no lowercase letters, '
    }

    upperPrompt = confirm('Include uppercase letters?');
    if (upperPrompt === true) {
        upperPrompt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        upl = 'uppercase letters, '
    } else {
        upperPrompt = null;
        upl = 'no uppercase letters, '
    }

    numPrompt = confirm('Include numbers?');
    if (numPrompt === true) {
        numPrompt = '0123456789';
        nums = 'numbers, '
    } else {
        numPrompt = null;
        nums = 'no numbers, '
    }

    specPrompt = confirm('Include special characters?');
    if (specPrompt === true) {
        specPrompt = '!@#$%^&*()';
        spch = ' special characters.'
    } else {
        specPrompt = null;
        spch = ' no special characters.'
    }

    if (lowerPrompt === null && upperPrompt === null && numPrompt === null && specPrompt === null) {
        confirm('Please enter at least one character type.')
        return;
    } else {
        confirm('Your password will include: ' + ll + upl + nums + 'and' + spch);
    }
}