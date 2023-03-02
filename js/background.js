/* createElement("태그이름")으로 html 요소를 생성할 수 있다.
   아래와같이 변수로 선언해 속성값을 할당할수도 있음.
   생성한 html은 append appendChild(), prepend()로 붙이면된다. 각각 document안의 제일 앞, 뒤다.
   document안의 head body 어디에든 추가가능하다.
*/

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const ranImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${ranImg}`;
bgImg.classList.add("background");

document.body.append(bgImg);

