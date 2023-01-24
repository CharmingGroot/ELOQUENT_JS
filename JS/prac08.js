function countChar(text) {
  let arr = [];
  let temp = text;

  // 개수 세기용 변수
  let cnt = 0;

  (() => {
    //countLength
    for (i = 0; i < temp.length; i++) {
      arr[i] = temp.slice(i, i + 1);
    }
    console.log(arr);

    // countBs
    let countBs = () => {
      for (i = 0; i < arr.length; i++) {
        // console.log(i);
        if (arr[i] == "B") {
          cnt++;
        } else {
          console.log(`${arr[i]}는 B가 아님`);
        }
      }
    };

    return countBs();
  })();

  return "B의 개수는 " + cnt;
}

