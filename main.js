//Start small by selecting some elements
//Create some functions to store repeatable steps
//You'll need to find a way to track the numbers pressed until the = is pressed
//No need for chaining long calculations yet (see hard mode)


// Add a digit to the display
// Clear display
// Perform operations * / + and -
// Calculate (on pressing the = button)


let numCurrent = Number(document.querySelector(".numbers_group"));
let numStore  = [];
let operation = document.querySelector(".operators_group");
let display = calculator.ans.value;


input.addEventListener ("click", display, false);

function sum(){
  setValues();
  result = (numStore+numCurrent);
}

function rest(){
  setValues();
  result = (numStore-numCurrent);
}

function div(){
  setValues();
  result = (numStore/numCurrent);
}

function multiply(){
  setValues();
  result = (numStore*numCurrent);
}
