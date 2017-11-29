function playSound(e) {
  //console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) {
    return; //stop function if no match found
  }
  audio.currentTime = 0; //rewind form begining
  audio.play();
  key.classList.add("playing");
}
function removeTra(e) {
  // if (e.propertyName !== "transform") return; // skip if transition isnt transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTra));

window.addEventListener("keydown", playSound);
