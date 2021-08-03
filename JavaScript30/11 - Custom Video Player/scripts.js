"use strict";

const video = document.querySelector(".player__video");
const togglePlay = document.querySelector(".player__button");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const playerSlider = document.querySelectorAll(".player__slider");
const playerButton = document.querySelectorAll(".player__button");

function handleVideo() {
  if (video.paused) {
    video.play();
    togglePlay.textContent = "II";
  } else {
    video.pause();
    togglePlay.textContent = "►";
  }
}

togglePlay.addEventListener("click", handleVideo);
video.addEventListener("click", handleVideo);

video.addEventListener("timeupdate", () => {
  progressFilled.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
});

progress.addEventListener("click", (event) => {
  video.currentTime = event.offsetX;
});

playerSlider.forEach((data) => {
  data.addEventListener("click", () => {
    if (data.name === "volume") {
      video.volume = data.value;
    } else {
      video.playbackRate = data.value;
    }
  });
});

playerButton.forEach((data) => {
  data.addEventListener("click", () => {
    if (data.dataset.skip === "-10") {
      video.currentTime -= 10;
    } else {
      video.currentTime += 25;
    }
  });
});
//https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement
