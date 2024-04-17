const btn = document.querySelector("img");

const audio = document.querySelector("audio");

btn.addEventListener("mousedown", () => {
  btn.setAttribute("src", "clicked.jpg");
  audio.play();
});

btn.addEventListener("mouseup", () => {
  btn.setAttribute("src", "notClicked.jpg");
});
