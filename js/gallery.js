/* ==========================================================================
   LIGHTBOX GALLERY JS — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const lightboxModal = document.querySelector('.lightbox-modal');
  if (!lightboxModal) return;

  const lightboxImg = lightboxModal.querySelector('.lightbox-content');
  const closeBtn = lightboxModal.querySelector('.lightbox-close');
  const prevBtn = lightboxModal.querySelector('.lightbox-prev');
  const nextBtn = lightboxModal.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item-trigger');

  let imagesList = [];
  let currentImageIdx = 0;

  galleryItems.forEach((item, index) => {
    const imgSrc = item.getAttribute('data-img-src') || item.querySelector('img')?.getAttribute('src');
    if (imgSrc) {
      imagesList.push(imgSrc);
      item.addEventListener('click', (e) => {
        e.preventDefault();
        currentImageIdx = index;
        openLightbox(imagesList[currentImageIdx]);
      });
    }
  });

  const openLightbox = (src) => {
    if (lightboxImg) lightboxImg.src = src;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNext = () => {
    currentImageIdx = (currentImageIdx + 1) % imagesList.length;
    if (lightboxImg) lightboxImg.src = imagesList[currentImageIdx];
  };

  const showPrev = () => {
    currentImageIdx = (currentImageIdx - 1 + imagesList.length) % imagesList.length;
    if (lightboxImg) lightboxImg.src = imagesList[currentImageIdx];
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
