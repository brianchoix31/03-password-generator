// Assignment Code
var generateBtn = document.querySelector("#generate");
// created character variables
var specialChar = "~!@#$%^&*()_+";
var numericChar = "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// created generate password function
function generatePassword() {

  prompt("How many characters would you like your password to contain? (8-128 characters)")

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