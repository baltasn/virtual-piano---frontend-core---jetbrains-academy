"use strict"

document.addEventListener("keypress", handleKeyPress);
document.addEventListener("keyup", handleKeyRelease);

const whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const blackKeys = ['W', 'E', 'T', 'Y', 'U'];

function handleKeyPress(e) {
  const keyPressed = e.key.toUpperCase();
  if (whiteKeys.includes(keyPressed) || blackKeys.includes(keyPressed)) {
    createSoundObject(keyPressed).play();
    pressKeyVisual(keyPressed);
  }
}
function createSoundObject(keyPressed) {
  const audio = new Audio(`keys/${keyPressed}.mp3`);
  return audio;
}
function pressKeyVisual(keyPressed) {
  const keyPressedEl = document.getElementById(`${keyPressed.toLowerCase()}Key`);
  keyPressedEl.classList.add("kbd--pressed");
}

function handleKeyRelease(e) {
  const keyReleased = e.key.toUpperCase();
  if (whiteKeys.includes(keyReleased) || blackKeys.includes(keyReleased)) {
    const keyReleasedEl = document.getElementById(`${keyReleased.toLowerCase()}Key`);
    keyReleasedEl.classList.remove("kbd--pressed");
  }
}





