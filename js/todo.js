/*
    todo-form 세팅하기
  1. html 파일에서 form태그, form > input태그를 만든다.
  2. submit시 실행할 toDoSubmit(e) 함수를 만든다.
  3. submit시 새로고침 방지를 위해 e.preventDefault()를 쓴다.
  4. input.value값을 변수에 저장한다.
  5. input.value값이 입력된후 submit 될 때 값을 ''로 초기화한다.
  6. list를 생성하는 함수를 실행시킨다. 매개변수에는 input.value값이 저장된 변수와 같은 이름을 쓴다.

    todo-list 만드는법
  1. ul태그를 html에 추가한다.
  2. 1의 태그들을 id값, 태그를 써서 변수로 지정한다.
  3. li, li > span을 createElement로 만든다.
  4. 만든 element들을 toDoList의 appendChild로 추가한다.
  5. toDoInput에 입력된 value를 span에 불러온다.

    todo-list 지우는법
  1. 삭제버튼에 addEventListener로 click 이벤트를 감지한다.
  2. 매개변수 event를 갖는 삭제기능 함수를 만든다.
  3. 여기서 매개변수는 click event이고, event의 target이 되는 삭제버튼의 부모요소가 지워져야된다.
  4. 그래서 'li'변수로 버튼의 부모인 li를 지정하고 remove()함수를 붙여 삭제할수있게 세팅한다.

    todo-list db에 저장하는법
  1. 할일 목록을 저장할 배열을 선언한다.
  2. 저장용 함수를 만든다.
  3. 1의 함수 코드를 localStorage.setItem("키", 리스트변수)으로 쓴다.
  4. 리스트변수(todos)는 저장할때 문자열로 바꿔준다.

    todo-list 불러오는법
  1. getItem으로 localStorage에서 todos를 불러온다.
  2. 문자열로 바꿨던 todos를 JSON.parse(todos)를 써서 JS에서 쓸수있는 배열로 변환한다. 
  3. todos를 let으로 선언한다음 savedTodos가 null이 아닐때 loadTodos 값을 todos에 재할당한다.
  4. forEach를 사용해 각각의 값에 함수를 실행한다. list를 불러오는 listTodo 함수를 쓰면된다.
  5. 위 방법이면 이미 저장됐던 list와 새로 추가될 list를 새로고침해도 db에서 없어지지않고 표기된다.

    todo-list 지우는법
  1. newTodo를 id와 text로 나누어서 객체로 선언한다.
  2. text에는 newTodo, id에는 랜덤한 숫자를 뽑을수있는 Date.now()를 할당한다.
  3. 그리고 span.innerText를 newToDo에서 newToDo.text로 바꾸고 list에 id를 추가한다. 
    (기본 세팅, id값을 찾아서 삭제하는 방법을 알려주시려 하는것같다)
  4. array의 filter method를 이용하면 기존 배열은 놔두고 필터링된 새로운 배열이 생성된다. forEach와 비슷한 기능이라 볼 수 있다.
    ex) const arr = [123, 4656, 3423, 29048, 10293, 3234]
        function arrFilter(int){ return int < 10000; }
        arr.filter(arrFilter); 화살표함수도 사용가능

        결과 : (4) [123, 4656, 3423, 3234]

  5. event.target의 parentElement인 li의 id값이 클릭했을때 제대로 나오는지 console.log로 확인해보고, filter로 todos의 요소 하나하나에 함수를 적용시킨다.
  6. todos.filter(item => {})에서 item은 todos[n]중 하나다. deleteTodo가 delBtn 클릭으로 실행될때 item.id값이 li.id값과 같은 todo는 남겨두지 않는
     새로운 배열이 생성되게 되는것이다.
  7. 그리고 deleteTodo 마지막에 saveTodo()를 실행시켜야 localStorage에 변경사항이 저장이된다.
  8. Date.now()는 숫자지만 대입된 list.id는 문자열처리되기때문에 parseInt(list.id)로 숫자변환 시켜줘야된다.
*/

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");
const savedList = document.querySelector("ol#saved-list");

let todos = [];
const TODOS_KEY = "todos";

function deleteTodo(event){
  const list = event.target.parentElement;
  console.log(list.id);
  list.remove();
  todos = todos.filter(item => { return item.id !== parseInt(list.id)} )
  saveTodo();
}

function saveTodo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function listTodo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  list.id = newToDo.id;
  
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo)

  list.appendChild(span);
  list.appendChild(delBtn);
  toDoList.appendChild(list);
  saveTodo();
}

function toDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  listTodo(newTodoObj);
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if ( savedTodos !== null ){
  const loadTodos = JSON.parse(savedTodos);
  todos = loadTodos;
  loadTodos.forEach(listTodo);
    // 내가한방법 : loadTodos.forEach(item => { const loadLists = document.createElement("li"); loadLists.innerText = item; savedList.appendChild(loadLists); })
}

// placeholder 추가 제거
function focusInput (){
  toDoInput.placeholder = '';
}

function focusOutput (){
  toDoInput.placeholder = `What's your today's work?`;
}

toDoInput.addEventListener("focusin", focusInput);
toDoInput.addEventListener("focusout", focusOutput);
