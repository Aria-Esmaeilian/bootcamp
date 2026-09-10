const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const deleteBtn = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const percent = document.getElementById("percent");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteNumber() {
  display.value = display.value.slice(0, -1);
}

function operator(item) {
  item = item.replaceAll("*", "×");
  item = item.replaceAll("/", "÷");

  const operators = ["+", "-", "×", "÷", "."];
  const lastCharacter = display.value[display.value.length - 1];

  if (!operators.includes(lastCharacter)) {
    display.value += item;
  }
}

function addNumber(item) {
  const operators = ["+", "-", "×", "÷"];
  const lastCharacter = display.value[display.value.length - 1];

  if (item === ".") {
    if (lastCharacter === ".") {
      return;
    }

    if (operators.includes(lastCharacter)) {
      display.value += "0.";
      return;
    }

    const currentNumber = display.value.split(/[+\-×÷]/).pop();

    if (currentNumber.includes(".")) {
      return;
    }
  }

  display.value += item;
}

function calculate() {
  const resdv = display.value.replaceAll("×", "*").replaceAll("÷", "/");
  const parts = resdv.split(/([+\-*/])/);

  if (
    resdv.includes("+") ||
    resdv.includes("-") ||
    resdv.includes("*") ||
    resdv.includes("/")
  ) {
    if (resdv.includes("-")) {
      const partsmaines = resdv.split("-");
      const resalt = partsmaines.reduce((a, b) => Number(a) - Number(b));
      display.value = resalt;
    }

    if (resdv.includes("+")) {
      const partsadd = resdv.split("+");
      const resalt = partsadd.reduce((a, b) => Number(a) + Number(b));
      display.value = resalt;
    }

    if (resdv.includes("*")) {
      const partmulty = resdv.split("*");
      const resalt = partmulty.reduce((a, b) => Number(a) * Number(b));
      display.value = resalt;
    }

    if (resdv.includes("/")) {
      const partdepart = resdv.split("/");
      const resalt = partdepart.reduce((a, b) => Number(a) / Number(b));
      display.value = resalt;
    }
  }
  if (isNaN(display.value)) {
    display.value = "Error";
    return;
  }
}

/////////////////////////////

// display.value = eval(resdv);

///////////////////////////////

// function calculate() {
//   const resdv = display.value.replaceAll("×", "*").replaceAll("÷", "/");

//   const parts = resdv.split(/([+\-*/])/);

//   for (let i = 0; i < parts.length; i++) {
//     if (parts[i] === "*" || parts[i] === "/") {
//       const num1 = Number(parts[i - 1]);
//       const num2 = Number(parts[i + 1]);

//       let result;

//       if (parts[i] === "*") {
//         result = num1 * num2;
//       }

//       if (parts[i] === "/") {
//         result = num1 / num2;
//       }

//       parts.splice(i - 1, 3, result);
//       i -= 2;
//     }
//   }

//   let result = Number(parts[0]);

//   for (let i = 1; i < parts.length; i += 2) {
//     const operator = parts[i];
//     const number = Number(parts[i + 1]);

//     if (operator === "+") {
//       result += number;
//     }

//     if (operator === "-") {
//       result -= number;
//     }
//   }

//   display.value = result;
// }

////////////////////////

// const display = document.getElementById("display");

// function clearDisplay() {
//   display.value = "";
// }

// function deleteNumber() {
//   display.value = display.value.slice(0, -1);
// }

// function addNumber(item) {
//   if (display.value === "Error") {
//     display.value = "";
//   }

//   const operators = ["+", "-", "×", "÷"];
//   const lastCharacter = display.value[display.value.length - 1];

//   if (item === ".") {
//     if (lastCharacter === ".") {
//       return;
//     }

//     if (operators.includes(lastCharacter)) {
//       display.value += "0.";
//       return;
//     }

//     const currentNumber = display.value.split(/[+\-×÷]/).pop();

//     if (currentNumber.includes(".")) {
//       return;
//     }
//   }

//   if (item === "0" && display.value === "0") {
//     return;
//   }

//   display.value += item;
// }

// function operator(item) {
//   if (display.value === "" || display.value === "Error") {
//     return;
//   }

//   item = item.replaceAll("*", "×").replaceAll("/", "÷");

//   const operators = ["+", "-", "×", "÷"];
//   const lastCharacter = display.value[display.value.length - 1];

//   if (operators.includes(lastCharacter)) {
//     display.value = display.value.slice(0, -1) + item;
//     return;
//   }

//   if (lastCharacter === ".") {
//     display.value += "0";
//   }

//   display.value += item;
// }

// function percentNumber() {
//   if (display.value === "" || display.value === "Error") {
//     return;
//   }

//   const parts = display.value.split(/([+\-×÷])/);

//   const lastNumberIndex = parts.length - 1;
//   const lastNumber = Number(parts[lastNumberIndex]);

//   if (Number.isNaN(lastNumber)) {
//     return;
//   }

//   if (parts.length === 1) {
//     parts[lastNumberIndex] = lastNumber / 100;
//     display.value = parts.join("");
//     return;
//   }

//   const operatorIndex = parts.length - 2;
//   const previousNumber = Number(parts[operatorIndex - 1]);
//   const currentOperator = parts[operatorIndex];

//   if (currentOperator === "+" || currentOperator === "-") {
//     parts[lastNumberIndex] = (previousNumber * lastNumber) / 100;
//   } else {
//     parts[lastNumberIndex] = lastNumber / 100;
//   }

//   display.value = parts.join("");
// }

// function calculate() {
//   if (display.value === "" || display.value === "Error") {
//     return;
//   }

//   let expression = display.value
//     .replaceAll("×", "*")
//     .replaceAll("÷", "/");

//   if (/[+\-*/.]$/.test(expression)) {
//     expression = expression.slice(0, -1);
//   }

//   const parts = expression.split(/([+\-*/])/);

//   for (let i = 0; i < parts.length; i++) {
//     if (parts[i] === "*" || parts[i] === "/") {
//       const num1 = Number(parts[i - 1]);
//       const num2 = Number(parts[i + 1]);

//       if (parts[i] === "/" && num2 === 0) {
//         display.value = "Error";
//         return;
//       }

//       const result =
//         parts[i] === "*"
//           ? num1 * num2
//           : num1 / num2;

//       parts.splice(i - 1, 3, result);
//       i -= 2;
//     }
//   }

//   let result = Number(parts[0]);

//   for (let i = 1; i < parts.length; i += 2) {
//     const operator = parts[i];
//     const number = Number(parts[i + 1]);

//     if (Number.isNaN(number)) {
//       display.value = "Error";
//       return;
//     }

//     if (operator === "+") {
//       result += number;
//     }

//     if (operator === "-") {
//       result -= number;
//     }
//   }

//   if (!Number.isFinite(result)) {
//     display.value = "Error";
//     return;
//   }

//   display.value = result;
// }
