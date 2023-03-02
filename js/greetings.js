/* 
  form 태그 : 아래와 같이도 선언 가능
  input태그는 form 태그 안에 있어야 유효성 검사를 할 수 있다. (input의 속성 사용 가능)
  굳이 JS에서 유효성 검사를 하기보다는 HTML의 속성을 이용하는것이 더 좋다. ex) required, maxlength, placeholder ...

  form 태그 안의 button이나 input[type=submit]을 누르면 엔터 or 버튼클릭했을때 form에서 자동으로 submit event가 실행된다. 
  그럼 자동으로 페이지가 새로고침되면서 받으려했던 데이터가 날아간다.

  addEventListener가 동작을 감지 -> 실행할 function을 불러옴 -> 그 function의 매개변수에 event 정보가 저장됨
  -> 매개변수에 preventDefault()를 써서 이벤트 기본동작을 막음(form의 submit이후 새로고침같은거)
  addEventListener밖에다가 함수()로 쓰게되면 JS 자체적으로 한번만 실행되어 의미가 없다.
  이벤트리스너 안의 함수를 실행시키는 주체는 브라우저이고 그를 통해 이벤트의 object 정보를 받는다.

  const loginForm = document.getElementById("login-form")
  const loginInput = loginForm.querySelector("#login-form input");
  const loginButton = loginForm.querySelector("#login-form button"); 

  console.dir(loginInput) 을 통해서 input 객체의 value 속성을 확인할 수 있다. 
  loginButton.addEventListener("click", btnClick); 
  
  아래 예시는 이벤트리스너가 이벤트를 감지하고, 실행되는 함수가 이벤트를 매개변수로 받았을 때
  그 실행된 이벤트의 결과물을 객체형식으로 확인할 수 있는 방법이다. preventDefault를 쓰면 이벤트 실행이 막힌다.
  function onClick(다솜) {
    console.dir(다솜);
  }

  loginForm.addEventListener("click", onClick);

  변수이름 불러오는 법 : "문자열 " + 변수 or `문자 ${변수}`, 백틱기호를 활용하면 변수를 한 문장안에 다 집어넣을수 있다.
  문자열 변수는 대문자로 선언하는 관례가 있음. 혹은 구체적인 node를 가리키지 않는 덜 중요한 변수를 선언할때 사용함
  
  아래 예시는 유저가 이름을 입력했을때 인사를 띄움으로써 상호작용하는 방법을 보여준다.
  클래스를 추가/제거하는 방법을 이용해 form 입력할때는 h1을 숨기고 username을 받았을때 h1을 보여준다.   
  localStorage를 이용해 자체적으로 데이터를 save/load/delete 할 수 있다. setItem, getItem, removeItem 함수를 쓴다.
  ex) localStorage.setItem("key", "value") 형식으로 사용한다.

  paintGreetings 함수의 argument를 지우고, username 변수를 loginInput.value로 써서 따로 선언하지않고
  localStorage.getItem(USERNAME_KEY)을 paintGreetings 안에 변수 선언해 innerText로 불러오는 방법도 있다.
  다만 localStorage에서 데이터를 두번 load하는 형태라 추천하지않음
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userHello = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  userHello.innerText = `You are the Best! ${username}`;
  userHello.classList.remove(HIDDEN_CLASSNAME);
}

const isUsername = localStorage.getItem(USERNAME_KEY);

if ( isUsername === null ){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreetings(isUsername);
}

// placeholder 추가 제거
function focusInput (){
  loginInput.placeholder = '';
}

function focusOutput (){
  loginInput.placeholder = 'Write your name and enter!';
}

loginInput.addEventListener("focusin", focusInput);
loginInput.addEventListener("focusout", focusOutput);