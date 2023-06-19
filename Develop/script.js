// Assignment Code
const characters = ["number","letter","character"];

var number = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var character = "!@#$%^&*()[]";

var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function generatePassword(){
  length = prompt("Please enter number of character you want for the password!");
  if(!length){
    alert("Please make a valid entry");
  } else if(length<8 || length > 20){
    length = prompt("the length of password must be from 8 to 20!");
  } else {
    number = confirm("Include numbers in your password?");
    specialCharacter = confirm("Include special characters in your new password?");
    uppercase = confirm("Include uppercase letter?");
    lowercase = confirm("include lowercase letters?");
  }
var finalPassword = ""
for (var i = 0; i < keyLength; i++) {
  let rng =[Math.floor(Math.random() * multiSelect.length)];
  finalPassword = finalPassword + multiSelect[rng];
}
return finalPassword;
};
  function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var button = document.getElementById("click");
function handleClick(){
  console.log('Click the Button!');
}
button.addEventListener('click',handleClick);