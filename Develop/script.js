// Assignment code here
// User input variables: 

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Look into ways of selecting symbols & Letters by assigned code instead of array
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

// Write password to the #password input
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
// makes button start the function
generateBtn.addEventListener('click', function() {
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
});

// starts function to generate password 
function generatePassword () {
//prompts for password count
enter = parseInt(prompt("How many characters will your password be? Must be between 8 and 128"))
//if less than 8 or over 128 error or no enter error
if (!enter) {
  alert("Your password must have a value")
//Something is quite right with this selector - look at another time
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
  choices = alert('You must choose a criteria to set a password - try again')
}


//if statements that use the users prompt answers 
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, upperCase);
}
//Else if for 3
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, upperCase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, lowerCase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(lowerCase, upperCase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(upperCase, lowerCase);
}
//Else if for 2 positive options
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);
}
else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(lowerCase);
}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(upperCase);
}
else if (confirmLowercase && confirmNumber) {
  choices = lowerCase.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
  choices = lowerCase.concat(upperCase);
}
else if (confirmNumber && confirmUppercase) {
    choices = number.concat(upperCase);
}
//Else if for 1 option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = lowerCase;
}
else if (confirmUppercase) {
  choices = upperCase;
}
//Function to generate password - re-look into this
var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
// This joins the password array and converts it to a string
//I need to re-look at this I do not completely understand
 var ps = password.join("");
 UserInput(ps);
 return ps;

};

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}



