let a = '';
let numberStrA = 0;
let b = '';
let numberStrB = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let lastResult = 0;
const calcScreen = document.getElementById("calcScreen");

// object containing all operators
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
    if (num1 === 0 || num2 === 0) {
      result = `(ノಠ益ಠ)ノ彡┻━┻`;
      alert(`you've committed a sinful act, all your work is lost`);
      return result;
    } else {
      result = (num1 * 1) / (num2 * 1); 
      console.log("result = ", result);
      return result; 
    }
  },
}

// 1. all buttons with num class listen for clicks
let btnNum = document.querySelectorAll('.btnNum');

let btnOperator = document.querySelectorAll('.btnOperator');

let btnEquals = document.querySelector('.btnEquals');

let btnDecimal = document.querySelector('#btnDecimal')

function setOperateNumVals() {
  if (calcScreen.innerText === `(ノಠ益ಠ)ノ彡┻━┻`) {
    clearScreen();
    num1 = a;
    a = '';
    result = 0;
    console.log("num1 = ", num1);
    return num1 = num1 * 1;
  } else if (num1 === 0) {
      num1 = a;
      a = '';
      result = 0;
      console.log("num1 = ", num1, "a = ", a, "result = ", result);
      return num1 = num1 * 1;
      // store next full number in num2 if num1 != 0;
    } else {
      findResult();
      displayResult();
      num1 = lastResult;
      // a = '';
      // result = 0;
      console.log("num1 = ", num1, "a = ", a, "result = ", result);
      return num2;
    }
}

// functions for '=' button;
function findResult() {
    console.log("b = ", b);
    num2 = b;
    b = '';
    num2 = num2 * 1;
    console.log("num2 = ", num2);
    operate();
    
    // sets correct values for future operator clicks
    num1 = 0;
    a = result;
    console.log("num1 = ", num1, "a = ", a, "result = ", result);
}

// sends operated result to screen
function displayResult() {
  if (result === `(ノಠ益ಠ)ノ彡┻━┻`) {
    calcScreen.innerText = result;
    // reset values for num button conditionals
    num2 = num2 * 1;
    result = 0;
    a = '';
    console.log("num1 = ", num1, "a = ", a, "result = ", result);

    // display last result on screen on consecutive clicks
  } else if (result === 0) {
    calcScreen.innerText = lastResult;
    result = 0;
    a = '';
    console.log("num1 = ", num1, "a = ", a, "result = ", result);

  }
  else {
    // reset values for num button conditionals
    calcScreen.innerText = result;
    num2 = num2 * 1;
    lastResult = result;
    a = lastResult;
    result = 0;
    
    console.log("num1 = ", num1, "a = ", a, "result = ", result);

  }
}

btnNum.forEach(btn => {

  btn.addEventListener('click', function btnClick() {
    // reset screen if user divides by 0 or selects new numbers after clicking equals button
    if (calcScreen.innerText === `(ノಠ益ಠ)ノ彡┻━┻` || result != 0 && a === '') {
    
      // clear string/reset values and get string for first number
      clearScreen();
      numberStrA = btn.innerHTML;
      a += numberStrA;
      calcScreen.innerText = a;
      console.log("a = ", a);

    } else if (num1 === 0) {

      // get string for first number
      numberStrA = btn.innerHTML;
      a += numberStrA;
      calcScreen.innerText = a;
      console.log("a = ", a);

      // buton click after first operator is clicked
    } else {
      // get string for second number
      numberStrB = btn.innerHTML;
      b += numberStrB;
      calcScreen.innerText = b;
      console.log("b = ", b);
      }
    })
  })

// same numBtn event listener for the decimal button 
btnDecimal.addEventListener('click', function decimalClick() {
  if (calcScreen.innerHTML.includes('.')) {
    return;
  } else if (calcScreen.innerText === `(ノಠ益ಠ)ノ彡┻━┻` || result != 0 && a === '') {
    
    // clear string/reset values and get string for first number
    clearScreen();
    numberStrA = btnDecimal.innerHTML;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

  } else if (num1 === 0) {

    // get string for first number
    numberStrA = btnDecimal.innerHTML;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

    // buton click after first operator is clicked
  } else {
    // get string for second number
    numberStrB = btnDecimal.innerHTML;
    b += numberStrB;
    calcScreen.innerText = b;
    console.log("b = ", b);
    }  
})

// adds keyboard functionality for numerical input
document.addEventListener('keydown', (event) => {
  if (calcScreen.innerText === `(ノಠ益ಠ)ノ彡┻━┻` || result != 0 && a === '' && isFinite(event.key)) {

    // clear string/reset values and get string for first number
    clearScreen();
    numberStrA = event.key;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

  } else if (num1 === 0 && isFinite(event.key)) {

    // get string for first number
    numberStrA = event.key;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

    // buton click after first operator is clicked
  } else if (isFinite(event.key)) {

    // get string for second number
    numberStrB = event.key;
    b += numberStrB;
    calcScreen.innerText = b;
    console.log("b = ", b);
  }
})

// kayboard functionality for decimal button listener
document.addEventListener('keydown', (event) => {
  if (event.key == '.' && calcScreen.innerHTML.includes('.')) {
    return;
  } else if (calcScreen.innerText === `(ノಠ益ಠ)ノ彡┻━┻` || result != 0 && a === '') {
    
    // clear string/reset values and get string for first number
    clearScreen();
    numberStrA = btnDecimal.innerHTML;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

  } else if (event.key == '.' && num1 === 0) {

    // get string for first number
    numberStrA = btnDecimal.innerHTML;
    a += numberStrA;
    calcScreen.innerText = a;
    console.log("a = ", a);

    // buton click after first operator is clicked
  } else if (event.key == '.') {
    // get string for second number
    numberStrB = btnDecimal.innerHTML;
    b += numberStrB;
    calcScreen.innerText = b;
    console.log("b = ", b);
    }  
})

// keyboard funcitonality for delete button listener
document.addEventListener('keydown', (event) => {
  if (event.key == 'Backspace') {
    backspace();
  }
}); 


// delete button listener
btnDel.addEventListener('click', backspace);

// button operator listener function
btnOperator.forEach(btn => {

  btn.addEventListener('click', setOperateNumVals); 

})

// equals button listener function
btnEquals.addEventListener('click', () => {
  findResult();
  displayResult();
})

// clear button listener function
btnClear.addEventListener('click', clearScreen);


// button operators should return the innerhtml to be used to determine which function to call when equals btn is clicked
let operatorChoices = btnOperator.forEach(btn => {

  btn.addEventListener('click', () => {
    console.log(btn.innerHTML);
    chosenOperator = btn.innerHTML;
    return chosenOperator;
  })

})

// chooses correct operator and performs calculation
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

// resets all values to 0 and visually shows the screen has reset to 0
function clearScreen() {
  calcScreen.innerText = 0;
  a = '';
  b = '';
  num1 = 0;
  num2 = 0;
}

// removes last character from current number string (a,b)
function backspace() {
  // set screen value to 0 instead of blank
  if ((a === '' || a === null || a.length <= 1) && (b === '' || b === null || b.length <= 1)) {
    return;
  // typical backspace behavior for a (num1 string)
  } else if (num1 === 0) {
    console.log('a = ', a)
    a = a.slice(0, -1);
    calcScreen.innerText = a;
  // typical backspace behavior for b (num2 string)
  } else {
    b = b.slice(0, -1);
    console.log("b = ", b);
    calcScreen.innerText = b;
  }
}