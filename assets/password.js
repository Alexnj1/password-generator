var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>']

function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
}

function generatePassword() {
    
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
  }

  var characterLowercaseResponse = window.confirm("Would you like lowercase characters?");
    if (characterLowercaseResponse) {
      console.log("include lowercase");
      characterLowercaseResponse = true;
    } else {
      console.log("no lowercase");
      characterLowercaseResponse = false;
    }

    var characterUppercaseResponse = window.confirm("Would you like uppercase characters?");
    
    if (characterUppercaseResponse) {
      console.log("include uppercase");
      characterUppercaseResponse = true;
    } else {
      console.log("no uppercase");
      characterUppercaseResponse = false;
    }

    var characterSpecialResponse = window.confirm("Would you like special characters?");
    if (characterSpecialResponse) {
      console.log("include special characters")
      characterSpecialResponse = true;
    } else {
      console.log("no special characters")
      characterSpecialResponse = false
    }

    var characterNumberResponse = window.confirm("Would you like numbers?");
    if (characterNumberResponse) {
      console.log("include special characters")
      characterNumberResponse = true;
    } else {
      console.log("no special characters")
      characterNumberResponse = false
    }


    if (!characterLowercaseResponse && !characterUppercaseResponse && !characterSpecialResponse && !characterNumberResponse) { 
      alert("You must choose AT LEAST one criterion, please try again");
      generatePassword();
    } else {
      alert("Success! Here is your new password.");
    }
    
debugger
    var newPassword = []

    // if (characterLowercaseResponse) {
        
    // }

    // for (i = 0; i < passwordLength; i++) {
    //     if (characterLowercaseResponse && characterUppercaseResponse) {
    //         newPassword.push(lowercase.concat(uppercase))
    //     }
    // }
    if (characterLowercaseResponse) {
        for (var i = 0; i < passwordLength; i++) {
        newPassword.push(lowercase[randomNumber(0,25)])
        }
    }
    return newPassword.join("")
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
