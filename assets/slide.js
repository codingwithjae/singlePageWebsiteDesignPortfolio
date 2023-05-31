// Get the carousel and images
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

// Set the initial slide to the first image
let currentSlide = 0;

// Get the arrow buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Add event listeners to arrow buttons
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Move to previous slide
function prevSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  images[currentSlide].classList.add('active');
  scrollCarousel();
}

// Move to next slide
function nextSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add('active');
  scrollCarousel();
}

// Scroll the carousel to the current slide
function scrollCarousel() {
  const slideWidth = images[currentSlide].getBoundingClientRect().width;
  const slideMargin = parseInt(getComputedStyle(images[currentSlide]).marginLeft);
  const offset = (slideWidth + slideMargin) * currentSlide;
  carousel.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}

// Set the initial slide to be active
images[currentSlide].classList.add('active');
scrollCarousel();
