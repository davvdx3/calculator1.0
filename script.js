const calculator = document.querySelector('.calculator');

calculator.addEventListener('click', (e) => {
    const num = e.target.dataset.num
    const operator = e.target.dataset.operator
    const clear = e.target.dataset.clear
    const screen = document.querySelector('.screen')

    //TO SET THE DISPLAY MODE
    let displayedValue;
    if (screen.textContent === '0') {
        displayedValue = '';
    } else {
        displayedValue = screen.textContent;
    }

    //CHECK FOR NUMBER OR OPERATOR PRESSED
    let initialValue;
    if (num) {
        if (num === '.') {
            if (displayedValue.includes('.')) {
                displayedValue = displayedValue;
            } else if (calculator.dataset.operatorPressed) {
                displayedValue = '0.'
            } else {
                displayedValue += num

            }
        } else {
            displayedValue += num
        }
    } else if (operator === 'addition' ||
        operator === 'minus' ||
        operator === 'multplication' ||
        operator === 'division') {

        if (calculator.dataset.operatorPressed) {
            calculator.dataset.firstValue = initialValue;
            calculator.dataset.operatorPressed = operator
        }

        calculator.dataset.firstValue = displayedValue;
        initialValue = calculator.dataset.firstValue;
        calculator.dataset.operatorPressed = operator;


        displayedValue = '0';
    } else if (clear === 'clear') {
        displayedValue = 0
    } else if (operator === 'equal') {
        const firstValue = calculator.dataset.firstValue;
        const operatorPressed = calculator.dataset.operatorPressed;
        const secondValue = displayedValue;

        const result = handleCalculation(firstValue, operatorPressed, secondValue);
        displayedValue = result;
    }

    screen.textContent = displayedValue;

})

const handleCalculation = (n1, operator, n2) => {
    if (operator === 'addition') {
        return parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'minus') {
        return parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiplication') {
        return parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'division') {
        return parseFloat(n1) / parseFloat(n2);
    }
}