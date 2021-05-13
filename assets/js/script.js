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
    case 1:
      prompt("What is the length of the password?")
      break;
    case 2:
      prompt("Are there uppercase characters?")
      break;
    case 3:
      prompt("Are there lowercase characters?")
      break;
    case 4:
      prompt("Are there numerical characters?")
    case 5:
      prompt("Are there special characters?")
      break;
    default:
      numberChoices = prompt("Please enter a number\n" +
      "Select which parameters to modify:" +
    "\n1:Length                       | " + password.passwordLength +
    "\n2:Uppercase                 | " + password.hasUpperCase +
    "\n3:Lowercase                 | " + password.hasLowerCase +
    "\n4:Numbers                   | " + password.hasNumbers +
    "\n5:Special Characters     | " + password.hasSpecial)
    initialPrompts(numberChoices,password)
  }

} 
function passwordLength(answer) {

  return(password.passwordLength)
}
function parameterPrompts() {
  password=initializedParameters()
  parameterModification = prompt("Select which parameters to modify:" +
    "\n1:Length                       | " + password.passwordLength +
    "\n2:Uppercase                 | " + password.hasUpperCase +
    "\n3:Lowercase                 | " + password.hasLowerCase +
    "\n4:Numbers                   | " + password.hasNumbers +
    "\n5:Special Characters     | " + password.hasSpecial);
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

//   passwordText.value = password;8


// }

// Add event listener to generate button
generateBtn.addEventListener("click", parameterPrompts);
