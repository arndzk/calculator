generateCalculator();

// Generate Calculator Buttons

function generateCalculator() {
    const calculator = document.querySelector('.calculator');

    const calcDisplay = document.createElement('div');
    calcDisplay.classList.add('calc-display');
    const calcButtons = document.createElement('div');
    calcButtons.classList.add('calc-buttons');

    const display = document.createElement('div');
    display.classList.add('display');
    display.readOnly = true;
    const displayNumbers = document.createElement('div');
    displayNumbers.classList.add('display-numbers');
    displayNumbers.innerHTML = `0`;
    display.appendChild(displayNumbers);
    calcDisplay.appendChild(display);

    calculator.appendChild(calcDisplay);

    const buttonsNumbers = document.createElement('div');
    const buttonsOperators = document.createElement('div');
    buttonsNumbers.classList.add('buttons-numbers');
    buttonsOperators.classList.add('buttons-operators');

    const numberRowBottom = document.createElement('div');
    numberRowBottom.classList.add('number-row');
    const buttonZero = document.createElement('button');
    const buttonDecimal = document.createElement('button');
    buttonZero.classList.add('button-number', 'button-zero');
    buttonDecimal.classList.add('button-number');
    buttonZero.innerHTML = `0`;
    buttonDecimal.innerHTML = `.`;
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
            numberRow.appendChild(buttonNumber);
        }
        buttonsNumbers.appendChild(numberRow);
    }
    const numberRow = document.createElement('div');
    numberRow.classList.add('number-row');
    const buttonClear = document.createElement('button');
    const buttonEquals = document.createElement('button');
    buttonClear.classList.add('button-clear');
    buttonEquals.classList.add('button-equals');
    buttonClear.innerHTML = `Clear`;
    buttonEquals.innerHTML = `=`;
    numberRow.appendChild(buttonClear);
    numberRow.appendChild(buttonEquals);
    buttonsNumbers.appendChild(numberRow);

    // Operator Buttons
    const buttonDivide = document.createElement('button');
    const buttonMultiply = document.createElement('button');
    const buttonSubtract = document.createElement('button');
    const buttonAdd = document.createElement('button');

    buttonDivide.classList.add('button-operator');
    buttonMultiply.classList.add('button-operator');
    buttonSubtract.classList.add('button-operator');
    buttonAdd.classList.add('button-operator');

    buttonDivide.innerHTML = `/`;
    buttonMultiply.innerHTML = `*`;
    buttonSubtract.innerHTML = `-`;
    buttonAdd.innerHTML = `+`;

    buttonsOperators.appendChild(buttonDivide);
    buttonsOperators.appendChild(buttonMultiply);
    buttonsOperators.appendChild(buttonSubtract);
    buttonsOperators.appendChild(buttonAdd);

    calcButtons.appendChild(buttonsNumbers);
    calcButtons.appendChild(buttonsOperators);

    calculator.appendChild(calcButtons);
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