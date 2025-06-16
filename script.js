let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldResetScreen = false;

function appendNumber(number) {
    const display = document.getElementById('display');
    if (shouldResetScreen) {
        display.value = '';
        shouldResetScreen = false;
    }
    display.value += number;
}

function setOperator(operator) {
    const display = document.getElementById('display');
    firstOperand = display.value;
    currentOperator = operator;
    shouldResetScreen = true;
}

function calculate() {
    const display = document.getElementById('display');
    secondOperand = display.value;

    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (currentOperator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
        default: return;
    }

    display.value = result;
    display.classList.add('result');
    setTimeout(() => display.classList.remove('result'), 500);

}

function clearDisplay() {
    document.getElementById('display').value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
}
