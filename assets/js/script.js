// Assignment code here
//All parameters set to default by function, returns password
function initializedParameters() {
  var password =
  {
    passwordLength: "Length not Selected",
    hasUpperCase: "Parameter not Selected",
    hasLowerCase: "Parameter not Selected",
    hasNumbers: "Parameter not Selected",
    hasSpecial: "Parameter not Selected"
  }
  return (password)
}

/*Takes user input and password object to determine user input cases to correct for 
incorrect inputs and prohibited inputs*/
function initialPrompts(numberChoices, password) {
  switch (parseInt(numberChoices)) {
    //resets to 0 to determine next set of parameters
    case 0:
      numberChoices = prompt("Choose another parameter" + "\nSelect which parameters to modify:" +
        "\n1 :Length                       | " + password.passwordLength +
        "\n2 :Uppercase                 | " + password.hasUpperCase +
        "\n3 :Lowercase                 | " + password.hasLowerCase +
        "\n4 :Numbers                   | " + password.hasNumbers +
        "\n5 :Special Characters     | " + password.hasSpecial +
        "\n\n Type -1 to generate password or exit function")
      return initialPrompts(numberChoices, password)
    //if input 1 change password.passwordLength
    case 1:
      passwordLength()
      return resetRecall()
    //if input 2 change password.hasUpperCase to true/false
    case 2:
      isUpperCase()
      return resetRecall()
    //if input 3 change password.hasLowerCase to true/false
    case 3:
      isLowerCase()
      return resetRecall()
    //if input 4 change password.hasNumbers to true/false
    case 4:
      isNumber()
      return resetRecall()
    //if input 5 change password.hasSpecial to true/false
    case 5:
      isSpecial()
      return resetRecall()
    //default and not a number cases
    case !isNaN(numberChoices):
    default:
      //uses -1 as an exit variable 
      if (numberChoices == -1) {
        var output = confirm("Press 'OK' to Generate Password or 'Cancel' to leave Password Generator")
        //checks output for empty length parameters, reset/recalls if empty
        if (output) {
          if (password.passwordLength == "Length not Selected") {
            alert("Cannot Generate password, please select a password length")
            return resetRecall()
          }
          //Checks for empty parameters for password character types, all must be true false
          for (let i in password) {
            if (!isNaN(password[i])) {
              continue;
            }
            else if (password[i] != true && password[i] != false) {
              alert("Cannot Generate Password, all parameters are required to be filled")
              return resetRecall()
            }
          }
          alert("Generating Password") //Original generatePassword(password) location
          return
          //Exit generater if exit function and cancel  
        } else {
          alert("Exiting Generator")
        }
        //else keep calling for invalid entries  
      } else {
        return resetRecall()
      }
  }
}

//Determines password length between 8-128 with prompt
function passwordLength() {
  var answer = prompt("What is the length of the password?")
  answer = parseInt(answer)
  //checks if user inputted number 
  if (isNaN(answer)) {
    alert("Not a number" +
      "\nPassword must be between 8-128 characters")
    return passwordLength()
  }
  //checks parameter length min/max
  else if (answer > 128) {
    alert("Exceeded maximum password length" +
      "\n Password must be between 8-128 characters")
    return passwordLength()
  } else if (answer < 8) {
    alert("Did not meet the minimum password length" +
      "\n Password must be between 8-128 characters")
    return passwordLength()
  } else {
    password.passwordLength = answer;
  }
  return (password.passwordLength)
}

//Determines if user wants upper case in generated password
function isUpperCase() {
  var answer = prompt("Are there uppercase characters?" +
    "\nEnter Yes or No")
  //checks empty input
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isUpperCase()
  }
  //removes whitespace and denotes all to lowercase
  answer = answer.trim();
  answer = answer.toLowerCase();
  //assigns true/false
  if (answer === "yes") {
    password.hasUpperCase = true;
  }
  else if (answer === "no") {
    password.hasUpperCase = false;
  } else {
    alert("You must answer Yes or No")
    return isUpperCase()
  }
  return (password.hasUpperCase)
}

//Determines if user wants lower case in generated password
function isLowerCase() {
  var answer = prompt("Are there lowercase characters?" +
    "\nEnter Yes or No")
  //checks empty input
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isLowerCase()
  }
  //removes whitespace and denotes all to lowercase
  answer = answer.trim();
  answer = answer.toLowerCase();
  //assigns true/false
  if (answer === "yes") {
    password.hasLowerCase = true;
  }
  else if (answer === "no") {
    password.hasLowerCase = false;
  } else {
    alert("You must answer Yes or No")
    return isLowerCase()
  }
  return (password.hasLowerCase)
}

//Determines if user wants numbers in generated password
function isNumber() {
  var answer = prompt("Are there numerical characters?" +
    "\nEnter Yes or No")
  //checks empty input
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isNumber()
  }
  //removes whitespace and denotes all to lowercase
  answer = answer.trim();
  answer = answer.toLowerCase();
  //assigns true/false
  if (answer === "yes") {
    password.hasNumbers = true;
  }
  else if (answer === "no") {
    password.hasNumbers = false;
  } else {
    alert("You must answer Yes or No")
    return isNumber()
  }
  return (password.hasNumbers)
}

//Determines if user wants special characters in generated password
function isSpecial() {
  var answer = prompt("Are there special characters?" +
    "\nEnter Yes or No")
  //checks empty input
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isSpecial()
  }
  //removes whitespace and denotes all to lowercase
  answer = answer.trim();
  answer = answer.toLowerCase();
  //assigns true/false
  if (answer === "yes") {
    password.hasSpecial = true;
  }
  else if (answer === "no") {
    password.hasSpecial = false;
  } else {
    alert("You must answer Yes or No")
    return isSpecial()
  }
  return (password.hasSpecial)
}

//function to reset numberChoices to 0 and recall initial prompts
function resetRecall() {
  var numberChoices = 0
  initialPrompts(numberChoices, password)
}

//entire password generation logic
function generatePassword(password) {
  var randomPassword = [{ character: "", key: 0 }]
  var randomPasswordArray = [];
  var finalArray = []
  var isTrue = 0

  //determines the amount of isTrue parameters
  for (let i in password) {
    if (password[i] == true)
      isTrue++;
  }
  //if there are no isTrue, reset/recall
  if (isTrue == 0) {
    alert("All parameters cannot be false")
    return resetRecall()
  }

  //determines which characters to populate randomPassword array object with number key
  //arrays lengths is isTrue*password.passwordLength between 8 for 1 parameter 8 length to 512 for 4 parameters 128 length
  for (var j = 0; j < password.passwordLength; j++) {
    if (password.hasUpperCase == true) {
      randomPassword.push({ character: String.fromCharCode(getRandom(65, 90)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
    }
    if (password.hasLowerCase == true) {
      randomPassword.push({ character: String.fromCharCode(getRandom(97, 122)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
    }
    if (password.hasNumbers == true) {
      randomPassword.push({ character: String.fromCharCode(getRandom(48, 57)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
    }
    if (password.hasSpecial == true) {
      var randomSpecial = getRandom(1, 4) % 5
      if (randomSpecial == 1) {
        randomPassword.push({ character: String.fromCharCode(getRandom(33, 47)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
      } else if (randomSpecial == 2) {
        randomPassword.push({ character: String.fromCharCode(getRandom(58, 64)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
      } else if (randomSpecial == 3) {
        randomPassword.push({ character: String.fromCharCode(getRandom(91, 96)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
      } else if (randomSpecial == 4) {
        randomPassword.push({ character: String.fromCharCode(getRandom(123, 126)), key: randomPasswordArray.push(getRandom(1, password.passwordLength)) })
      }
    }
  }

  //once array is populated by users chosen parameters, the amount of true, 
  //the array and final array are passed which populates finalArray with password
  evenlyDistributed(isTrue, randomPassword, finalArray)
  //final array password are joined into returnedPassword function
  var returnedPassword = finalArray.join('');
  //console logs the password, length and password object
  console.log(returnedPassword)
  console.log(returnedPassword.length)
  console.log(password)
  //returns the returnedPassword
  return returnedPassword
}

//To ensure even distribution of every variable, each user defined variable must occur in final password
function evenlyDistributed(possibilities, randomPassword, finalArray) {
  //starts by determining count
  var count1 = 0
  var count2 = 0
  var count3 = 0
  var count4 = 0
  //if 1 parameter, return password with 1 variable
  if (possibilities == 1)
    for (var i = 1; i < randomPassword.length; i++)
      finalArray.push(randomPassword[i].character.toString())
  //if 2 parameters, return password with 2 variable
  if (possibilities == 2) {
    for (var i = 1; i < randomPassword.length; i += possibilities) {
      var x = getRandom(1, possibilities)
      if (count1 == 0)
        x = 1
      if (count2 == 0)
        x = 2

      while (count1 > count2 && x == 1)
        x = getRandom(1, possibilities)
      while (count2 > count1 && x == 2)
        x = getRandom(1, possibilities)

      if (x == 1) {
        finalArray.push(randomPassword[i].character.toString())
        count1++
      } else {
        finalArray.push(randomPassword[i + (possibilities - 1)].character.toString())
        count2++
      }
    }
  }
  //if 3 parameters, return password with 3 variable
  if (possibilities == 3) {
    for (var i = 1; i < randomPassword.length; i += possibilities) {
      var x = getRandom(1, possibilities)
      if (count1 == 0)
        x = 1
      if (count2 == 0)
        x = 2
      if (count3 == 0)
        x = 3

      while (count1 > count2 && count1 > count3 && x == 1)
        x = getRandom(1, possibilities)
      while (count2 > count1 && count2 > count3 && x == 2)
        x = getRandom(1, possibilities)
      while (count3 > count1 && count3 > count2 && x == 3)
        x = getRandom(1, possibilities)

      if (x == 1) {
        finalArray.push(randomPassword[i].character.toString())
        count1++
      } else if (x == 2) {
        finalArray.push(randomPassword[i + (possibilities - 1)].character.toString())
        count2++
      } else if (x == 3) {
        finalArray.push(randomPassword[i + (possibilities - 2)].character.toString())
        count3++
      }
    }
  }
  //if 4 parameters, return password with 4 variable
  if (possibilities == 4) {
    for (var i = 1; i < randomPassword.length; i += possibilities) {
      var x = getRandom(1, possibilities)
      if (count1 == 0)
        x = 1
      if (count2 == 0)
        x = 2
      if (count3 == 0)
        x = 3
      if (count4 == 0)
        x = 4

      while (count1 > count2 && count1 > count3 && count1 > count4 && x == 1)
        x = getRandom(1, possibilities)
      while (count2 > count1 && count2 > count3 && count2 > count4 && x == 2)
        x = getRandom(1, possibilities)
      while (count3 > count1 && count3 > count2 && count3 > count4 && x == 3)
        x = getRandom(1, possibilities)
      while (count4 > count1 && count4 > count2 && count4 > count3 && x == 4)
        x = getRandom(1, possibilities)

      if (x == 1) {
        finalArray.push(randomPassword[i].character.toString())
        count1++
      } else if (x == 2) {
        finalArray.push(randomPassword[i + (possibilities - 1)].character.toString())
        count2++
      } else if (x == 3) {
        finalArray.push(randomPassword[i + (possibilities - 2)].character.toString())
        count3++
      } else if (x == 4) {
        finalArray.push(randomPassword[i + (possibilities - 3)].character.toString())
        count4++
      }
    }
  }
}

//Random number generator inclusive
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//initial prompts
function parameterPrompts() {
  password = initializedParameters()
  parameterModification = prompt("Select which parameters to modify:" +
    "\n1 :Length                       | " + password.passwordLength +
    "\n2 :Uppercase                 | " + password.hasUpperCase +
    "\n3 :Lowercase                 | " + password.hasLowerCase +
    "\n4 :Numbers                   | " + password.hasNumbers +
    "\n5 :Special Characters     | " + password.hasSpecial +
    "\n\n Press 'Cancel' or 'OK' with empty prompt to Exit Generator");
  if (parameterModification === null) {
  }
  else {
    return initialPrompts(parameterModification, password)
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  parameterPrompts()
  var password1 = generatePassword(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
