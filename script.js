let slideIndex = 0;
const contexts = [
  "You are the most beautiful thing I keep inside my heart.",
   "Among all the people in this world, you are the one I love the most.",
   "I love you more than I can say.",
   "I love you more than I can show.",
   "I love you more than you know. I love you more than you think.",
   "I have been through soo much this year, but thank you for being through every hardship with me.",
   "I know I wasnt great for you this year, but maybe I might become a bettter version of myself, anyways I love you and cant wait to see you, mwahhhhhhhhh",
];

showSlides();

// Automatic slideshow
function showSlides() {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  const contextElement = document.getElementById("image-context");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Update context text
  contextElement.textContent = contexts[slideIndex - 1];

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Manual navigation
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

// Dot navigation
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Audio toggle functionality
function toggleAudio() {
    const audio = document.getElementById('background-audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
