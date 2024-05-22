const btn = document.querySelector("img");
const audio = document.querySelector("audio");

// Function to handle start events (mousedown or touchstart)
const handleStartEvent = () => {
  btn.setAttribute("src", "clicked.jpg");
  audio.play();
};

// Function to handle end events (mouseup or touchend)
const handleEndEvent = () => {
  btn.setAttribute("src", "notClicked.jpg");
};

// Add event listeners for both touch and mouse events
btn.addEventListener("touchstart", handleStartEvent);
btn.addEventListener("mousedown", handleStartEvent);
btn.addEventListener("touchend", handleEndEvent);
btn.addEventListener("mouseup", handleEndEvent);
