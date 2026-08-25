/* ==========================================================================
   CONTACT FORM JS — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = contactForm.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }
    });

    if (isValid) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
      }

      setTimeout(() => {
        contactForm.reset();
        requiredInputs.forEach(input => {
          input.classList.remove('is-valid');
        });
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i class="bi bi-send ms-2"></i>';
        }
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('d-none');
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 1200);
    }
  });
});
