var screen = document.getElementById('screen');
const eraseNum = () => screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
var operand1;
var operand2;
var operator;
var result;

function clear() {
  screen.innerText = "";
}

function clr() {
  screen.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
}

function function1(value) {
  switch (value) {
    case 0:
      screen.innerText += "0";
      break;

    case 1:
      screen.innerText += "1";
      break;

    case 2:
      screen.innerText += "2";
      break;

    case 3:
      screen.innerText += "3";
      break;

    case 4:
      screen.innerText += "4";
      break;

    case 5:
      screen.innerText += "5";
      break;

    case 6:
      screen.innerText += "6";
      break;

    case 7:
      screen.innerText += "7";
      break;

    case 8:
      screen.innerText += "8";
      break;

    case 9:
      screen.innerText += "9";
      break;
  }
}

function function2(oprnt) {
  switch (oprnt) {
    case '+':
      operand1 = screen.innerText;
      operator = "+";
      clear();
      break;

    case '-':
      if (screen.innerText.includes('-')) {
        operand1 = screen.innerText;
        operator = '-';
        clear();
        return;
      }
      if (screen.innerText != "") {
        operand1 = screen.innerText;
        operator = '-';
        clear();
        return;
      }
      screen.innerText;
      break;

    case '*':
      operand1 = screen.innerText;
      operator = "*";
      clear();
      break;

    case '/':
      operand1 = screen.innerText;
      operator = "/";
      clear();
      break;

    case '.':
      if (screen.innerText.includes(".")) {
        return;
      }
      screen.innerText += '.';
      break;
  }
}

function calculate() {
  operand2 = screen.innerText;
  switch (operator) {
    case "-":
      if (operand1 == "" || operand2 == "") {
        return;
      }
      result = parseFloat(operand1) - parseFloat(operand2);
      screen.innerText = result;
      break;

    case "+":
      if (operand1 == "" || operand2 == "") {
        return;
      }
      result = parseFloat(operand1) + parseFloat(operand2);
      screen.innerText = result;
      break;

    case "*":
      if (operand1 == "" || operand2 == "") {
        return;
      }
      result = parseFloat(operand1) * parseFloat(operand2);
      screen.innerText = result;
      break;

    case "/":
      if (operand1 == "" || operand2 == "") {
        return;
      }
      result = parseFloat(operand1) / parseFloat(operand2);
      screen.innerText = result;
      break;
  }

}
