"use strict"

document.addEventListener("keypress", handleKeyPress);

const whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const blackKeys = ['W', 'E', 'T', 'Y', 'U'];

function handleKeyPress(e) {
  const keyPressed = e.key.toUpperCase();
  if (whiteKeys.includes(keyPressed) || blackKeys.includes(keyPressed)) {
    createSoundObject(keyPressed).play();
  }
}

function createSoundObject(keyPressed) {
  const audio = new Audio(`keys/${keyPressed}.mp3`);
  return audio;
}



