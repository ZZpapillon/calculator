const container = document.querySelector('.container');
const display = document.querySelector('.input');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const mulitiply = document.querySelector('.mutliply');
const divide = document.querySelector('.divide');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let a = 0;
let b = 0;
let operator = '';
const p = document.createElement('div');
p.classList.add('p');
function add1(a,b) {
    return a + b;
}
function substract1(a, b) {
    return a - b;
}
function mutliply1(a, b) {
    return (a * b);
}
function divide1(a, b) {
    return (a / b);
}
function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add1(a, b);
        case "-":
            return subtract1(a, b);
        case "*":
            return multiply1(a, b);
        case "/":
            return divide1(a, b);
    }
}


one.addEventListener('click', () => {  
  p.textContent = p + 1;
  display.appendChild(p);
  
});

two.addEventListener('click', () => {
    p.textContent = 2;
    display.appendChild(p);
    b = 2;
});

one.addEventListener('click', () => {
    p.textContent = 1;
    display.appendChild(p);
});

three.addEventListener('click', () => {
    p.textContent = 3;
    display.appendChild(p);
});

four.addEventListener('click', () => {
    p.textContent = 4;
    display.appendChild(p);
});

five.addEventListener('click', () => {
    p.textContent = 5;
    display.appendChild(p);
});

six.addEventListener('click', () => {
    p.textContent = 6;
    display.appendChild(p);
});

seven.addEventListener('click', () => {
    p.textContent = 7;
    display.appendChild(p);
});

eight.addEventListener('click', () => {
    p.textContent = 8;
    display.appendChild(p);
});

nine.addEventListener('click', () => {
    p.textContent = 9;
    display.appendChild(p);
});

add.addEventListener('click', () => {
    operator = "+";
   // p.textContent = operate(a, b, operator)
   // display.appendChild(p);
});

subtract.addEventListener('click', () => {
    operator = '-';
    //p.textContent = operate(a, b, operator)
    //display.appendChild(p);
});

mulitiply.addEventListener('click', () => {
    operator = '*';
   // p.textContent = operate(a, b, operator)
   // display.appendChild(p);
});

divide.addEventListener('click', () => {
    operator = '/';
   // p.textContent = operate(a, b, operator)
   // display.appendChild(p);
});

equal.addEventListener('click', () => {
    p.textContent = operate(a, b, operator);
    display.appendChild(p);
});

