// Assignment Code
var generateBtn = document.querySelector("#generate");
var lenCrit = [];
for (var i = 8; i <= 128; i++) {
  lenCrit.push(i);
};

// var options = [YES, NO];
var YES = ["YES", "Y"];
var NO = ["NO", "N"];

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
function promptMe() {
    var YES = ["YES", "Y"];
    var NO = ["NO", "N"];
  // (First Prompt = Password Length from 8-128)
  do {
    var userLen = prompt("Select Password Length from 8 to 128");
    // If user presses Cancel
    if (userLen === null) {
      return;
    }
    // Response Must be between 8 and 128.
    if (lenCrit.includes(+userLen)) {
      alert("You've entered " + userLen + ".");
    } else {
      alert("Invalid Response, Try Again!");
    }
    // Redo the prompt if it is invalid.
  } while (!lenCrit.includes(+userLen));

  // Check Work
  console.log("Length " + userLen);

//   Prompt Questions Function.
  function promptQuest(x, y, z) {
    do {
        x = prompt(y + " (Yes or No)");
        // If user presses Cancel
        if (x === null) {
        return;
        }
        // Create the Answer to an upper case to eqaul the variable.
        x = x.toUpperCase();
        // Response will capitalize and Must be YES, Y, NO, N
        if (YES.includes(x)) {
        alert("You've Selected Yes.");
        } else if (NO.includes(x)) {
        alert("You've Selected No.");
        } else {
        alert("Invalid Response, Try Again!");
        }
        // Redo the prompt if it is invalid.
    } while (!YES.includes(x) && !NO.includes(x));
    // Change Upper Case to a Standard Yes or No
    if (YES.includes(x)) {
        x = "Yes"
    } else {
        x = "No"
    }
    // Check Work
    console.log(z + " " + x);
  };

  // Second Prompt (Selection of Character Criteria (Lowercase) Not sure how to make this work.
  var userLow = 
    promptQuest(userLow, "Include Lowercase Characters?", "Lower");
    
  var userUp;
    promptQuest(userUp, "Uppercase Characters?", "Upper");

  var userNum;
    promptQuest(userNum, "Numeric Characters?", "Numeric");

  var userSpec;
    promptQuest(userSpec, "Special Characters?", "Special");


  // Print Password Criteria
  alert(
    "Password Criteria"
    + "\nLength: " + userLen 
    + "\nLower Case: " + userLow 
    + "\nUpper Case: " + userUp 
    + "\nNumeric Values: " + userNum 
    + "\nSpecial Characters: " + userSpec
  );
  // END OF FUNCTION promptMe.
  }