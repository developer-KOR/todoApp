const clock = document.querySelector("#clock");

/* setInterval : interval(시간간격)을 두고 반복적으로 함수를 실행시키는 명령어 
   첫번째 매개변수는 함수, 두번째는 시간이다. 단위는 ms 
   setInterval(sayHello, 2000); 형식으로 사용한다. 함수를 먼저 실행하고 setInterval을 설정해
   온전한 시계를 만들 수 있다. 아래 예시는 함수와 setInterval 둘 다 정상 작동된다.
   setTimeout : 얼마의 시간 후에 함수를 호출해 한번만 실행하는 명령어.
   setInterval이랑 사용방법이 같다. 다만 한번만 불러온다는게 다르다.
   setTimeout(sayHello, 2000); 형식으로 사용한다. 
   Date() : 시간을 나타내는 객체 / 변수로 선언해서 사용하는게 편함 
   padStart( 원래 str에서 바꾸고싶은 str의 length, 원하는 length가 아닐때 원래 str앞에 붙일 str)
   "2".padStart(2, "0") 이런식으로 사용. String()을 사용하면 변수를 string 타입으로 변환할 수 있다. */


function getClock(){
  const date = new Date();
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hr}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000)

/* Date()함수를 바로 선언하지 않고 앞에 new를 붙이는 이유 : 
  
  console에 typeof Date;를 입력해보시면 function 이라고 알려줍니다.
  JavaScript에는 생성자 함수라는 것이 있는데요.
  new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
  
  이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다.
  생성자 함수는 arguments를 받을 수 있습니다.
  console 에 const date = new Date();를 입력하여 date 변수를 선언하시고,

  typeof date;를 입력해보시면 object를 반환하는 것을 볼 수 있습니다.
  이렇게 생성한 date 객체를 우리는 이전시간에 배웠던대로
  object.property 와 같은 형식으로 사용할 수 있습니다.
  (강의 내용 중 #2.6 참고)

  이는 Python의 Class와 유사하며,
  더 궁금한 것이 있으시다면 구글에
  생성자 함수 (with JavaScript)에 대해 검색해보시기 바랍니다. */