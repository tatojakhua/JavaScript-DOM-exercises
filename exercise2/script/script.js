//Task
//Create 3 page counters using different functions, expression, declaration and arrow format.  Counters will all work independently as the
// value of the total is contained within the instance of the function object using this.
// Page counters with functions :
// Select all the page buttons
// Create a function expression that will increment the counter on button press
// Create a function expression with the arrow format that will track and increment the count on the page
// Create a function declaration that will track and increment the count on the page.

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const output = document.querySelector(".output");

//Function Expression
const adder2 = function () {
  if (!this.total) {
    this.total = 1;
  } else {
    this.total++;
  }
  output.textContent = `Total #2 : (${this.total})`;
};

//Arrow function
const adder3 = () => {
  if (!this.total) {
    this.total = 1;
  } else {
    this.total++;
  }
  output.textContent = `Total #3 : (${this.total})`;
};
//Call the functions
btn1.onclick = adder1;
btn2.onclick = adder2;
btn3.onclick = adder3;

///Function Declaration

function adder1() {
  if (!this.total) {
    this.total = 1;
  } else {
    this.total++;
  }
  output.textContent = `Total #1 : (${this.total})`;
}
