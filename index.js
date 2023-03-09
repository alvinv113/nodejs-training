const calculate = require("./myOperations");
const operation = process.argv[3];
const a = +process.argv[2];
const b = +process.argv[4];

switch (operation) {
  case "+":
    console.log(calculate.addition(a, b));
    break;
  case "-":
    console.log(calculate.subtraction(a, b));
    break;
  case "*":
    console.log(calculate.multiplication(a, b));
    break;
  case "/":
    console.log(calculate.division(a, b));
    break;
  case "%":
    console.log(calculate.modulus(a, b));
    break;
  default:
    console.log("Choose a right operation, must be in the form of (numOne opt numTwo)");
    break;
}