// add()
function add(term1, term2) {
    return (+term1 + +term2);
};

// substract()
function substract(term1, term2) {
    return (+term1 - +term2);
}

// multiply()
function multiply(factor1, factor2) {
    return (+factor1 * +factor2);
}


// divide()
function divide(number1, number2) {
    return (+number1 / +number2);
}


// operate()
// if there is both a displayNumber and previousNumber
// convert displayNumber and previousNumber to integers
// create variable result
// check which operation
// case add:
// call add with num1, num2 and set return value to the result
// case substract:
// call subsract with num1, num2 and set return value to the result
// case multiply:
// call multiply with num1, num2 and set return value to the result
// case divide:
// call divide with num1, num2 and set return value to the result
// case other case:
// show error alert
// set displayNumber to the result
// call updateDisplay() with the result
// else
// do nothing
/*function operate(e) {
    currentOperator = e.srcElement.value;
    displayNumber = displayNumber;

    if (previousNumber && displayNumber) {
        switch (currentOperator) {
            case 'add':
                displayNumber = add(previousNumber, displayNumber);
                break;
            default:
                console.error('No such operator.');
        }
        previousNumber = displayNumber;
        displayNumber = displayNumber;
        updateDisplay();
    } else {
        previousNumber = displayNumber;
    }
}*/

function operate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
            break;
        case 'substract':
            return substract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
        // If there is no operation selected
        case null:
            return displayNumber;
            break;
        default:
            console.error('Error. Operate was not called with operation or with null.')
    }
}


// updateDisplay()
// set the display element to displayNumber
function updateDisplay() {
    document.querySelector('display').textContent = displayNumber;
}


// onOperatorClick()
// set currentOperation to the value of operation (add, substract ...)
// highlight the button in another color
// if there is both a displayNumber and a previousNumber
// call operate() with previousNumber, displayNumber and the operator. 


// onDigitClick()
// if displayNumber === previousNumber 
// set it to the new digit that was clicked
// else
/**** Not sure about this
        // append the clicked digit to the end of the display number
    // if there was a already a selected operator
        // call updateDisplay() with 0
        // update the string with the new number
        // change back to orginal color of the highlighted operator
    // else
        // append the new number to the end of the string
****/
function onDigitClick(e) {
    if (operatorWasLastCommand) {
        displayNumber = +e.target.value;
    } else {
        // Make the number a string so we can add the last digit inputed to the end
        displayNumber = `${displayNumber}${e.srcElement.value}`;
    }
    operatorWasLastCommand = false;
    updateDisplay();
}


// clearCalculator()
// set currentOperator null
// set displayNumber and previousNumber and set to null
// call updateDisplay()

// create currentOperator
// create displayNumber and previousNumber
// create displayNumber
let currentOperator = null;
let operatorWasLastCommand = true;
let previousNumber = null;
let displayNumber = 0;

document.querySelectorAll('.digit')
    .forEach((digitBtn) => {
        digitBtn.addEventListener('click', onDigitClick);
    });

// add click eventListener to the operators to call onOperatorClick with displayNumber, previousNumber and the value of the element (operator)
document.querySelectorAll('.operator')
    .forEach((digitBtn) => {
        digitBtn.addEventListener('click', (e) => {
            currentOperator = e.target.value;
            previousNumber = displayNumber;
            operatorWasLastCommand = true;
        });
    });

document.querySelector('.equal').
    addEventListener('click', (e) => {
        displayNumber = operate(previousNumber, displayNumber, currentOperator);
        previousNumber = null;
        updateDisplay();
        operatorWasLastCommand = true;
    });