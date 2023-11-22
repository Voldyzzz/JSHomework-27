const body = document.querySelector("body");

body.style.backgroundImage = `url(images/${
  Math.floor(Math.random() * 9) + 1
}.jpg)`;
