//Task
// Dynamically create page buttons that can be used to count totals separately.  Create a button to output all the result totals.  Only using JavaScript NO HTML elements
// Dynamic Page counters with JavaScript :
// Create a global object to set the number of buttons to be created
// Create a main page element that will contain all the new elements
// Create a function to create page elements, adding the element type to a parent object.  Include a parameter in the function for the inner content of the element.
// Loop through and create all the buttons, set a default total of 0 for each one.  On click create a function that will update and output the current value
// of this element total.  You can add styling to the buttons Add a class of “btn” to each new button so that they can be distinguished from the main total tally button.   Create a button that will output all the current button total results.
// When the tally button is clicked create a function that will select all the elements with a class of “btn” and loop through them.
// For each element with the class of “btn” create a new list item element, output that into an unordered list on the main page.  The list item contents should
// show the element total and the element textContent.  You can also select the style to match the button style property values.

const val = {
  num: 5,
};
const main = elemaker("div", document.body, "");
const output = elemaker("div", main, "");
for (let i = 0; i < val.num; i++) {
  const btn = elemaker("button", main, `Button #${i + 1}`);
  btn.total = 0;
  btn.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
  btn.style.color = "white";
  btn.classList.add("btn");
  btn.onclick = adder;
}
const output1 = elemaker("div", main, "");
const btnMain = elemaker("button", main, `All Totals`);
btnMain.onclick = () => {
  const btns = document.querySelectorAll(".btn");
  output1.innerHTML = "";
  const ul = elemaker("ul", output1, "");
  btns.forEach((ele) => {
    const li = elemaker("li", ul, `${ele.textContent} = ${ele.total}`);
    li.style.backgroundColor = ele.style.backgroundColor;
    li.style.color = ele.style.color;
  });
};

function elemaker(eleT, parent, html) {
  const ele = document.createElement(eleT);
  ele.innerHTML = html;
  return parent.appendChild(ele);
}

function adder(e) {
  this.total++;
  output.style.backgroundColor = this.style.backgroundColor;
  output.innerHTML = `${this.textContent} :(${this.total})`;
}
