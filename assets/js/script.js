var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// created character variables
var special = "~!@#$%^&*()_+";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// created generate password function
function generatePassword() {

  // generated password variable
  var generatedPassword = "";
  // user selected variable
  var selected = "";

  // created password length variable
  var length = window.prompt("How many characters would you like your password to contain? (8-128 characters)");
    // created 'if' statement with 'or' operator so user must select integer between 8-128, otherwise error alert appears, then returns the user back to start
    if (length < 8 || length > 128) {
      window.alert("Select a value between 8-128.");
      return;
    }

  // user input variables for each character selected by the user along with 'if' statement with 'addition' operator to be/not to be included with user's selections
  var specialInput = window.confirm("Click OK to confirm including special characters.");
    if (specialInput) {
      selected += special
    }

  var numericInput = window.confirm("Click OK to confirm including numeric characters.");
    if (numericInput) {
      selected += numeric
    }

  var lowercaseInput = window.confirm("Click OK to confirm including lowercase characters.");
    if (lowercaseInput) {
      selected += lowercase
    }

  var uppercaseInput = window.confirm("Click OK to confirm including uppercase characters.");
    if (uppercaseInput) {
      selected += uppercase
    }

var password = "";

// math floor & math random commands randomizes all of user's selections
for (i = 0; i < length; i++) {
    generatedPassword = [Math.floor(Math.random() * selected.length)];
    password = password + selected[generatedPassword];
}

return password;

}