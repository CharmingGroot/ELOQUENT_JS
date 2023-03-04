// async & await

// 콜백지옥을 극복하기 위해 등장한 Promise
// Promise를 return하면 볼것도없이 .then 붙여주면된당

// then 체이닝을 통해 콜백지옥을 벗어날 수 있지만,
//  

// timer(1000, function () {
//   console.log('작업1');
//   timer(1000, function () {
//     console.log('작업2');
//     timer(1000, function () {
//       console.log('작업3');
//     });
//   });
// });


// await : 함수가 실행되길 기다려라!
// await가 붙어있는 Promise를 리턴하는 함수는 반드시 다른 함수 안에서 실행되어야 한다.

// 그 함수를 포함하는 함수는 async가 붙어있어야한다.

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}


// console.log('start');
// timer(1000).then(function (time) {
//   console.log('time:' + time);
//   return timer(time + 1000);
// }).then(function (time) {
//   console.log('time:' + time);
//   return timer(time + 1000);
// }).then(function (time) {
//   console.log('time:' + time);
//   console.log('end');
// })

async function run() {
  console.log('start');
  var time = await timer(1000); // await를 사용하면 timer(1000)의 결과값을 변수에 초기화할 수 있다.
  console.log('time:' + time);
  time = await timer(time + 1000);
  console.log('time:' + time);
  time = await timer(time + 1000);
  console.log('time:' + time);
  console.log('end')
}

async function run2() {
  console.log('parent start');
  await run(); // run() 함수는 내부적으로 await를 가진다. Promise를 가지기 때문에
  console.log('parent end'); // 얘를 run()이 실행을 마친 뒤 실행되도록 하려면 async await로 한 번 더 감싸준다.
}

// run2();
// console.log(run()); // pending상태의 promise이다.

console.log('parent parent start');
run2().then(function () {
  console.log('parent parent end')
})

// 위와같이 최상위에선 async를 사용하지 않고 .then()을 붙여도 된다. 왜? 함수가 Promise를 반환하니까.

