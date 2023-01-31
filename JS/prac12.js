if (typeof (Storage) !== "undefined") {
  //localStorage => 값을 삭제하기 전까지는 접속한 브라우저에 값이 계속해서 남아있음, 현재 사용기기에만 남아있음. 도메인별로 따로 저장됨
  // 스토리지에 저장하면 같은 도메인내에서 페이지가 이동이 되더라도 값을 읽어올 수 있음.
  // 로그인 정보, 사용자 테마, 언어, 조건부(지역,동이름 등)리스트 형태의 조회 페이지
  // 특정 조회조건을 기억하도록 할 수 있음.
  // 근데 계속 기억하면 다음에 방문할때 초기화해줘야하니까 sessionStorage를 사용함
  localStorage.setItem("name", "choi go");

  let arr = ["a", "b"];

  // Storage는 문자열만 저장가능하기 때문에 obj나 arr같은 타입을 저장하고 싶을 때는 JSON.stringify()를 사용하여 문자열로 바꿔서 저장해야함.
  // 바꿔올 때는 JSON.parse()를 사용해야한다.
  localStorage.setItem("arr", JSON.stringify(arr));







  sessionStorage.setItem("name2", "gogogo");
  //sessionStorage => 브라우저 창을 닫는 순간 사라짐.
  // 단발성 조건들은 세션에 저장함


  // storage는 최대 5메가 저장가능하다.
  // 문자열로 보면 굉장히 많이 저장 가능.
  // 도메인별로 관리가 됨.
  // 로컬은 닫더라도 유지.
  // 세션은 닫으면 사라짐.
}