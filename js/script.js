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

// updateDisplay()
    // set the display element to currentNumber

// onOperatorClick(operation)
    // set currentOperation to the value of operation (add, substract ...)
    // highlight the button in another color
    // if there is both a currentNumber and a previousNumber
        // call operate() with previousNumber, currentNumber and the operator. 

// onNumberClick()
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

// clearCalculator()
    // set currentOperator null
    // set currentNumber and previousNumber and set to null
    // call updateDisplay()

// create currentOperator
// create currentNumber and previousNumber
// create displayNumber
// add click eventListener to digits 0 ... 9 to call onNumberClick with the value of the button element
// add click eventListener to the operators to call onOperatorClick with currentNumber, previousNumber and the value of the element (operator)
// call clearCalculator()
