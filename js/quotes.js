const quotes = [{
    quote: "Y'all need some good ol' fashioned discipline.",
    author: "Edmund Duke",
  },
  {
    quote: "How can I be of service?",
    author: "Samir Duran",
  },
  {
    quote: "Lieutenant Kerrigan reporting.",
    author: "Sarah Kerrigan",
  },
  {
    quote: "En Taro Adun!",
    author: "Zeratul",
  },
  {
    quote: " I am ready.",
    author: "Artanis",
  },
  {
    quote: "How may I help?",
    author: "Tassadar",
  },
  {
    quote: "Battlecruiser operational.",
    author: "Battlecruiser",
  },
  {
    quote: "Somebody call for an exterminator?",
    author: "Ghost",
  },
  {
    quote: "Explorer reporting.",
    author: "Science Vessel",
  },
  {
    quote: "Wraith awaiting launch orders.",
    author: "Wraith",
  },
];

/* Math의 random() 및 floor() method를 사용해 0~9까지 랜덤한 숫자를 얻는다. round()는 반올림, ceil()은 올림, floor()는 내림.
   0~9는 quotes 배열의 index값을 나타낸다. 그리고 length를 이용해 배열의 길이를 알아낸다.
   Math.random()에 quotes.length를 곱해 Math.floor()안에 넣고 그 값을 quotes[]를 불러오는 index값으로 사용한다.
   마지막으로 명언과 저자를 각 지정한 html 요소에 innerText로 넣어서 표기한다. */

const phrase = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const random = quotes[Math.floor(Math.random() * quotes.length)];

phrase.innerText = random.quote;
author.innerHTML = `- <strong>${random.author}</strong> -`;