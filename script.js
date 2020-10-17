const displayContent = ``

generateCalculator();

// Generate Calculator Buttons

function generateCalculator() {
    const calculator = document.querySelector('.calculator');

    // createElement
    const calcDisplay = document.createElement('div');
    const calcButtons = document.createElement('div');
    const display = document.createElement('div');
    const displayNumbers = document.createElement('div');
    const buttonsNumbers = document.createElement('div');
    const buttonsOperators = document.createElement('div');
    const numberRowBottom = document.createElement('div');
    const buttonZero = document.createElement('button');
    const buttonDecimal = document.createElement('button');
    const numberRow = document.createElement('div');
    const buttonClear = document.createElement('button');
    const buttonEquals = document.createElement('button');
    const buttonDivide = document.createElement('button');
    const buttonMultiply = document.createElement('button');
    const buttonSubtract = document.createElement('button');
    const buttonAdd = document.createElement('button');

    // classList.add
    calcDisplay.classList.add('calc-display');
    calcButtons.classList.add('calc-buttons');
    display.classList.add('display');
    displayNumbers.classList.add('display-numbers');
    buttonsNumbers.classList.add('buttons-numbers');
    buttonsOperators.classList.add('buttons-operators');
    numberRowBottom.classList.add('number-row');
    buttonZero.classList.add('button-number', 'button-zero');
    buttonDecimal.classList.add('button-number');
    numberRow.classList.add('number-row');
    buttonClear.classList.add('button-clear');
    buttonEquals.classList.add('button-equals');
    buttonDivide.classList.add('button-operator');
    buttonMultiply.classList.add('button-operator');
    buttonSubtract.classList.add('button-operator');
    buttonAdd.classList.add('button-operator');

    // innerHTML
    displayNumbers.innerHTML = displayContent;
    buttonZero.innerHTML = `0`;
    buttonDecimal.innerHTML = `.`;
    buttonClear.innerHTML = `Clear`;
    buttonEquals.innerHTML = `=`;
    buttonDivide.innerHTML = `/`;
    buttonMultiply.innerHTML = `*`;
    buttonSubtract.innerHTML = `-`;
    buttonAdd.innerHTML = `+`;

    // addEventListener
    buttonZero.addEventListener('click', updateDisplay, false);
    buttonDecimal.addEventListener('click', updateDisplay, false);
    buttonClear.addEventListener('click', clearDisplay, false);
    buttonDivide.addEventListener('click', updateDisplay, false);
    buttonMultiply.addEventListener('click', updateDisplay, false);
    buttonSubtract.addEventListener('click', updateDisplay, false);
    buttonAdd.addEventListener('click', updateDisplay, false);
    //[!]buttonEquals

    // appendChild
    display.appendChild(displayNumbers);
    calcDisplay.appendChild(display);
    calculator.appendChild(calcDisplay);
    numberRowBottom.appendChild(buttonZero);
    numberRowBottom.appendChild(buttonDecimal);
    buttonsNumbers.appendChild(numberRowBottom);

    // Generate Number Buttons
    let counter = 1;
    for(let i = 1; i <= 3 ; i++) {
        const numberRow = document.createElement('div');
        numberRow.classList.add('number-row');
        for (let j = 1; j <= 3; j++) {
            const buttonNumber = document.createElement('button');
            buttonNumber.classList.add('button-number');
            buttonNumber.innerHTML = `${counter++}`;
            buttonNumber.addEventListener('click', updateDisplay, false);
            numberRow.appendChild(buttonNumber);
        }
        buttonsNumbers.appendChild(numberRow);
    }

    numberRow.appendChild(buttonClear);
    numberRow.appendChild(buttonEquals);
    buttonsNumbers.appendChild(numberRow);
    buttonsOperators.appendChild(buttonDivide);
    buttonsOperators.appendChild(buttonMultiply);
    buttonsOperators.appendChild(buttonSubtract);
    buttonsOperators.appendChild(buttonAdd);
    calcButtons.appendChild(buttonsNumbers);
    calcButtons.appendChild(buttonsOperators);
    calculator.appendChild(calcButtons);
}

// Display Logic

function updateDisplay() {
    let newContent = this.innerHTML;
    let displayNumbers = document.querySelector('.display-numbers');
    let newDisplayContent = displayNumbers.innerHTML;
    if (newDisplayContent == ``) {
        console.log(`${newContent == '+'}`);
        if (newContent != '+' && newContent != '-' && newContent != '*' && newContent != '/') {
            newDisplayContent = newDisplayContent.concat(newContent);
            displayNumbers.innerHTML = newDisplayContent;
        }
    }
    else if (newDisplayContent != ``) {
        if (newDisplayContent.slice(newDisplayContent.length - 1) == '+' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '-' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '*' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '/') {
                if (newContent != '+' && newContent != '-' && newContent != '*' && newContent != '/') {
                    newDisplayContent = newDisplayContent.concat(newContent);
                    displayNumbers.innerHTML = newDisplayContent;
                }
        } else {
            newDisplayContent = newDisplayContent.concat(newContent);
            displayNumbers.innerHTML = newDisplayContent;
        }
    }
}

function clearDisplay() {
    let displayNumbers = document.querySelector('.display-numbers');
    displayNumbers.innerHTML = ``;
    console.log(`+++ DISPLAY CLEAR +++`)
}

// Calculator Logic

const operate = function(operandOne, operandTwo, operator) {

}

// Mathematical Operations

const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}