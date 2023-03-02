/* JS는 html을 불러오고 html 구조를 수정하고 추가할 수 있다. document(=HTML)는 객체다. 
   document.title == 'momentum' --> document.title = "TodoApp"으로 써서 document의 일부인 타이틀을 변경 가능
   html을 먼저 불러오고 JS를 나중에 불러오기 때문에 JS에 저장된 document 구성요소 표기가 우선이다. 
   console.dir(document)로 객체의 속성을 확인할 수 있다. */

/* console.dir(title);로 id가 title인 html요소의 속성 및 속성값 확인 가능 
   console.dir(title.autofocus), console.dir(title.className)
   아래 예시처럼 텍스트 내용이라던가 클래스 이름도 바꿀수 있다. html에서 id는 잘 쓰지 않고 보통 class만 쓰거나 둘 다 쓴다. id는 중복 안됨!
   
   getElementsByClassName는 클래스이름이 같은 모든 요소를 배열으로 가져옴. 그래서 CSS식으로 쓸 수 있는 querySelector를 더 많이 쓴다.
   getElementsByTagName, getElementsByName도 쓸 수 있음. name은 html 속성이고 class랑 문법이 비슷하다. 
   querySelector는 해당되는 클래스가 여러개가 있어도 처음 하나의것만 가져온다. 조건에 맞는걸 다 가져오려면 querySelectorAll을 사용함
   querySelector 안에는 id기호 #와 class기호 .을 써줘야된다. getElementById는 id값을 찾는거라 써줄필요 없다. */

const title = document.getElementById("title");

// const hellos = document.getElementsByClassName("hello");
const hello = document.querySelector(".hello h1");
/* console.log(hello);

hello.innerText = "Click me!";
hello.className = "hello";
hello.style.color = "black";
console.log(hello.className); */

/* event : JS는 HTML 요소를 가져와서 이벤트를 실행시킬수 있는데, ( 이벤트로 바꿀 요소는 console.dir()을 통해서 on이 붙어있는 속성을 찾으면된다. )
   예를 들어 클릭, 마우스오버, 스크롤 등이 있다. 동작을 감지해 HTML요소를 변화시킨다.
   html요소를 변수로 선언해(권장) addEventListener 함수를 붙이고, 그 안에 감지할 동작을 입력한 다음
   두번째 매개변수로 실행시킬 함수를 입력한다. function(){}이어도 되고 미리 입력한 함수여도 된다.
   
   다만 정의된 함수의 경우, 함수를 JS에서 받아서 이벤트시 실행시켜야하기 때문에 일반적인 함수 실행문처럼 
   뒤에 ()를 붙이는게 아니라 그냥 콜백함수의 이름만 입력한다. window는 브라우저 객체다.
   document는 html 파일 객체고 그 안에서 head, body, head 및 body안의 구성요소들을 불러 올 수 있다.
   div같은 요소들은 querySelector 및 getElementById같은 명령어를 이용해 불러온다. */

const helloColor = [ "#02facd", "#161616", "#612283", "#dc1582", "#17af81", "#71dc29"];
const colorIndex = Math.floor(Math.random() * helloColor.length); 

function clickTitle() {
 /* hello.style.color = helloColor[colorIndex];
  const currentColor = hello.style.color;
  let newColor;
  if ( currentColor === "black"){
    newColor = "red";
  } else {
    newColor = "black"
  }

  hello.style.color = newColor; */

  hello.classList.toggle('active');
}

hello.addEventListener("click", clickTitle);

/* function mouseEnterTitle() {
  hello.innerText = "Mouse is here!";
}

function mouseLeaveTitle() {
  hello.innerText = "Mouse is gone!";
}

function resizeWindowColor() {
  document.body.style.backgroundColor = "#ff9933";
}

function copyText(){
  alert("copier!")
}

function disconnectInternet() {
  alert("No Internet connection!");
}

function connectInternet() {
  alert("Your internet is goood");
}

hello.addEventListener("mouseenter", mouseEnterTitle);
hello.addEventListener("mouseleave", mouseLeaveTitle);

window.addEventListener("resize", resizeWindowColor);
window.addEventListener("copy", copyText);
window.addEventListener("offline", disconnectInternet);
window.addEventListener("online", connectInternet); */

/* JS에서 스타일작업은 비추함. CSS 파일에서 하는게 제일 좋다.
   클래스를 지정해놓고 원하는 요소에 클래스를 추가/제거하는 방법을 사용한다.
   반복되는 클래스이름(string)을 변수에 저장해서 사용하면 실수를 줄이는데 많은 도움이 된다. 
   왜냐하면 글자하나만 틀려도 JS는 작동되지 않기 때문. 
   
   만약에 element.className으로 클래스를 바꾸면 기존의 클래스가 삭제되고 새로 입력된 클래스가 들어간다. 
   그리고 클래스 이름을 바꿀경우엔 JS뿐 아니라 CSS도 바꿔줘야된다. 이런 단점 때문에 classList라는 클래스 목록 객체를 사용한다.
   element.classList.add("클래스"), element.classList.remove("클래스"), element.classList.contains("클래스")를 사용해
   원래 클래스를 놔두고 추가/제거/확인한다. 더 간단한 방법으로는 element.classList.toggle("클래스")가 있다.
   스위치처럼 껐다가 켰다가 할 수 있는, add remove contains의 역할을 혼자 다 할 수 있는 유용한 함수다. */

