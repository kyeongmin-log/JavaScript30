const keys = Array.from(document.querySelectorAll(".key"));
const audio = Array.from(document.querySelectorAll("audio"));

function searchSound(key) {
  const playKey = keys.filter((ch) => ch.firstElementChild.textContent === key);
  const dataKey = playKey[0].getAttribute("data-key");
  const playAudio = audio.filter(
    (sound) => sound.getAttribute("data-key") === dataKey
  );

  return {
    audio: playAudio[0],
    key: playKey[0],
  };
}

window.addEventListener("keydown", (event) => {
  const playSound = searchSound(event.key.toUpperCase());
  playSound.key.classList.add("playing");
  playSound.audio.play();
});

window.addEventListener("keyup", (event) => {
  const playSound = searchSound(event.key.toUpperCase());
  playSound.key.classList.remove("playing");
});
