/* 현재위치로 날씨 불러오기
   navigator.geolocation.getCurrentPosition(s, f)로 현재위치를 불러올수 있음.
   s는 내 위치 허용시 실행하는 함수, f는 내 위치확인 차단시 실행하는 함수
   coords.latitude = 위도, coords.longitude = 경도. 위도-경도 순으로 표시
   fetch() : 원격으로 api를 호출할수있게 하는 함수, .then()은 api를 불러온뒤에 처리할일을 js에 알려주는 함수
   response.json()은 json형태의 데이터를 불러올때 사용, data가 api를 통해 받아온 JSON형식 데이터
*/
const API_KEY = "6cb933c00e6a3f48795f01357bf42b33";

function complete(position) {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")

      city.innerHTML = `${data.name}, ${data.sys.country}<br />`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function failure() {
  alert("I can't find you. Where are you?");
}

navigator.geolocation.getCurrentPosition(complete, failure);
