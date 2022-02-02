// HINT: You can delete this console.log after you no longer need it!
//console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Fernanda Reis"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

//let body = document.querySelector('body')

//let totalQuantity = 1
let total = 0;

let costTotal = document.querySelector("#qty-total");
//let total = costTotal
///for
// selecting the element with an id of credit
const credit = document.querySelector("#credit");

// selecting the element with an id of add-gb
//Gringerbread
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");

// Chololate chip
const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");

// Sugar Sprinkle
const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

const gingerbread = document.querySelector("#qty-gb");

const chocolateChip = document.querySelector("#qty-cc")

const sugarSprinkle = document.querySelector("#qty-sugar")
// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  console.log("Gingerbread + button was clicked!");
  total += 1;
  costTotal.textContent = total;
  gb += 1;
  gingerbread.textContent = gb;
  
});
gbMinusBtn.addEventListener("click", function () {
  console.log("Gingerbread - button was clicked!");
  total -= 1;
  costTotal.textContent = total;
  gb -= 1;
  gingerbread.textContent = gb;
  
});
ccPlusBtn.addEventListener("click", function () {
  console.log("Chocolat Chip + button was clicked!");
  total += 1;
  costTotal.textContent = total;
  cc += 1;
  chocolateChip.textContent = cc;
});

ccMinusBtn.addEventListener("click", function () {
  console.log("Chocolate Chip - button was clicked!");
  total -= 1;
  costTotal.textContent = total;
  cc -= 1;
  chocolateChip.textContent = gb;

});
sugarPlusBtn.addEventListener("click", function () {
  console.log("Sugar Sprinkles + button was clicked!");
  total += 1;
  costTotal.textContent = total;
  sugar += 1;
  sugarSprinkle.textContent = sugar;

});
sugarMinusBtn.addEventListener("click", function () {
  console.log("Sugar Sprinkles - button was clicked!");
  total -= 1;
  costTotal.textContent = total;
  sugar -= 1;
  sugarSprinkle.textContent = sugar;

});

total

// HINT: You can delete this console.log after you no longer need it!
//console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons
