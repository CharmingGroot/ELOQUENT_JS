# ELOQUENT JAVASCRIPT 책을 공부한 기록입니다.

---

## localStorage
  - 문자열 값을 담는 저장공간입니다.
  - 값을 삭제하기 전까지는 접속한 브라우저에 계속하여 값이 유지됩니다. (but 현재 사용기기에만)
  - 도메인별로 따로 저장됩니다.
  - 로그인 정보, 사용자 테마, 언어 등의 값을 고려한 프로그래밍이 용이해집니다.
## sessionStorage
 - 마찬가지로 문자열 값을 담는 저장공간입니다.
 - localStorage와 달리 탭을 닫으면 초기화됩니다.
 - 사용자 조건부 입력양식 등을 활용한 프로그래밍에 용이합니다.
  
### 단,
 - Storage는 문자열만 저장가능하기 때문에 객체나 배열타입을 setItem()로 저장하고 싶을 때에는 JSON.stringify()를 사용하여 문자열로 바꾸어 저장해야합니다.
 - 값을 getItem할 때에도 마찬가지로 JSON.parse()를 사용하여 JavaScript값이나 객체를 생성합니다.


## this 바인딩

 - 메서드는 호출한 객체를 바인딩합니다.
 - 모든 함수는 고유의 this 바인딩이 존재합니다. 함수 호출 방식에 따라 그 값이 달라지기 때문에 function  키워드로 정의한 일반함수에서 주변 범위에있는 this를 참조할 수 없습니다.
 - 단, 화살표함수는 함수 고유의 this를 바인딩 하지 않고, 주변범위의 this바인딩을 참조할 수 있습니다.

## 프로토타입
- 대부분의 객체에는 속성외에도 프로토타입이라는 객체가 존재한다.

> 프로토타입은 속성을 대체하는 용도로 사용되는 객체입니다.

- 대부분의 객체에서는 Object.prototype을 직접 갖는 대신, 다양한 기본속성이 제공되는 별도의 객체를 갖습니다.
- 함수는 Function.prototype에서 파생되고, 배열은 Array.prototype에서 파생됩니다.

> Object.create를 사용하여 특정 프로토타입의 객체를 만들 수 있습니다(JAVA의 Interface와 비슷한 개념입니다.)

```JavaScript
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbits says ${line}`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak = "skrrrrr!!!";
// The killer rabbit says skrrrrr!!!!

```
### 프로토타입 요약

> 자바의 인터페이스를 생각하면 좋을 것 같다.
> 다만 자바의 인터페이스는 아랫놈이 윗놈 곳간에 쌀을 보관할 수 없지만
> JavaScript에서는 가능하다. 윗놈 곳간에 나만의 작고 소중한 쌀을 보관할 포대를 만들 수 있다. 

>  상속의 개념을 곁들여 추상적인 프로그래밍을 위해 설계된 것 같다.
> Object.create() 를 사용하여 특정 프로토타입의 객체를 생성할 수 있다는 것을 기억하자.


## 클래스

> 자바스크립트는 객체지향의 개념을 어느정도 비공식적으로 채택하였습니다.

- 클래스에서는 메서드와 속성을 포함한 객체유형의 외형(shape)을 정의하며, 이를 해당 클래스의 인스턴스 객체라고 합니다.

- 프로토타입은 메서드와 같이 클래스의 모든 인스턴스에서 동일한 값(메서드 등)을 공유하기 위한 속성을 정의하는데 사용합니다. (토끼의 type 처럼 인스턴스별로 다른 속성은 객체 자체에 저장해야합니다.)

- 따라서 클래스의 인스턴스를 생성하려면 적절한 프로토 타입에서 파생된 객체를 만들어야합니다.

- ++ 이 클래스의 인스턴스가 가지고있어야하는 고유 속성도 포함되어야합니다.

> 클래스의 인스턴스를 쉽게 정의하기 위한 <생성자>라는 것이 있습니다.

함수 호출 앞부분에 new 를 붙이면 해당 함수는 생성자로 동작합니다.
해당 함수는 적절한 프로토타입을 가진 객체로 생성되고, 호출 함수의 this를 바인딩하고 함수의 마지막에 반환됩니다.

> 생성자는 자동으로 prototype을 갖습니다.

prototype 속성은 Object.prototype에서 파생된 빈 일반객체를 갖습니다.
필요에 따라서 이 객체를 새로운 객체로 덮어쓰거나 새로운 속성을 추가할 수 있습니다.

### 클래스 요약

> 모든것을 자바와 엮어 생각하는 자바무새가 된 것 같다.
> new 생성자를 통한 호출함수의 인스턴스를 바인딩하는 것을 잘 기억하자.

---


## DOM

> 모든 html태그는 객체이다.

객체는 자바스크립트로 접근하고 제어할 수 있다.

```JavaScript
document.documentElement // html 태그
document.body // body 태그
document.head // head 태그

const el = document.getElementById('first'); // Id로 접근 가능하다.

const pList = document.getElementsByTagName('p');
pList; // p태그를 가진 리스트

document.getElementByClassName('link') // Class 이름으로 접근 가능하다.

document.querySelectorAll('.link'); // Class 이름으로 접근 가능하다.
document.querySelectorAll('#link'); // Id 이름으로 접근 가능하다.

document.querySelector('#first'); // 제일 처음 노드만 가져옴.


```

> node와 element는 구분됩니다.

### Node와 Element 접근 정리

|      | 모든노드                            | 요소노드                                        |
| ---- | ----------------------------------- | ----------------------------------------------- |
| 부모 | parentNode                          | parentElement                                   |
| 자식 | childNodes / firstChild / lastChild | children / firstElementChild / lastElementChild |
| 형제 | previousSibling / nextSibling       | previousElementSibling / nextElementSibling     |




1. document.createElement 로 요소를 만들고
2. document.createTextNode 로 요소 안에 넣을 텍스트 노드를 만든다.
3. appendChild를 통해 텍스트 노드를 요소안에 넣어준다.
4. appendChild를 통해 1-3 과정을 거쳐 만들어진 요소를 원하는 요소 하위에 추가한다.
 



## Event.target

> target 속성은 이벤트가 발생한 대상(객체)를 가리킨다.

다음과같이 해당 이벤트객체의 id를 가져올 수 있다

```javaScript
...
  (e)=>{
    console.log(e.target.id); // 해당 객체의 id를 콘솔에 출력
  }

```


## Map

> 값과 값을 연결하는 자료구조이다. 예를들어 이름과 나이를 매핑할 수 있다.


set, get, hash 메서드는 Map 객체의 인터페이스이다.


## Symbol

> symbol.js

## 반복자 인터페이스 

> for/of 반복문에 전달된 객체는 반복하여 처리할 수 있어야한다.























----

# CSS

## ::after

- 반드시 공백이 없어야한다. 공백이 있으면 적용이 안된다.

> JS로 CSS스타일 속성을 작성할 때에는 camelCase를 적용한다.


> 미리 작성해둔 CSS 스타일속성을 요소아이디.className = '선택자'; 로 원하는 시점에 지정할 수 있다.
>

## classList

> 앞서 말한 className은 수정할 때 손이 많이가서 잘 안쓴다.
> classList는 유사배열이다. add나 remove같은 활용도 높은 메서드들도 사용할 수 있다.