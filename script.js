"use strict"

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
  const keyPressed = e.key.toUpperCase();
  if (keys.includes(keyPressed)) {
    createSoundObject(keyPressed).play();
  }
}

function createSoundObject(keyPressed) {
  const audio = new Audio(`white_keys/${keyPressed}.mp3`);
  return audio;
}



