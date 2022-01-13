// Arrays for the function to choose characters from
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>']

// Function to generate random number
function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
}

// Function to generate password
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
    
    var newPassword = []

    
    // Loop for all 4 criteria
    

    if (characterLowercaseResponse && characterUppercaseResponse && characterSpecialResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.25){
                newPassword.push(lowercase[randomNumber(0,25)])
            }
            else if (Math.random() > 0.25 && Math.random() <= 0.50){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else if (Math.random() > 0.50 && Math.random() <= 0.75){
                newPassword.push(special[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
                
            
        }return newPassword.join("")
    }

    // Loops for 3 selected criteria

    if (characterLowercaseResponse && characterUppercaseResponse && characterSpecialResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.33){
                newPassword.push(lowercase[randomNumber(0,25)])
                
            }
            else if (Math.random() > 0.33 && Math.random() <= 0.66){
                newPassword.push(uppercase[randomNumber(0,25)])
                
            }
            else {
                newPassword.push(special[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }

    if (characterLowercaseResponse && characterSpecialResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++){
            if (Math.random() <= 0.33){
                newPassword.push(lowercase[randomNumber(0,25)])
            }
            else if (Math.random() > 0.33 && Math.random() <= 0.66){
                newPassword.push(special[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }

    if (characterLowercaseResponse && characterUppercaseResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.33){
                newPassword.push(lowercase[randomNumber(0,25)])
            }
            else if (Math.random() > 0.33 && Math.random() <= 0.66){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }

    if (characterUppercaseResponse && characterNumberResponse && characterSpecialResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.33){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else if (Math.random() > 0.33 && Math.random() <= 0.66){
                newPassword.push(numbers[randomNumber(0,25)])
            }
            else {
                newPassword.push(special[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }

    // Loops for two selected criteria
    
    if (characterUppercaseResponse && characterLowercaseResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(lowercase[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }
    
    if (characterUppercaseResponse && characterSpecialResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(special[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }  

    if (characterUppercaseResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(uppercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }  

    if (characterLowercaseResponse && characterSpecialResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(lowercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(special[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }  

    if (characterLowercaseResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(lowercase[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }  

    if (characterSpecialResponse && characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
            if (Math.random() <= 0.5){
                newPassword.push(special[randomNumber(0,25)])
            }
            else {
                newPassword.push(numbers[randomNumber(0,25)])
            }
        }return newPassword.join("")
    }  

    // Loops for single selected criterion

    if (characterLowercaseResponse) {
        for (var i = 0; i < passwordLength; i++) {
        newPassword.push(lowercase[randomNumber(0,25)])
        }
        return newPassword.join("")
    }
    

    if (characterUppercaseResponse) {
        for (var i = 0; i < passwordLength; i++) {
        newPassword.push(uppercase[randomNumber(0,25)])
        }
        return newPassword.join("")
    }

    if (characterSpecialResponse) {
        for (var i = 0; i < passwordLength; i++) {
        newPassword.push(special[randomNumber(0,25)])
        }
        return newPassword.join("")
    }

    if (characterNumberResponse) {
        for (var i = 0; i < passwordLength; i++) {
        newPassword.push(numbers[randomNumber(0,25)])
        }
        return newPassword.join("")
    }
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
