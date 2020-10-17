generateCalculator();

// Generate Calculator Buttons

function generateCalculator() {
    const calculator = document.querySelector('.calculator');

    const calcDisplay = document.createElement('div');
    calcDisplay.classList.add('calc-display');
    const calcButtons = document.createElement('div');
    calcButtons.classList.add('calc-buttons');

    const display = document.createElement('textarea');
    display.classList.add('display')
    calcDisplay.appendChild(display);

    calculator.appendChild(calcDisplay);

    const buttonsNumbers = document.createElement('div');
    const buttonsOperators = document.createElement('div');
    buttonsNumbers.classList.add('buttons-numbers');
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
    const buttonBackspace = document.createElement('button');
    const buttonEquals = document.createElement('button');
    buttonBackspace.classList.add('button-backspace');
    buttonEquals.classList.add('button-equals');
    buttonBackspace.innerHTML = `Backspace`;
    buttonEquals.innerHTML = `=`;
    numberRow.appendChild(buttonBackspace);
    numberRow.appendChild(buttonEquals);
    buttonsNumbers.appendChild(numberRow);



    buttonsOperators.classList.add('buttons-operators');
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