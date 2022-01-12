alert ("Click Generate Passowrd to select your password criteria")

var passwordLength = generatePassword(passwordLength);

function generatePassword(passwordLength) {
  var passwordLength = window.prompt("Specify the character length of your password. Enter a number.");
  passwordLength = parseInt(passwordLength)
  if (passwordLength < 8) {
    alert("Your password length is too short");
    generatePassword();
  }
  else if (passwordLength > 128) {
    alert("Your password length is too long");
    generatePassword();
  }
  else if (isNaN(passwordLength)) {
   alert("You must enter a valid value.")
   generatePassword();
  }
  else {
    console.log('length of password is ' + passwordLength + ' characters.');
    charactersIncluded();
    
  }
  return passwordLength;
}



generatePassword();
  

function charactersIncluded() {
  alert('Please specify the character types to be included in your password');
  function lowercase(characterLowercaseResponse) {
    var characterLowercaseResponse = window.confirm("Would you like lowercase characters?");
    // characterResponse = characterResponse.toLowerCase
    if (characterLowercaseResponse) {
      console.log("include lowercase");
      characterLowercaseResponse = true;
    } else {
      console.log("no lowercase");
      characterLowercaseResponse = false;
    }
    uppercase();
  }


  function uppercase(characterUppercaseResponse) {
    var characterUppercaseResponse = window.confirm("Would you like uppercase characters?");
    // characterResponse = characterResponse.toLowerCas.e
    
    if (characterUppercaseResponse) {
      console.log("include uppercase");
      characterUppercaseResponse = true;
    } else {
      console.log("no uppercase");
      characterUppercaseResponse = false;
    }
    special();
  }

  function special(characterSpecialResponse) {
    var characterSpecialResponse = window.confirm("Would you like special characters?");
    // characterResponse = characterResponse.toLowerCas.e
    if (characterSpecialResponse) {
      console.log("include special characters")
      characterSpecialResponse = true;
    } else {
      console.log("no special characters")
      characterSpecialResponse = false
    }
  }

  if (lowercase() && uppercase() && special() == false) {
    alert("You must choose at least ONE criterion, please try again");
    charactersIncluded();
  }

  else {
    alert("Success! Here is your new password.");
    finalPassword();
  }

  var characterLowercaseResponse = lowercase(characterLowercaseResponse);
  var characterUppercaseResponse = uppercase(characterUppercaseResponse);
  var characterSpecialResponse = special(characterSpecialResponse);
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
