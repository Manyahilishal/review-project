// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======

const input = document.querySelector("input");
const button = document.querySelector("#passgen");
function GeneratePassword(length = 8) {
const randomPassword =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+=-";

  let password = "";
  for (let i = 0; i < length; ++i) {
    let at = Math.floor(Math.random() * (randomPassword.length + 1));
    password += randomPassword.charAt(at);
  }
  return password;
}
button.addEventListener("click", () => {
  input.value = GeneratePassword(8);
});