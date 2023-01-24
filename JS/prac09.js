// 값을 받을 배열
let arr = [];
// arr를 가공하여 펼쳐주는 배열
let filteredArr = [];

let range = function range(start, end, step = 1) {
  let initNum = start;
  if (step > 1) {
    for (i = 0; i < end; i += step) {
      arr[i] = initNum;
      initNum += step;
    }
  } else if (step == 1) {
    for (i = 0; i < end; i++) {
      arr[i] = initNum;
      initNum++;
    }
  } else if (step < 0) {
    for (i = start; i >= end; i--) {
      arr[i] = initNum;
      initNum--;
    }
    arr.reverse();
  }
  filteredArr = [...arr];

  removeEmptySpace();

  return `range의 반환값 : ${filteredArr}`;
}

function sum() {
  console.log("sum함수 실행");
  let sumRes = 0;
  for (i = 0; i < filteredArr.length; i++) {
    sumRes += filteredArr[i];
  }
  return sumRes;
}

// 필터로 공백을 제거하여 배열의 내용을 변경
function removeEmptySpace() {
  filteredArr = arr.filter(() => true);
  // return console.log(` removeEmptySpace 실행 후 filteredArr : ${filteredArr}`);

}