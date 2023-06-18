let expression = '';

function updateScreen() {
    const screen = document.getElementById('screen');
    screen.value = expression;
}

function appendNumber(number) {
    expression += number;
    updateScreen();
}

function appendOperator(operator) {
    expression += operator;
    updateScreen();
}

function appendDecimal() {
    if (!expression.includes('.')) {
        expression += '.';
        updateScreen();
    }
}

function clearEntry() {
    expression = '';
    updateScreen();
}

function clearAll() {
    expression = '';
    updateScreen();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateScreen();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateScreen();
    } catch (error) {
        // Handle any errors during evaluation
        expression = '';
        updateScreen();
    }
}