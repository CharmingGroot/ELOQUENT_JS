const ul = document.getElementById('color');
console.log(ul.childNodes); // 전체 노드 리스트를 반환합니다. 유사배열형태이며, forEach를 사용하여 반복가능합니다.

console.log(ul.children);

// HTMLCollection은 노드의 변경사항이 실시간으로 반영된다.
// NodeList는 실시간 반영이 안된다. but childNodes는 HTMLCollection과 같이 실시간으로 반영된다.

console.log(ul.firstChild); // 노드
console.log(ul.lastChild); // 노드

console.log(ul.firstElementChild); // 요소
console.log(ul.lastElementChild); // 요소 , 얘네를 더 많이 쓴다.