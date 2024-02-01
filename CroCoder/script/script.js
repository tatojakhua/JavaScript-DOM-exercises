//Task1
// You are given some names of different fruit and an unordered list html element; add a list item for each to the unordered list.

// const fruitList = ["apple", "banana", "tomato"];
// for (i = 0; i < fruitList.length; i++) {
//   const ulEl = document.createElement("ul");
//   ulEl.innerHTML = `<li>${fruitList[i]}</li>`;
//   document.body.appendChild(ulEl);
// }

//--------//

// Task2
// Add the CroCoder logo (image element) as a child element to the existing div element.

// const imageSrc = "https://crocoder.dev/icon.png";
// const divEl = eleMaker("div", document.body);
// const imgEl = eleMaker("img", divEl, imageSrc, "CroCoder-logo");

// function eleMaker(ele, parent, src, alt) {
//   const eleCrater = document.createElement(ele);
//   if (src) {
//     eleCrater.alt = `${alt}`;
//     eleCrater.src = `${src}`;
//   }
//   return parent.appendChild(eleCrater);
// }

//----------//

//Task3
//Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.

// const val = {
//   ulNum: 3,
//   liNum: 6,
// };

// for (let i = 0; i < val.ulNum; i++) {
//   const ulElement = eleMaker("ul", document.body);
//   for (let i = 0; i < val.liNum; i++) {
//     const liElement = eleMaker("li", ulElement, `${i + 1}`);
//   }
// }

// function eleMaker(ele, parent, html) {
//   const eleCrater = document.createElement(ele);
//   if (html) {
//     eleCrater.innerHTML = html;
//   }
//   return parent.appendChild(eleCrater);
// }

// const getUlList = document.querySelectorAll("ul");

// getUlList.forEach((el) => {
//   el.firstElementChild.textContent = "first";
//   el.lastElementChild.textContent = "last";
// });

//----------//

//Task3
// You are building a web page that displays a list of items. The user should be able to add new items to the list and edit the text of the items.
// Your task is to use the DOM API to create the necessary elements, add event listeners to them, and manipulate the elements as the user interacts with the page.

const divElement = eleMaker("div", document.body);
const inputElement = eleMaker("input", divElement, null, "text");
const btn = eleMaker("button", divElement, "Create New");

btn.onclick = () => {
  const listElement = eleMaker("li", divElement, inputElement.value);
  inputElement.value = "";
};

function eleMaker(ele, parent, html, type) {
  const eleCrater = document.createElement(ele);
  if (html) {
    eleCrater.innerHTML = html;
  }
  if (type) {
    eleCrater.type = type;
  }
  return parent.appendChild(eleCrater);
}

//------------//
