const display = document.getElementById('display');
let firstOperand = '';
let operator = '';
let secondOperand = '';
let resultShown = false;

// Handle digit buttons
document.querySelectorAll('.btn[data-num]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (resultShown) {
      firstOperand = '';
      secondOperand = '';
      operator = '';
      display.textContent = '';
      resultShown = false;
    }
    if (!operator) { // Entering first operand
      firstOperand += btn.dataset.num;
      display.textContent = firstOperand;
    } else { // Entering second operand
      secondOperand += btn.dataset.num;
      display.textContent = secondOperand;
    }
  });
});

// Handle operators
document.querySelectorAll('.btn.operator').forEach(btn => {
  btn.addEventListener('click', () => {
    if (firstOperand) {
      operator = btn.dataset.op;
      display.textContent = '';
    }
  });
});

// Handle equals
document.getElementById('equal').addEventListener('click', () => {
  if (firstOperand && operator && secondOperand) {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);
    let res = '';
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? (num1 / num2) : 'Error';
        break;
    }
    display.textContent = res;
    // Prepare for next input
    firstOperand = res.toString();
    secondOperand = '';
    operator = '';
    resultShown = true;
  }
});

// Handle clear
document.getElementById('clear').addEventListener('click', () => {
  firstOperand = '';
  operator = '';
  secondOperand = '';
  resultShown = false;
  display.textContent = '0';
});
