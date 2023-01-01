// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added the numbers from 8 to 128.
var lenCrit = [];
for (var i = 8; i <= 128; i++) {
  lenCrit.push(i);
};
// Added lower case letters to variable.
var lowCrit = "abcdefghijklmnopqrstuvwxyz";
// Added upper case letters.
var upCrit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Added numeric values
var numCrit = "1234567890";
// Add special Characters
var specCrit = " !”#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Options for the prompts.
var YES = ["YES", "Y"];
var NO = ["NO", "N"];

function generatePassword() {
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
      alert("Invalid Response");
    }
    // Redo the prompt if it is invalid.
  } while (!lenCrit.includes(+userLen));
  // Just change the value to a number .. just in case?? but it still works without this number.
  userLen = Number(userLen);

  // Check Work
  console.log("Length " + userLen);

  // Second Prompt (Selection of Character Criteria (Lowercase)
  do {
    var userLow = prompt("Include Lowercase Characters? (Yes or No)");
    // If user presses Cancel
    if (userLow === null) {
      return;
    }
    // Create the Answer to an upper case to eqaul the variable.
    userLow = userLow.toUpperCase();
    // Response will capitalize and Must be YES, Y, NO, N
    if (YES.includes(userLow)) {
      alert("You've Selected Yes.");
    } else if (NO.includes(userLow)) {
      alert("You've Selected No.");
    } else {
      alert("Invalid Response");
    }
    // Redo the prompt if it is invalid.
  } while (!YES.includes(userLow) && !NO.includes(userLow));
  // Change Upper Case to a Standard Yes or No
  if (YES.includes(userLow)) {
    userLow = "Yes"
  } else {
    userLow = "No"
  }

  // Check Work
  console.log("LowerCase " +userLow);

  // Third Prompt (Selection of Character Criteria (Uppercase)
  do {
    var userUp = prompt("Uppercase Characters? (Yes or No)");
    // Cancel Button
    if (userUp === null) {
      return;
    }
    // Create the Answer to an upper case to eqaul the variable.
    userUp = userUp.toUpperCase();
    // Response will capitalize and Must be YES, Y, NO, N
    if (YES.includes(userUp)) {
      alert("You've Selected Yes.");
    } else if (NO.includes(userUp)) {
      alert("You've Selected No.");
    } else {
      alert("Invalid Response");
    }
    // Redo the prompt if it is invalid.
  } while (!YES.includes(userUp) && !NO.includes(userUp));
  // Change Upper Case to a Standard Yes or No
  if (YES.includes(userUp)) {
    userUp = "Yes"
  } else {
    userUp = "No"
  }

  // Check Work
  console.log("UpperCase " + userUp);

  // Fourth Prompt (Selection of Character Criteria (Numeric)
  do {
    var userNum = prompt("Numeric Characters? (Yes or No)");
    // If user presses Cancel
    if (userNum === null) {
      return;
    }
    // Create the Answer to an upper case to eqaul the variable.
    userNum = userNum.toUpperCase();
    // Response will capitalize and Must be YES, Y, NO, N
    if (YES.includes(userNum)) {
      alert("You've Selected Yes.");
    } else if (NO.includes(userNum)) {
      alert("You've Selected No.");
    } else {
      alert("Invalid Response");
    }
    // Redo the prompt if it is invalid.
  } while (!YES.includes(userNum) && !NO.includes(userNum));
  // Change Upper Case to a Standard Yes or No
  if (YES.includes(userNum)) {
    userNum = "Yes"
  } else {
    userNum = "No"
  }

  // Check Work
  console.log("Numeric " + userNum);
  
  // Fifth Prompt (Selection of Character Criteria (Special)
  do { 
    var userSpec = prompt("Special Characters? (Yes or No)");
    // If user presses Cancel
    if (userSpec === null) {
      return;
    }
    // Create the Answer to an upper case to eqaul the variable.
    userSpec = userSpec.toUpperCase();
    // Response will capitalize and Must be YES, Y, NO, N
    if (YES.includes(userSpec)) {
      alert("You've Selected Yes.");
    } else if (NO.includes(userSpec)) {
      alert("You've Selected No.");
    } else {
      alert("Invalid Response");
    }
    // Redo the prompt if it is invalid.
  } while (!YES.includes(userSpec) && !NO.includes(userSpec));
  // Change Upper Case to a Standard Yes or No
  if (YES.includes(userSpec)) {
    userSpec = "Yes"
  } else {
    userSpec = "No"
  }

  // Check Work
  console.log("Special Characters " + userSpec);



  /*
  As I am new to this (this being my first experience with coding in this course..)
  I was trying to make the above userLow thorugh userSpec in sort of it's own function,
  nested in this function, so I didn't have to reapeat it so many times. I tried using
  function(x,y,z) n such but couldn't figure it out). Please leave me a comment if it
  is something not to hard to do... I've tried alot but this is what I got to work for me.
  Thank You!
  */



  // Print Password Criteria
  window.alert(
    "Password Criteria"
    + "\nLength: " + userLen 
    + "\nLower Case: " + userLow 
    + "\nUpper Case: " + userUp 
    + "\nNumeric Values: " + userNum 
    + "\nSpecial Characters: " + userSpec
  );

  // Make a String for the Password Criteria
  var passwordCriteria = "";

  // Using the choices above make sure to include the right selected Criteria for the password.
  // Did the user select Lowercase
  if (userLow === "Yes") {
    passwordCriteria += lowCrit;
  } else {
    console.log("User selected No Lowercase")
  };
  // Did the user select Uppercase
  if (userUp === "Yes") {
    passwordCriteria += upCrit;
  } else {
    console.log("User selected No Uppercase")
  };
  // Did the user select Numeric
  if (userNum === "Yes") {
    passwordCriteria += numCrit;
  } else {
    console.log("User selected No Numeric Values")
  };
  // Did the user select Special
  if (userSpec === "Yes") {
    passwordCriteria += specCrit;
  } else {
    console.log("User selected No Special Characters")
  };

  // Create the Random Password Function using the Criteria Now
  // Make a String for password.
  var password ="";
  // Make the User Length
  for (var i = 0; i <= userLen; i++) {
    // Make a random number inside the length of the Total Criteria Array?
    var ranNum = Math.floor(Math.random() 
    * passwordCriteria.length);
    // Make the password string add the random characters from the total criteria until it has reached the length.
    password += passwordCriteria.substring(ranNum, ranNum +1);
  }
  // Define the password. Don't put it in the for loop or it will only break for one character in the password.
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // password = "Just Kidding, I don't actually know how to freaking make this work.. lol";
  // But now I got it to work and the Acceptance Criteria has been completed.
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);