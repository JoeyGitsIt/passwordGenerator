// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var numCharacters = window.prompt("Enter number of characters:");

  if (numCharacters >= 8 && numCharacters < 128) {
    // 0-25 is capital, 26-51 is lowercase, 52-63 are numbers, 64-100 special characters
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var strLower = "abcdefghijklmnopqrstuvwxyz";
    var strNum = "0123456789";
    var strSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var strPassConditions = "";
    var myPassword = "";

    var incLowercase = window.confirm("Include lowercase letters?");
    var incUppercase = window.confirm("Include uppercase letters?");
    var incNumbers = window.confirm("Include numeric characters?");
    var incSpecial = window.confirm("Include special characters?");

    if (incLowercase) {
      strPassConditions += strLower;
    }
    if (incUppercase) {
      strPassConditions += strUpper;
    }
    if (incNumbers) {
      strPassConditions += strNum;
    }
    if (incSpecial) {
      strPassConditions += strSpecial;
    }

    var meetsConditions = true;

    if (myPassword.includes(strLower) && incLowercase) {

    }



    while (!meetsConditions) {

      for (var i = 0; i <= numCharacters; i++) {
        index = Math.floor(Math.random() * strPassConditions.length);
        myPassword += strPassConditions[index];
        console.log(myPassword);
      }
    }
  } else {
    window.alert('Needs at least 8 characters or less than 128');
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---------------------------------------------------------------------
// if (window.confirm("Include lowercase?") == true ) {
//   window.alert("yes");
// } else {
//   return;
// }