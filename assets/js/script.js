// Assignment code here
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
function initialPrompts(numberChoices, password) {
  switch (parseInt(numberChoices)) {
    case 0:
      numberChoices = prompt("Choose another parameter" + "\nSelect which parameters to modify:" +
        "\n1 :Length                       | " + password.passwordLength +
        "\n2 :Uppercase                 | " + password.hasUpperCase +
        "\n3 :Lowercase                 | " + password.hasLowerCase +
        "\n4 :Numbers                   | " + password.hasNumbers +
        "\n5 :Special Characters     | " + password.hasSpecial +
        "\n\n Type -1 to generate password or exit function")
      return initialPrompts(numberChoices, password)
    case 1:
      passwordLength()
      return resetRecall()
    case 2:
      isUpperCase()
      return resetRecall()
    case 3:
      isLowerCase()
      return resetRecall()
    case 4:
      isNumber()
      return resetRecall()
    case 5:
      isSpecial()
      return resetRecall()
    case !isNaN(numberChoices):
    default:
      if (numberChoices == -1) {
        var output = confirm("Press 'OK' to Generate Password or 'Cancel' to leave Password Generator")
        if (output) 
        {
          if (password.passwordLength == "Length not Selected") 
          {
            alert("Cannot Generate password, please select a password length")
            return resetRecall()
          }
          for (let i in password) 
          {
            if (!isNaN(password[i])) 
              {
                continue;
              } 
              else if(password[i] != true || password[i] != false)
              {
                alert("Cannot Generate Password, all parameters are required to be filled")
                return resetRecall()
              }
           }
           alert("Generating Password")
           return generatePassword(password)
        } else {
          alert("Exiting Generator")
        }
      } else {
        return resetRecall()
      }
  }
}




function passwordLength() {
  var answer = prompt("What is the length of the password?")
  answer = parseInt(answer)
  if (isNaN(answer)) {
    alert("Not a number" +
      "\nPassword must be between 8-128 characters")
    return passwordLength()
  }
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

function isUpperCase() {
  var answer = prompt("Are there uppercase characters?" +
    "\nEnter Yes or No")
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isUpperCase()
  }
  answer = answer.trim();
  answer = answer.toLowerCase();
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

function isLowerCase() {
  var answer = prompt("Are there lowercase characters?" +
    "\nEnter Yes or No")
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isLowerCase()
  }
  answer = answer.trim();
  answer = answer.toLowerCase();
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

function isNumber() {
  var answer = prompt("Are there numerical characters?" +
    "\nEnter Yes or No")
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isNumber()
  }
  answer = answer.trim();
  answer = answer.toLowerCase();
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

function isSpecial() {
  var answer = prompt("Are there special characters?" +
    "\nEnter Yes or No")
  if (answer == null || answer == "") {
    alert("You must answer Yes or No")
    return isSpecial()
  }
  answer = answer.trim();
  answer = answer.toLowerCase();
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
function resetRecall() {
  var numberChoices = 0
  initialPrompts(numberChoices, password)
}

function generatePassword(password) {

  for (let i in password) {
    if(password[i] == true)
    {
      if(i == 1)
      {
        
      }
    }
    console.log(password[i]);
  }
}
function getRandom (min, max)
    {
    return Math.floor(Math.random()* (max - min)) + min;
    }
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

// function generatePassword{

// }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// Add event listener to generate button

generateBtn.addEventListener("click", parameterPrompts);
