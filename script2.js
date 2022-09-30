let a = '';
let numberStrA = 0;
let b = '';
let numberStrB = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
const calcScreen = document.getElementById("calcScreen");

// all operators
const operators = {
  add: function (num1, num2) { 
    result = (num1 * 1) + (num2 * 1); 
    console.log("result = ", result);
    return result;
  },

  subtract: function (num1, num2) { 
    result = (num1 * 1) - (num2 * 1); 
    console.log("result = ", result);
    return result;
  },

  mult: function (num1, num2) { 
    result = (num1 * 1) * (num2 * 1);
    console.log("result = ", result);
    return result; 
  },
  divide: function (num1, num2) { 
    result = (num1 * 1) / (num2 * 1); 
    console.log("result = ", result);
    return result; 
  },
}

// 1. all buttons with num class listen for clicks
let btnNum = document.querySelectorAll('.btnNum');

let btnOperator = document.querySelectorAll('.btnOperator');

let btnEquals = document.querySelector('.btnEquals');

function setOperateNumVals() {
  if (num1 === 0) {
    num1 = a;
    a = '';
    console.log("num1 = ", num1);
    return num1 = num1 * 1;

    // store next full number in num2 if num1 != 0;
  } else {
    findResult();
    num1 = result;
    a = '';
    console.log("num1 = ", num1);
    return num2;
  }
}


// functions for '=' button;
function findResult() {
  num2 = b;
  b = '';
  num2 = num2 * 1;
  console.log("num2 = ", num2);
  operate();
}

// sends operated result to screen
function displayResult() {
  calcScreen.innerText = result;

  num2 = num2 * 1;
}

btnNum.forEach(btn => {

  btn.addEventListener('click', () => {

    if (num1 === 0) {
      numberStrA = btn.innerHTML;
      a += numberStrA;
      console.log("a = ", a);
      // return num1 = num1 * 1;
      
    } else {
  
      numberStrB = btn.innerHTML;
      b += numberStrB;
      console.log("b = ", b);
    }

  })
})

btnOperator.forEach(btn => {

  btn.addEventListener('click', setOperateNumVals); 

})

btnEquals.addEventListener('click', () => {
  findResult();
  displayResult();
})


// button operatos should return the innerhtml to be used to determine which function to call when equals btn is clicked
let operatorChoices = btnOperator.forEach(btn => {

  btn.addEventListener('click', () => {
    console.log(btn.innerHTML);
    chosenOperator = btn.innerHTML;
    return chosenOperator;
  })

})


function operate() {

  operatorChoices;

  if (chosenOperator === '+') {
    console.log(num1, num2);
    return operators.add(num1, num2);

  } else if (chosenOperator === '-') {
    console.log(num1, num2);
    return operators.subtract(num1, num2);

  } else if (chosenOperator === '*') {
    console.log(num1, num2);
    return operators.mult(num1, num2);

  } else {
    console.log(num1, num2);
    return operators.divide(num1, num2);
  }

}
