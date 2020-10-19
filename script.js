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
    const buttonBackspace = document.createElement('button');
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
    buttonBackspace.classList.add('button-backspace');
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
    buttonBackspace.innerHTML = `Backspace`;
    buttonEquals.innerHTML = `=`;
    buttonDivide.innerHTML = `/`;
    buttonMultiply.innerHTML = `*`;
    buttonSubtract.innerHTML = `-`;
    buttonAdd.innerHTML = `+`;

    // addEventListener
    buttonZero.addEventListener('click', updateDisplay, false);
    buttonDecimal.addEventListener('click', updateDisplay, false);
    buttonClear.addEventListener('click', clearDisplay, false);
    buttonBackspace.addEventListener('click', backspace, false);
    buttonDivide.addEventListener('click', updateDisplay, false);
    buttonMultiply.addEventListener('click', updateDisplay, false);
    buttonSubtract.addEventListener('click', updateDisplay, false);
    buttonAdd.addEventListener('click', updateDisplay, false);
    buttonEquals.addEventListener('click', function() {
        equate(document.querySelector('.display-numbers').innerHTML);
    }, false);

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
    numberRow.appendChild(buttonBackspace);
    numberRow.appendChild(buttonMultiply);
    buttonsNumbers.appendChild(numberRow);
    buttonsOperators.appendChild(buttonDivide);
    buttonsOperators.appendChild(buttonMultiply);
    buttonsOperators.appendChild(buttonSubtract);
    buttonsOperators.appendChild(buttonAdd);
    buttonsOperators.appendChild(buttonEquals);
    calcButtons.appendChild(buttonsNumbers);
    calcButtons.appendChild(buttonsOperators);
    calculator.appendChild(calcButtons);
}

// Display Logic

function updateDisplay() {
    let newContent = this.innerHTML;
    let displayNumbers = document.querySelector('.display-numbers');
    if(displayNumbers.innerHTML == 'undefined') {
        clearDisplay();
    }
    let newDisplayContent = displayNumbers.innerHTML;
    if (newDisplayContent == ``) {
        if (newContent != '+' && newContent != '-' && newContent != '*' && newContent != '/' && newContent != '.') {
            newDisplayContent = newDisplayContent.concat(newContent);
            displayNumbers.innerHTML = newDisplayContent;
        }
    }
    else if (newDisplayContent != ``) {
        if (newDisplayContent.slice(newDisplayContent.length - 1) == '+' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '-' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '*' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '/' ||
             newDisplayContent.slice(newDisplayContent.length - 1) == '.') {
                if (newContent != '+' && newContent != '-' && newContent != '*' && newContent != '/' && newContent != '.') {
                    newDisplayContent = newDisplayContent.concat(newContent);
                    displayNumbers.innerHTML = newDisplayContent;
                }
        } else {
            if(newContent == '.') {
                let i, j;
                let decimalPoint = false;
                for(i = newDisplayContent.length - 1; i >= 0 ; i--) {
                    if(newDisplayContent[i] == '+' || 
                    newDisplayContent[i] == '-' ||
                    newDisplayContent[i] == '*' ||
                    newDisplayContent[i] == '/') {
                        break;
                    } else {
                        continue;
                    }
                }
                for (j = newDisplayContent.length - 1; j >= i; j--) {
                    if (newDisplayContent[j] == '.') {
                        alert(`You can't have more than one decimal point per number!`);
                        decimalPoint = true;
                        break;
                    } else {
                        continue;
                    }
                }
                if (decimalPoint == false) {
                    newDisplayContent = newDisplayContent.concat(newContent);
                    displayNumbers.innerHTML = newDisplayContent;
                }
            } else {
                newDisplayContent = newDisplayContent.concat(newContent);
                displayNumbers.innerHTML = newDisplayContent;
            }
        }
    }
}

function clearDisplay() {
    let displayNumbers = document.querySelector('.display-numbers');
    displayNumbers.innerHTML = ``;
}

function backspace() {
    let displayNumbers = document.querySelector('.display-numbers');
    if(displayNumbers.innerHTML == 'undefined') {
        clearDisplay();
    }
    let newDisplayNumbers = displayNumbers.innerHTML;
    newDisplayNumbers = newDisplayNumbers.slice(0, -1);
    displayNumbers.innerHTML = newDisplayNumbers;
}

// Calculator Logic

function equate(expression) {
    let arrayExpression = [];
    let someNumber = ``;
    let result;
    if (expression[expression.length - 1] == '+' || expression[expression.length - 1] == '-' || expression[expression.length - 1] == '*' || expression[expression.length - 1] == '/') {
        expression = expression.slice(0, -1);
    }
    for (let i = 0; i < expression.length; i++) {
        if((expression.charCodeAt(i) >= 48 && expression.charCodeAt(i) <= 57) || expression.charCodeAt(i) == 46) {
            someNumber = someNumber.concat(expression[i]);
        }
        else if(expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
            arrayExpression.push(someNumber);
            arrayExpression.push(expression[i]);
            someNumber = ``;
        }
    }
    arrayExpression.splice(arrayExpression.length + 1, 0, someNumber);
    for (let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] == '*') {
            result = operate(Number(arrayExpression[i - 1]), Number(arrayExpression[i + 1]), arrayExpression[i]);
            const newExpression = [
                ...arrayExpression.slice(0, i - 1),
                ...arrayExpression.slice(i + 2)
            ];
            newExpression.splice(i - 1, 0, result);
            arrayExpression = newExpression;
            i--;
        }
    }
    for (let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] == '/') {
            result = operate(Number(arrayExpression[i - 1]), Number(arrayExpression[i + 1]), arrayExpression[i]);
            if (result == undefined) {
                arrayExpression.splice(0, arrayExpression.length);
                arrayExpression.push(undefined);
            }
            const newExpression = [
                ...arrayExpression.slice(0, i - 1),
                ...arrayExpression.slice(i + 2)
            ];
            newExpression.splice(i - 1, 0, result);
            arrayExpression = newExpression;
            i--;
        }
    }
    for (let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] == '+') {
            result = operate(Number(arrayExpression[i - 1]), Number(arrayExpression[i + 1]), arrayExpression[i]);
            const newExpression = [
                ...arrayExpression.slice(0, i - 1),
                ...arrayExpression.slice(i + 2)
            ];
            newExpression.splice(i - 1, 0, result);
            arrayExpression = newExpression;
            i--;
        }
    }
    for (let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] == '-') {
            result = operate(Number(arrayExpression[i - 1]), Number(arrayExpression[i + 1]), arrayExpression[i]);
            const newExpression = [
                ...arrayExpression.slice(0, i - 1),
                ...arrayExpression.slice(i + 2)
            ];
            newExpression.splice(i - 1, 0, result);
            arrayExpression = newExpression;
            i--;
        }
    }
    const displayNumbers = document.querySelector('.display-numbers');
    displayNumbers.innerHTML = Math.round((result + Number.EPSILON) * 100) / 100;
}

function operate(operandOne, operandTwo, operator) {
    if (operator == '*') {
        let result = multiply(operandOne, operandTwo);
        return result;
    }
    else if (operator == '/') {
        let result = divide(operandOne, operandTwo);
        return result;
    }
    else if (operator == '+') {
        let result = add(operandOne, operandTwo);
        return result;
    }
    else if (operator == '-') {
        let result = subtract(operandOne, operandTwo);
        return result;
    }
}

// Mathematical Operations

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(y == 0) {
        return undefined;
    } else {
        return x / y;
    }
}