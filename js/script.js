// add()
function add(term1, term2) {
    return (+term1 + +term2);
  };
  
// substract()
subtract = function (term1, term2) {
    return (+term1 - +term2);
  };

// multiply()

// divide()

// operate()
    // if there is both a currentNumber and previousNumber
        // convert currentNumber and previousNumber to integers
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
        // set currentNumber to the result
        // call updateDisplay() with the result
    // else
        // do nothing
function operate(e) {
    currentOperator = e.srcElement.value;
    currentNumber = displayNumber;

    if (previousNumber && currentNumber) {
        switch (currentOperator) {
            case 'add':
                displayNumber = add(previousNumber, currentNumber);
                break;
            default:
                console.error('No such operator.');
        }
        previousNumber = currentNumber;
        currentNumber = displayNumber;
        updateDisplay();
    } else {
        previousNumber = currentNumber;
    }
}


// updateDisplay()
    // set the display element to currentNumber
function updateDisplay() {
    document.querySelector('display').textContent = displayNumber;
    currentOperator = null;
}


// onOperatorClick()
    // set currentOperation to the value of operation (add, substract ...)
    // highlight the button in another color
    // if there is both a currentNumber and a previousNumber
        // call operate() with previousNumber, currentNumber and the operator. 


// onDigitClick()
        // if currentNumber === previousNumber 
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
//    console.log(e.srcElement.value);
    if (displayNumber === 0) {
        displayNumber = +e.srcElement.value;
    } else {
        // Make the number a string so we can add the last digit inputed to the end
        displayNumber = `${displayNumber}${e.srcElement.value}`;
    }
    updateDisplay();        
}


// clearCalculator()
    // set currentOperator null
    // set currentNumber and previousNumber and set to null
    // call updateDisplay()

// create currentOperator
// create currentNumber and previousNumber
// create displayNumber
let currentOperator = null;
let currentNumber = null;
let previousNumber = null;
let displayNumber = 0;

document.querySelectorAll('.digit')
    .forEach((digitBtn) => {
        digitBtn.addEventListener('click', onDigitClick);
    });

// add click eventListener to the operators to call onOperatorClick with currentNumber, previousNumber and the value of the element (operator)
document.querySelectorAll('.operator')
    .forEach((digitBtn) => {
        digitBtn.addEventListener('click', operate);
    });

//document.querySelector('#equal').addEventListener('click', () => console.log('Pressed ='));