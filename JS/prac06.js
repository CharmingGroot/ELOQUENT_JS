
function isEven(number) {
  let evenChecked = "짝수";
  let oddChecked = "홀수";
  if (number == 0) {
    return evenChecked;
  }
  else if (number == 1) {
    return oddChecked;
  }
  else if (number % 2 == 0) {
    return evenChecked;
  }
  else if (number % 2 == 1) {
    isEven(number - 2)
    return oddChecked;
  }
  else {
    isEven(number - 2)
  }
}