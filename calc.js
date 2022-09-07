const container = document.querySelector('.container');
const display = document.querySelector('.input');
const backspace = document.querySelector('.backspace');
const numbers = document.querySelectorAll('.number');

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
    calculate();
    p.textContent = previousValue;
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
        } else {
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
    curremtValue = currentValue.slice(0, -1);
})
