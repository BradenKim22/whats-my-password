// Assignment Code
var generateBtn = document.querySelector("#generate");
var lenCrit = [];
for (var i = 8; i <= 128; i++) {
  lenCrit.push(i);
};
var lowCrit = [];

var upCrit;
var numCrit;
var specCrit;

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", promptMe, writePassword);

// First Prompt comes after clicking the generate button.
function promptMe(){
  // (First Prompt = Password Length from 8-128)
  var userLen = prompt("Select Password Length from 8 to 128");
  // Response Must be between 8 and 128.
  if (lenCrit.includes(+userLen)) {
    
  } else {
    window.alert("Invalid Response")
  };
  // Second Prompt (Selection of Character Criteria (Lowercase)
  var userLow = prompt("Include Lowercase Characters? (Yes or No)");
    // Second Prompt (Selection of Character Criteria (Uppercase)
  var userUp = prompt("Uppercase Characters? (Yes or No)");
    // Second Prompt (Selection of Character Criteria (Numeric)
  var userNum = prompt("Numeric Characters? (Yes or No)");
    // Second Prompt (Selection of Character Criteria (Special)
  var userSpec = prompt("Special Characters? (Yes or No)");

};