const btn = document.querySelector("img");

const handleStartEvent = (event) => {
  event.preventDefault();  // Prevent default touch behavior
  btn.setAttribute("src", "clicked.jpg");

  // Create a new audio element for overlapping sound
  const newAudio = new Audio("audio.wav");
  newAudio.play();
};

const handleEndEvent = (event) => {
  event.preventDefault();  // Prevent default touch behavior
  btn.setAttribute("src", "notClicked.jpg");
};

// Add event listeners for both touch and mouse events
btn.addEventListener("touchstart", handleStartEvent, { passive: false });
btn.addEventListener("mousedown", handleStartEvent);
btn.addEventListener("touchend", handleEndEvent, { passive: false });
btn.addEventListener("mouseup", handleEndEvent);
