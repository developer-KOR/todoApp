const a = document.querySelector(".plus-a");
const b = document.querySelector(".plus-b");

const c = document.querySelector(".minus-a");
const d = document.querySelector(".minus-b");

const e = document.querySelector(".times-a");
const f = document.querySelector(".times-b");

const g = document.querySelector(".divide-a");
const h = document.querySelector(".divide-b");

const i = document.querySelector(".powerof-a");
const j = document.querySelector(".powerof-b");


/* 덧셈 */
const plusValue = document.querySelector(".plus_result");
const plusBtn = document.querySelector(".calc_plus");

function plus (event){
  event.preventDefault();

  const x = a.value;
  const y = b.value;

  const numX = parseInt(x);
  const numY = parseInt(y);

  console.log(typeof numX, typeof numY);
  const plusResult = numX + numY;

  plusValue.innerText = plusResult;
}

plusBtn.addEventListener("click", plus)

/* 뺄셈 */
const minusValue = document.querySelector(".minus_result");
const minusBtn = document.querySelector(".calc_minus");

function minus (event){
  event.preventDefault();

  const x = c.value;
  const y = d.value;

  const numX = parseInt(x);
  const numY = parseInt(y);

  console.log(typeof numX, typeof numY);
  const minusResult = numX - numY;

  minusValue.innerText = minusResult;
}

minusBtn.addEventListener("click", minus)

/* 곱셈 */
const timesValue = document.querySelector(".times_result");
const timesBtn = document.querySelector(".calc_times");

function times (event){
  event.preventDefault();

  const x = e.value;
  const y = f.value;

  const numX = parseInt(x);
  const numY = parseInt(y);

  console.log(typeof numX, typeof numY);
  const timesResult = numX * numY;

  timesValue.innerText = timesResult;
}

timesBtn.addEventListener("click", times)

/* 나눗셈 */
const divideValue = document.querySelector(".divide_result");
const divideBtn = document.querySelector(".calc_divide");

function divide (event){
  event.preventDefault();

  const x = g.value;
  const y = h.value;

  const numX = parseInt(x);
  const numY = parseInt(y);

  console.log(typeof numX, typeof numY);
  const divideResult = numX / numY;

  divideValue.innerText = divideResult;
}

divideBtn.addEventListener("click", divide)

/* 제곱 */
const powerofValue = document.querySelector(".powerof_result");
const powerofBtn = document.querySelector(".calc_powerof");

function powerof (event){
  event.preventDefault();

  const x = i.value;
  const y = j.value;

  const numX = parseInt(x);
  const numY = parseInt(y);

  console.log(typeof numX, typeof numY);
  const powerofResult = numX ** numY;

  powerofValue.innerText = powerofResult;
}

powerofBtn.addEventListener("click", powerof)