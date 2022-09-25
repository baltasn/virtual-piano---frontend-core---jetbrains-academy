"use strict"

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
  const keyPressed = e.key;
  if (keys.includes(keyPressed.toUpperCase())) {
    console.log(`The '${keyPressed}' key is pressed.`)
  } else {
    console.log("WRONG KEY!!!");
  }
}

