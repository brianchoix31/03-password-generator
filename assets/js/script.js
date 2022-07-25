// Assignment Code
var generateBtn = document.querySelector("#generate");
// created character variables
var specialChar = "~!@#$%^&*()_+";
var numericChar = "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// created generate password function
function generatePassword() {
// created input variable for user's character length selection
  var lengthInput = window.prompt("How many characters would you like your password to contain? (8-128 characters)");
// created 'if' statement with 'or' operator so that user must select integer between 8-128, otherwise error alert appears, then returns the user back to start
    if (lengthInput < 8 || lengthInput > 128) {
      window.alert("Select a value between 8-128.");
      return;
    }
// created input variable for user's special option selection
  var specialCharInput = confirm("Click OK to confirm including special characters.");

    if (specialCharInput) {

    }
// created input variable for user's numeric option selection  
  var numericCharInput = confirm("Click OK to confirm including numeric characters.");

    if (numericCharInput) {
        
    }
// created input variable for user's lowercase option selection
  var lowercaseCharInput = confirm("Click OK to confirm including lowercase characters.");

    if (lowercaseCharInput) {
          
    }
// created input variable for user's uppercase option selection
  var uppercaseCharInput = confirm("Click OK to confirm including uppercase characters.");

    if (uppercaseCharInput) {
            
    }

  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);