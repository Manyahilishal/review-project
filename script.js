// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======
let genBtn =getElementYyId("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
    const password =document.querySelector('#password');
    const button = document.querySelector("button");
    let character ='01234567890abcdefghijklmnopqrctuvwxyz!@$%&*()_+<>?:"{}';
    let passwordLength =12;
    let passwordValue= '';
    for( let i =0; i< passwordLength; i++){
        let number = Math.floor(Math.random() * character.length);
        passwordValue += character.substring(number, number +1);
    }
    password.value = passwordValue;
}
button.addEventListener('click', createPassword);