const audioFile = [
  {
    title: "Terran 1 BGM",
    src: "audio/Terran One.mp3"
  },
  {
    title: "Terran 2 BGM",
    src: "audio/Terran Two.mp3"
  },
  {
    title: "Terran 3 BGM",
    src: "audio/Terran Three.mp3"
  },
];

const audioIndex = Math.floor( Math.random() * audioFile.length )
const audioWrap = document.querySelector("#wrap .audio");
const audio = document.createElement("audio");
const audioTitle = document.createElement("figcaption");
const AUTO_PLAY = "autoplay";

audioTitle.innerText = audioFile[audioIndex].title;
audio.src = audioFile[audioIndex].src;
audio.autoplay = "autoplay";

audioWrap.prepend(audioTitle);
audioWrap.appendChild(audio);

