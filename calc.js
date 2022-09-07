const container = document.querySelector('.container');
const display = document.querySelector('.input');
const backspace = document.querySelector('.backspace');
const numbers = document.querySelectorAll('.number');
const dot = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const p = document.createElement('div');
          p.classList.add('p');
          display.appendChild(p);

let previousValue = '';  //previous value
let currentValue = '';   // current value
let operator = '';

numbers.forEach((number) => number.addEventListener('click', function(e) {
    handleNumber(e.target.textContent);
    p.textContent = currentValue;
    console.log(number);
}))

function handleNumber(num) {
    if (currentValue.length < 6) {
    currentValue += num;
    }
}
operators.forEach((op) => op.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    p.textContent = previousValue + '' + operator;
}))
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

equal.addEventListener('click',   () => {
  if(currentValue != '' && previousValue != '') {
    calculate();
    p.textContent = previousValue;
    if(previousValue.length <= 5) {
       p.textContent = previousValue;
    } else {
        p.textContent = previousValue.slice(0,5) + "...";
    }
   }
})

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    
      if(operator === '+') {
      previousValue = previousValue + currentValue;
    } else if(operator === '-') {
    previousValue = previousValue - currentValue;
        } else if(operator === 'x') {
     previousValue = previousValue * currentValue;
        } else if (operator === '/') {
          if (currentValue <= 0) {
            previousValue = "Error";
            p.textContent = previousValue;
            return;
              
          }     
            previousValue = previousValue / currentValue;
      }
        previousValue = roundNumber(previousValue);
        previousValue = previousValue.toString();   
         currentValue = previousValue.toString();
    }


function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}


clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    p.textContent = currentValue;
    operator = '';
})

backspace.addEventListener('click', function () {
    deleteLast();
})

function deleteLast() {
    currentValue = currentValue.slice(0,-1);
    p.textContent = currentValue;
}


dot.addEventListener('click', function () {
    addDecimal();
})
function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
}




