const keys = document.querySelectorAll(".key");

// Use Keyboard
function playKeyboardAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
// Use Mouse
function playMouseAudio(event) {
  const clickNode = event.target.parentNode;
  if (clickNode.className !== "key") return;
  const audio = document.querySelector(
    `audio[data-key="${clickNode.dataset.key}"]`
  );
  const key = document.querySelector(
    `.key[data-key="${clickNode.dataset.key}"]`
  );
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playKeyboardAudio);
window.addEventListener("click", playMouseAudio);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
