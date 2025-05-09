const display = document.getElementById('display')
let operation = ''

function appendToDisplay(input) {
    operation += input
    display.value = operation
}

function clearDisplay() {
    operation = ''
    display.value = operation
}

function calculateResult() {
    let number1 = ''
    let number2 = ''
    let operator = ''
    let foundOperator = false


    for (let i = 0; i < operation.length; i++) {
        const char = operation[i]

        if (!foundOperator && ['+', '-', '*', '/'].includes(char)) {
            operator = char
            foundOperator = true
        } else if (!foundOperator) {
            number1 += char
        } else {
            number2 += char
        }
    }
    number1 = parseInt(number1)
    number2 = parseInt(number2)

    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            if (number2 === 0) {
                result = 'Division by zero is not allowed'

            } else {
                result = number1 / number2
            }
            break
        default:
            result = 'Invalid operator'
            break
    }
    display.value = result
    operation = ''
}
