// promise 는 비동기적이다.
// 주로 통신을 할 때 비동기적으로 프로그래밍한다.

// 브라우저와 웹서버가 페이지 리로드를 하지 않고도 자바스크립트를 이용하여 통신하는 것을 ajax라고 한다.

// fetch API

console.log(1);
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    return response.json();
  }).then(function (myJson) {
    console.log(myJson);
  });

console.log(2);

// 1과 2가 먼저 출력되고 fetch 함수의 결과는 나중에 출력된다.

var fetched = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(fetched);

// 어떤 함수의 리턴값이 Promise라면 비동기적으로 동작하는 함수일 가능성이 매우 높다.
// fetch함수가 정상적으로 실행되면 반환타입은 Response이다.
// 그 함수가 리턴한 값은 두 개의 메서드를 사용할 수 있다. => then과 catch

// then의 파라미터는 result
// catch의 파라미터는 reason

// then은 fetch를 통한 결과가 성공하였을 때, then으로 전달된 콜백함수가 호출되도록 약속됨.
// 결과값이 있다면, 첫번째 파라미터로 받을 수 있음


// catch는 fetch가 실패하였을 때 실행된다. catch는 실패 이유를 파라미터로 받는다.




// Promise Chaining 방식을 많이 사용한다.

// 정리.
// 1.  Promise를 사용한다 => Pending상태
// 2.  Resolved => .then()
//     Rejected => .catch()
// 3.  Pending => Promise
