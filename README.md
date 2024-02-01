# JavaScript DOM Exercises

A collection of exercises to practice Vanilla JavaScript DOM manipulation.

## Exercise 1: Page Welcome Message

Create a page welcome message:

- Get the user name from the input field.
- When the button is pressed, add an event that gets the user name and creates a welcome message on the page.
- Add a check to ensure the length of the input is larger than 3 characters long.

## Exercise 2: Page Counters

Create three page counters using different functions:

- Function expression
- Arrow function
- Function declaration

The counters work independently, and the value of the total is contained within the instance of the function object using `this`.

## Exercise 3: Dynamic Page Counters

Dynamically create page buttons that can be used to count totals separately:

- Create a global object to set the number of buttons to be created.
- Create a main page element that will contain all the new elements.
- Create a function to create page elements, adding the element type to a parent object.
- Loop through and create all the buttons, set a default total of 0 for each one.
- On click, create a function that will update and output the current value of this element total.
- Create a button that will output all the current button total results.
