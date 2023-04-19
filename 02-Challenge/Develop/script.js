function generatePassword() {
  var optionNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  var optionUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var optionLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var optionSpecial = [" ", "!", "\"", "#", "$", " % ", "&", "'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var lengthQuestion = window.prompt("How many characters would you like password to be? min:8, Max:128");



  if ((lengthQuestion < 8) ||
    (lengthQuestion >= 129)) {
    window.alert("Password length must be at least 8 characters and cannot exceed 128 characters");
    return;
  }

  var numberQuestion = window.confirm("Do you wnat to include numbers?");
  var uppercaseQuestion = window.confirm("Do you wnat to include upper case letters?");
  var lowercaseQuestion = window.confirm("Do you wnat to include lower case letters?");
  var specialQuestion = window.confirm("Do you wnat to include special characters ?");

  var possiblecharacters = [];

  if (numberQuestion) {
    possiblecharacters = possiblecharacters.concat(optionNum);
  };
  if (uppercaseQuestion) {
    possiblecharacters = possiblecharacters.concat(optionUpper);
  };
  if (lowercaseQuestion) {
    possiblecharacters = possiblecharacters.concat(optionLower);
  };
  if (specialQuestion) {
    possiblecharacters = possiblecharacters.concat(optionSpecial);
  }

  var resultArray = [];

  for (let i = 0; i < lengthQuestion; i++) {
    var randomPossibleCharacters = possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)]
    resultArray.push(randomPossibleCharacters);
  }

  console.log(resultArray);
  var endResult = resultArray.join('');



  return endResult;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


