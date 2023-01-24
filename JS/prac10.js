let arr = ["a", "b", "c", "d"];
let newArr = [];
let a = function () {
  console.log(arr);
}

// 배열을 인수로 받아 동일한 요소를 반대 순서로 가지는 새로운 배열 생성
let reverseArray = function () {
  for (i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

let reverseArrayInPlace = function () {

}