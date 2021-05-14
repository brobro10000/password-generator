// Assignment code here
function initializedParameters() {
  var password =
  {
    passwordLength: "Length not Selected",
    hasUpperCase: "Parameter not selected",
    hasLowerCase: "Parameter not selected",
    hasNumbers: "Parameter not selected",
    hasSpecial: "Parameter not selected"
  }
  return(password)
}

function initialPrompts(numberChoices,password) {
  switch(parseInt(numberChoices)){
    case 0:
      numberChoices = prompt("Choose another parameter\n" + "Select which parameters to modify:" +
      "\n1 :Length                       | " + password.passwordLength +
      "\n2 :Uppercase                 | " + password.hasUpperCase +
      "\n3 :Lowercase                 | " + password.hasLowerCase +
      "\n4 :Numbers                   | " + password.hasNumbers +
      "\n5 :Special Characters     | " + password.hasSpecial)
      initialPrompts(numberChoices,password)
    case 1:
      answer = prompt("What is the length of the password?")
      passwordLength(answer)
      numberChoices = 0;
      break;
    case 2:
      answer = prompt("Are there uppercase characters?")
      isUpperCase(answer)
      numberChoices = 0;
      break;
    case 3:
      answer = prompt("Are there lowercase characters?")
      isLowerCase(answer)
      numberChoices = 0;
      break;
    case 4:
      answer = prompt("Are there numerical characters?")
      isNumber(answer)
      numberChoices = 0;
      break;
    case 5:
      answer = prompt("Are there special characters?")
      isSpecial(answer)
      numberChoices = 0;
      break;
    default:
      numberChoices = prompt("Please enter a number\n" +
      "Select which parameters to modify:" +
    "\n1 :Length                       | " + password.passwordLength +
    "\n2 :Uppercase                 | " + password.hasUpperCase +
    "\n3 :Lowercase                 | " + password.hasLowerCase +
    "\n4 :Numbers                   | " + password.hasNumbers +
    "\n5 :Special Characters     | " + password.hasSpecial)
    initialPrompts(numberChoices,password)
  }
  console.log(password)
  initialPrompts(numberChoices,password)
} 

function passwordLength(answer) {
  answer = parseInt(answer)
  password.passwordLength = answer;

  return(password.passwordLength)
}

function isUpperCase(answer) {
  password.hasUpperCase = answer;

  return(password.hasUpperCase)
}

function isLowerCase(answer) {
  password.hasLowerCase = answer;

  return(password.hasLowerCase)
}

function isNumber(answer) {
  password.hasNumbers = answer;

  return(password.hasNumbers)
}

function isSpecial(answer) {
  password.hasSpecial = answer;

  return(password.hasSpecial)
}

function parameterPrompts() {
  password=initializedParameters()
  parameterModification = prompt("Select which parameters to modify:" +
    "\n1 :Length                       | " + password.passwordLength +
    "\n2 :Uppercase                 | " + password.hasUpperCase +
    "\n3 :Lowercase                 | " + password.hasLowerCase +
    "\n4 :Numbers                   | " + password.hasNumbers +
    "\n5 :Special Characters     | " + password.hasSpecial);
    initialPrompts(parameterModification,password)
    // password.passwordLength = prompt("What is the length of the password?")
    // password.passwordLength = parseInt(password.passwordLength)
    // while(isNaN(password.passwordLength)){
    //   password.passwordLength = prompt("Please enter a number")
    //   password.passwordLength = parseInt(password.passwordLength)
    // }
    // console.log(password.passwordLength);
  // password.hasUpperCase = prompt("Are there uppercase characters?")
  // password.hasLowerCase = prompt("Are there lowercase characters?")
  // password.hasNumbers = prompt("Are there numerical characters?")
  // password.hasSpecial = prompt("Are there special characters?")
  // parameterModification = prompt("Select which parameters to modify:" +
  //   "\n1:Length " + password.passwordLength +
  //   "\n2:Uppercase " + password.hasUpperCase +
  //   "\n3:Lowercase " + password.hasLowerCase +
  //   "\n4:Numbers " + password.hasNumbers +
  //   "\n5:Special Characters" + password.hasSpecial);

  return console.log(password);
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
