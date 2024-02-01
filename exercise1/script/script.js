//Task
// Create a page welcome message :
// Get the user name in the input field
// When the button is pressed add an event that get the user name and creates a welcome message on the page
// Add a check to ensure the length of the input is larger than 3 characters long

const output = document.querySelector(".output");
const userVal = document.querySelector('input[name="userName"]');
const btn = document.querySelector("button");

//solution1
// btn.onclick = () => {
//   if (userVal.value.length > 3) {
//     const message = `Welcome to the site ${userVal.value}`;
//     output.textContent = message;
//     userVal.style.display = "none";
//     btn.style.display = "none";
//   } else {
//     output.textContent = "Name length must be 3+ characters";
//     userVal.style.borderColor = "red";
//   }
// };

//solution2
function sayHelloToUser() {
  if (userVal.value.length > 3) {
    output.textContent = `Welcome to the site Mr/Mrs ${userVal.value}`;
    userVal.style.display = "none";
    btn.style.display = "none";
  } else {
    output.textContent = "Name length must me 3+ characters";
    userVal.style.borderColor = "red";
  }
}
