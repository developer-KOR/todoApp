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
const volumeBtn = document.querySelector(".volume_button");

const AUTO_PLAY = "autoplay";

audioTitle.innerText = audioFile[audioIndex].title;
audio.src = audioFile[audioIndex].src;
audio.autoplay = AUTO_PLAY;

audioWrap.prepend(audioTitle);
audioWrap.appendChild(audio);

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
