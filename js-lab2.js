function sum(num1, num2) {
  return num1 + num2;
}

let Multi = (num1, num2) => {
  return num1 * num2;
};

function Sub(num1, num2) {
  return num1 - num2;
}

let Divion = (num1, num2) => {
  return num1 / num2;
};

console.log(`The Sum Result = ${sum(3, 7)}`);
console.log(`The Multiplication Result@ = ${Multi(3, 7)} `);

let result = Sub(10, 4);
let DivionResult = Divion(25, 5);
console.log(`The Sub Result = ${result} `);
console.log(`The Divion Result = ${DivionResult} `);
