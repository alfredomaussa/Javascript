// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Switch documentation:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch

function basicOp(operation, value1, value2)
{
  // Code
    switch (operation) {
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1 * value2;
            break;
        case "/":
            return value1 / value2;
        default:
            break;
    }
}

