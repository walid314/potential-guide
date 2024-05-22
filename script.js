const btn = document.querySelector("img");
const audio = document.querySelector("audio");

const handleStartEvent = (event) => {
  event.preventDefault();  // Prevent default touch behavior
  btn.setAttribute("src", "clicked.jpg");
  audio.play();
};

const handleEndEvent = (event) => {
  event.preventDefault();  // Prevent default touch behavior
  btn.setAttribute("src", "notClicked.jpg");
};

// Add event listeners for both touch and mouse events
btn.addEventListener("touchstart", handleStartEvent);
btn.addEventListener("mousedown", handleStartEvent);
btn.addEventListener("touchend", handleEndEvent);
btn.addEventListener("mouseup", handleEndEvent);

// Ensure passive event listeners do not prevent default behavior
btn.addEventListener("touchstart", handleStartEvent, { passive: false });
btn.addEventListener("touchend", handleEndEvent, { passive: false });
