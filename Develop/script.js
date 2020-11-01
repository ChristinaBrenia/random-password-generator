// Assignment code here
// User input variables: 

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Special character arrays varaibles
character = ["!", "#", "$", "%", "&","'", "(", ")", "*", "+", ",","-",".", "/"];
//Number
number = [1,2,3,4,5,6,7,8,9];
//Lower Case 
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 


//prompts for password count
enter = parseInt(prompt("How many characters will your password be? Must be between 8 and 128"))


//prompts for number, special character, uppercase, lowercase
  confirmNumber = confirm('Will your password contain numbers?');
  confirmCharacter = confirm('Will your password contain special characters?');
  confirmUppercase = confirm('Will your password contain Uppercase letters?');
  confirmLowercase = confirm('Will your password contain lowercase letters?')

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
