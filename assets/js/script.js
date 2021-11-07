// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword() {
  var includedCharacters = [];
  var generatedPassword = "";

  // 1. Prompt the user for the password criteria
  var userInput = window.prompt("How many characters would you like your password to contain?");
  
  //    a. Password length between 8 and 128
  if (userInput >= 8 && userInput <= 128) {

    //    b. Lowercase, Uppercase, Numbers, Special Characters
    if (confirm("Would you like your password to contain lower case characters?")) {
      Array.prototype.push.apply(includedCharacters, lowerCase);
    }

    if (confirm("Would you like your password to contain upper case characters?")) {
      Array.prototype.push.apply(includedCharacters, upperCase);
    }

    if (confirm("Would you like your password to contain numbers?")) {
      Array.prototype.push.apply(includedCharacters, numbers);
    }

    if (confirm("Would you like your password to contain any special characters?")) {
      Array.prototype.push.apply(includedCharacters, specialCharacters);
    }

    console.log(includedCharacters)


  } else {
    console.log("NOPE!");
    alert ("Ypur password must be between 8 and 128 characters in length.")
  }

  // 2. Validate the input
  // 3. Generate password based on criteria
  
  // 4. Display password to the page
  return "Generated password will go here!"
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
