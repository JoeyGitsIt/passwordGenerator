
var generateBtn = document.querySelector("#generate");


function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var numCharacters = window.prompt("Enter number of characters:");

  if (numCharacters >= 8 && numCharacters <= 128) {

    // variables containing the acceptable characters for the password according to the users preferences
    var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var strLower = "abcdefghijklmnopqrstuvwxyz";
    var strNumbers = "0123456789";
    var strSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // declares the variable for all possible characters in the password
    var strPassConditions = "";
    // declares the variable which will contain the generated passwords character
    var myPassword = "";

    // generates windows where the user will determine the criteria of the password
    var incLowercase = window.confirm("Include lowercase letters?");
    var incUppercase = window.confirm("Include uppercase letters?");
    var incNumbers = window.confirm("Include numeric characters?");
    var incSpecial = window.confirm("Include special characters?");


    // The following 4 if statements take the user accepted conditions of the password and create one character to meet said condition
    if (incLowercase) {
      strPassConditions += strLower;
      index = Math.floor(Math.random() * strLower.length);
      myPassword += strLower[index];
    }
    if (incUppercase) {
      strPassConditions += strUpper;
      index = Math.floor(Math.random() * strUpper.length);
      myPassword += strUpper[index];
    }
    if (incNumbers) {
      strPassConditions += strNumbers;
      index = Math.floor(Math.random() * strNumbers.length);
      myPassword += strNumbers[index];
    }
    if (incSpecial) {
      strPassConditions += strSpecial;
      index = Math.floor(Math.random() * strSpecial.length);
      myPassword += strSpecial[index];
    }

    // variable and for loop for generating the rest of the password

    numRemaining = numCharacters-myPassword.length;

    for (var i = 0; i < numRemaining; i++) {
      index = Math.floor(Math.random() * strPassConditions.length);
      myPassword += strPassConditions[index];
    }

    // Takes the myPassword variable and converts it to an array, randomizes the array, then converts the array back to the string
    myPassword = myPassword.split("").sort(()=>.5 - Math.random()).join("");

    // else statement that sets the condition that the password must be between 8-128 characters
  } else {
    window.alert('Needs between 8 and 128 characters');
  }

  passwordText.value = myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);