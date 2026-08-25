/* ==========================================================================
   CAROUSEL JS — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel-container-custom');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    const updateCarousel = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    }

    window.addEventListener('resize', updateCarousel);
  });
});
