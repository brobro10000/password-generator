// Assignment code here
function parameterPrompts() {
  var password =
  {
    passwordLength: "Length not Selected",
    hasUpperCase: "Parameter not selected",
    hasLowerCase: "Parameter not selected",
    hasNumbers: "Parameter not selected",
    hasSpecial: "Parameter not selected"

  }
  prompt("Select which parameters to modify:" +
    "\n1:Length                       | " + password.passwordLength +
    "\n2:Uppercase                 | " + password.hasUpperCase +
    "\n3:Lowercase                 | " + password.hasLowerCase +
    "\n4:Numbers                   | " + password.hasNumbers +
    "\n5:Special Characters     | " + password.hasSpecial);
  // password.passwordLength = prompt("What is the length of the password?")
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

  console.log(parameterModification)
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
parameterPrompts();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
