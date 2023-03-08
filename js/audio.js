const audioFile = [
  {
    title: "Main Theme",
    src: "audio/Starcraft Main Title.mp3"
  },
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
  {
    title: "Protoss 1 BGM",
    src: "audio/Protoss One.mp3"
  },
  {
    title: "Protoss 2 BGM",
    src: "audio/Protoss Two.mp3"
  },
  {
    title: "Protoss 3 BGM",
    src: "audio/Protoss Three.mp3"
  },
  {
    title: "Zerg 1 BGM",
    src: "audio/Zerg One.mp3"
  },
  {
    title: "Zerg 2 BGM",
    src: "audio/Zerg Three.mp3"
  },
  {
    title: "Zerg 3 BGM",
    src: "audio/Zerg Three.mp3"
  },
];

const audioIndex = Math.floor( Math.random() * audioFile.length )
const audioWrap = document.querySelector("#wrap .audio");
const audio = document.createElement("audio");
const audioSrc = document.createElement("source");
const audioTitle = document.createElement("figcaption");
const volumeBtn = document.querySelector(".volume_button");

const AUTO_PLAY = "autoplay";

audioTitle.innerText = audioFile[audioIndex].title;
audioSrc.src = audioFile[audioIndex].src;
audioSrc.type = "audio/mp3"
audio.autoplay = AUTO_PLAY;

audioWrap.prepend(audioTitle);
audioWrap.appendChild(audio);
audio.appendChild(audioSrc);

function volume(e){
  e.preventDefault();
  
  if ( volumeBtn.classList.contains("off") ){
    audio.play();
    volumeBtn.innerText = "🔊";
    volumeBtn.classList.remove("off")
    volumeBtn.classList.add("on")

  } else if ( volumeBtn.classList.contains("on") ){
    audio.pause();
    volumeBtn.innerText = "🔈";
    volumeBtn.classList.remove("on")
    volumeBtn.classList.add("off")
  }
}

volumeBtn.addEventListener("click", volume)
