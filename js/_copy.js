/* html파일에 css 및 js 파일을 연결해서 브라우저에서 실행시킨다.
   basic data types : 숫자(integer, float), 문자열(string)
   코드는 위에서부터 아래로 실행됨 */

/* 변수(variable) : const let var 쓴다음 이름 적어서 선언
   값을 일일히 수정하지않기위해 변수를 사용한다. JS 변수선언법 : camelCase 
   const = 재선언 재할당 X, let = 재선언 X 재할당 O, var = 모두가능 
   const가 기본값, 가끔 let 사용, var는 권장 X -> 왜냐하면 변수가 바뀌어도 알려주지 않기 때문 */

const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "nicolas";

console.log("Your new name is " + myName);

/* boolean = true or false 
   boolean 간단하게 이해하기 예시 
   I had a date with my girl friend yesterday. (true or false)
   I don't have a girl friend now. (null)
   I don't know "girl friend" meaning.
   "girl friend" word doesn't exist. (undefined) */

const amIFat = true;
const amISkinny = null; // 비어있는 값
let something; //undefined : 정의되지 않음

console.log(amIFat);
console.log(amISkinny, something);

/* array(배열) : 대량의 데이터를 효율적으로 관리하기 위한 방법이라 할 수 있다. 여러개의 변수를 한 배열안에 넣어서 사용 가능 
   시작과 끝은 []로, 각 요소를 쉼표로 구분, 특정 요소를 불러오려면 배열[n]으로 쓰면 된다. let처럼 각 요소들의 업데이트도 가능하다.
   ex) daysOfWeek[3] = "thu", 첫번째 요소는 daysOfWeek[0]이다. console.log(daysOfWeek[0])로 확인가능 */

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

/* push 메소드를 이용해 일요일 배열에 추가하기 */
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["사과", "피자", "양파"];
console.log(toBuy);

toBuy.push("삼겹살");
console.log(toBuy);
console.log(toBuy[1]);

/* object(객체) : 각 요소의 특성을 설명할때 필요한 데이터 저장방법 ex) 사람의 키, 몸무게, 생김새, 직업 등등 
   중괄호{}를 사용해서 선언한다. const object = {특성: 값} 형식, let처럼 특성과 그 값의 업데이트 및 생성도 가능하다.
   각 요소를 재할당하는것은 전혀 문제가 없다. 객체 자체를 바꾸려하면 오류가 생김 */

const me = {
  name: "이학진",
  height: "177.1cm",
  weight: "72kg",
  fat: true,
  points: 15,
};

console.log(me);
console.log(me.fat);

me.fat = false;
console.log(me.fat);

me.likeFood = "meat";
console.log(me);

me.points = me.points + 10;
console.log(me.points);

/* function : 코드를 재활용하기 위해 사용하는 코드 저장소. 
   function 함수이름(arguments){ 사용할코드 }로 선언한다. const 변수 = function(parameter1, parameter2, ...){코드}도 가능
   실행은 "함수이름(arg);" 방법으로 시키며 arg는 함수가 외부의 데이터를 받을때 사용하는 매개변수다. 데이터를 받는 순서가 중요하다.
   매개변수는 (a, b, c, ...)등 여러개도 집어넣어서 쓸 수 있다. 아래 예시는 객체.함수() 형식으로 만드는방법
   매개변수는 함수밖에서 사용할 수 없다. */

function plus(a, b) {
  console.log(a + b);
}

plus(25, 70);

const player = {
  name: "kenny",
  hello: function (otherName) {
    console.log("hello " + otherName + ". nice to meet you");
  },
};

player.hello(player.name);
player.hello("leo");

/* 객체와 함수를 이용해 계산기 만들기 */
const calc = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

calc.add(9, 4);
calc.minus(9, 4);
calc.times(9, 4);
calc.divide(9, 4);
calc.powerOf(9, 4);

/* return : 함수가 작업한 결과값을 반환하는 역할. console.log, alert과 다르게 그 함수값을 변수에 저장할 수 있게된다.
   그리고 화면에도 나타낼수 있게 해준다. 그러니까 실제적으로 값을 써먹을 수 있다는 말
   return 이후의 코드는 작동되지 않는다. */

   const calculator = {
    add: function (a, b) {
      return a + b;
    },
    minus: function (a, b) {
      return a - b;
    },
    times: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
    powerOf: function (a, b) {
      return a ** b;
    },
  };

  const plusResult = calculator.add(6, 5);
  const minusResult = calculator.minus(6, 5);
  const timesResult = calculator.times(6, 5);
  const divideResult = calculator.divide(6, 5);
  const powerResult = calculator.powerOf(6, 5);

// document.getElementById('root').innerText = plusResult + " " + minusResult +" "+ timesResult +" "+ divideResult + " " + powerResult;

/* conditional(조건문) : prompt()로 팝업을 띄워서 값을 전달하고 받는다. typeof으로 데이터타입을 알아본다. 
   parseInt는 문자열을 숫자로 변환 가능하다. parseInt는 문자열 중에서도 숫자로만 된 문자열만 숫자로 변환가능 
   NaN : Not A Number, isNaN은 값이 숫자인지 아닌지 알려주는 함수 + boolean값 반환, 조건문엔 true or false로 판별가능한 조건이 들어가야됨,
   true일때 첫번째 코드, false일떄 두번째 코드가 실행된다. && : 다 true면 true, || : 하나가 true면 true( AND, OR ) --> 조건문 여러개 삽입 가능
   a = b: 값을 할당, a == b: 값이 같다는 뜻, a === b: type까지 같다는 뜻, a !== b: a와 b가 같지않다 */
const age = parseInt( prompt("how old are you?") );

console.log(isNaN(age)); // console.log(typeof age, typeof parseInt(age));

if( isNaN(age) || age <= 0 ){
  console.log("Please write a real positive number")
} else if ( 0 < age < 18 ) {
  console.log("You are too young.") 
} else if ( age >= 18 && age <= 50 ) { 
  console.log("You can drink.") 
} else if ( age >= 51 && age <= 80 ) {
  console.log('술을 좀 줄이세요.')
} else if ( age > 80 ) {
  console.log("하고싶은대로 하세요.") 
}