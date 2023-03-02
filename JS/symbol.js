// Symbol은 원시 자료형이다.

// 심볼은 유일한 식별자를 만들고 싶을 때 사용할 수 있다.



// 여러 심볼은 동힐한 이름
const me = Symbol('ho');
const clone = Symbol('ho');

console.log(me == clone);

// 심볼을 사용하여 객체 속성에 대한 식별자를 만들 수 있다.

const people = {
  "김씨": "GF",
  "박씨": "GF",
  "김씨": "GF"
};

for (person in people) {
  console.log(person);
}

// 속성이 겹치는 것을 피하기위해 심볼을 사용할 수 있다.

const people2 = {
  [Symbol("김씨")]: "GF",
  [Symbol("박씨")]: "GF",
  [Symbol("김씨")]: "GF"
};

for (person in people2) {
  console.log(person);
}

// 위 반복문은 undefined를 리턴한다.
// Symbol 은 열거가 불가하기 때문에 반복도 불가하다.

//  따라서 객체의 속성들의 배열을 얻는 별도의 방법이 존재한다.
// 

const people3 = {
  [Symbol("김씨")]: "GF",
  [Symbol("박씨")]: "GF",
  [Symbol("김씨")]: "GF"
};

const symbols = Object.getOwnPropertySymbols(people3);
console.log(symbols); // 배열로 출력된다.
//  배열로 변환해주었으니 Map 을 사용하면 된다.

const value = symbols.map(symbol => people3[symbol]);
console.log(value);