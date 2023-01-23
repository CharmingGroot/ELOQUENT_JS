
function inputText(text) {
  let textArr = function sliceText(text) {
    for (i = 0; i < text.length; i++) {
      textArr[i] = text.slice(i, i + 1);
      console.log(i);
    }
  }
  let res = 0;


  let resB = function countBs() {
    for (i = 0; i < textArr.length; i++) {
      if (textArr[i] == "B") {
        return res++;
      } else {
        return res;
      }

    }
    return textArr + res;
  }

  return console.log(resB);
}

