var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");

// const A = parseInt(input[0]);
// const B = parseInt(input[1]);

function cal(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(A / B);
  console.log(A % B);
}

// cal(a, b);

// 10926번
const inputId = parseInt(input[0]);

function iDvalidator(inputId) {
  console.log(`${inputId}??!`);
}

// iDvalidator(inputId);

// 18108번

const inputYear = parseInt(input);

function calBudaYear(inputYear) {

  console.log(inputYear + 543);

}

// calBudaYear(inputYear);

// 10430번

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

function calRes(A, B, C) {
  let firstRes = (A + B) % C;
  let secondRes = ((A % C) + (B % C)) % C;
  let thirdRes = (A * B) % C;
  let fourthRes = ((A % C) * (B % C)) % C;

  console.log(firstRes);
  console.log(secondRes);
  console.log(thirdRes);
  console.log(fourthRes);
}

calRes(A, B, C);

// 2588번

