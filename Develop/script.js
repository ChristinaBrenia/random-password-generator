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

//Functions turns lowerCase to upperCase
var toUpper = function (x) {
  return x.toUpperCase();
};
//Creates uppercase from lowercase letters
upperCase = lowerCase.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function() {
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
});

function generatePassword () {
//prompts for password count
enter = parseInt(prompt("How many characters will your password be? Must be between 8 and 128"))
//if less than 8 or over 128 error or no enter error
if (!enter) {
  alert("Your password must have a value")

}else if (enter <= 7 || enter > 128) {
  enter = parseInt(prompt('You must enter a value between 8 and 128'));
}else {
//prompts for number, special character, uppercase, lowercase when user enters corrent value
confirmNumber = confirm('Will your password contain numbers?');
confirmCharacter = confirm('Will your password contain special characters?');
confirmUppercase = confirm('Will your password contain Uppercase letters?');
confirmLowercase = confirm('Will your password contain lowercase letters?');
};

//Didnt Confirm character, confirm number, or confirm uppercase, or confirm lowercase - did not meet requirement 
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert('You must choose a criteria to set a password')
}
};
//


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
