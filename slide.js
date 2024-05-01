const slides = document.querySelectorAll(".slide");
let counter = 0;
let direction = 1; // 1 for forward, -1 for backward

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter += direction;
  if (counter === slides.length || counter === -1) {
    direction = -direction; // Change direction when reaching the end or beginning
    counter += direction; // Adjust counter to move to the previous slide
    setTimeout(goNext, 2000); // Automatically switch to the previous slide after a timeout
    return;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

let slideInterval = setInterval(goNext, 2000);

slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => clearInterval(slideInterval));
  slide.addEventListener("mouseleave", () => {
    slideInterval = setInterval(goNext, 2000);
  });
});

window.addEventListener("load", () => {
  goNext();
});
