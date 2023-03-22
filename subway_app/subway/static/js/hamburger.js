
// Hamburger Menu Code


function hamburger_menu_open() {
    let element = document.querySelector('.dropdown')
    element.style.display = "block"
}



function hamburger_menu_close() {
    let element = document.querySelector('.dropdown')
    element.style.display = "none"
}




// Slider Code 

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // show current slide
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// show first slide
showSlide();

// switch slides every 3 seconds
setInterval(nextSlide, 6000);




// Menu Code
