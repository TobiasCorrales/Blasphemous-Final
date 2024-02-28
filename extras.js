let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideSound = document.getElementById('slideSound'); // Elemento de audio

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  slideSound.play(); // Reproduce el sonido al cambiar la diapositiva
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToPreviousMenu() {
    // Aquí puedes agregar el código para redirigir al usuario al menú anterior
    // Por ejemplo:
    window.location.href = "Blasphemous.html"
  }

document.addEventListener('DOMContentLoaded', () => {
  slides[currentSlide].classList.add('active');
});
