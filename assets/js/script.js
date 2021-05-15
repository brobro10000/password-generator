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
        "\n\n Press 'Cancel' or 'OK' with empty prompt to Exit Generator")
      return initialPrompts(numberChoices, password)
    case 1:
      passwordLength()
      numberChoices = 0;
      break;
    case 2:
      isUpperCase()
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
    case isNaN(numberChoices):
    default:
      if (!isNaN(numberChoices)) {
        console.log(password)
      }
      else {
        numberChoices = prompt("Please enter a number" +
          "\nChoose another parameter to modify" +
          "\nSelect which parameters to modify:" +
          "\n1 :Length                       | " + password.passwordLength +
          "\n2 :Uppercase                 | " + password.hasUpperCase +
          "\n3 :Lowercase                 | " + password.hasLowerCase +
          "\n4 :Numbers                   | " + password.hasNumbers +
          "\n5 :Special Characters     | " + password.hasSpecial +
          "\n\n Press 'Cancel' or 'OK' with empty prompt to Exit Generator")
        return initialPrompts(numberChoices, password)
      }
  }
  console.log(password)
  return initialPrompts(numberChoices, password)
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
  if(answer == null || answer == "")
  {
    alert("You must answer Yes or No")
    return isUpperCase()
  }
  console.log(answer)
  answer = answer.trim();
  console.log(answer)
  answer = answer.toLowerCase();
  console.log(answer)
  if(answer === "yes"){
  password.hasUpperCase = true;
  }
  else if(answer === "no"){
    password.hasUpperCase = false;
  } else {
    alert("You must answer Yes or No")
    return isUpperCase()
  }
  return (password.hasUpperCase)
}

function isLowerCase(answer) {
  password.hasLowerCase = answer;

  return (password.hasLowerCase)
}

function isNumber(answer) {
  password.hasNumbers = answer;

  return (password.hasNumbers)
}

function isSpecial(answer) {
  password.hasSpecial = answer;

  return (password.hasSpecial)
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
