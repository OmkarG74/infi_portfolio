/* ==========================================================================
   HUMANIZED EXECUTIVE FORM HANDLER — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const formsToHandle = [
    { formId: 'contactForm', alertId: 'formSuccessAlert', defaultBtnText: 'Send Message →' },
    { formId: 'workWithMeForm', alertId: 'workWithMeSuccessAlert', defaultBtnText: 'Submit Inquiry →' }
  ];

  formsToHandle.forEach(({ formId, alertId, defaultBtnText }) => {
    const form = document.getElementById(formId);
    const successAlert = document.getElementById(alertId);

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        const val = input.value.trim();
        if (!val) {
          isValid = false;
          input.classList.add('border-red-500');
          input.classList.remove('border-border-hairline', 'border-emerald-500');
        } else {
          if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            isValid = false;
            input.classList.add('border-red-500');
            input.classList.remove('border-border-hairline', 'border-emerald-500');
          } else {
            input.classList.remove('border-red-500');
            input.classList.add('border-emerald-500');
          }
        }
      });

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Submitting...';
        }

        setTimeout(() => {
          form.reset();
          requiredInputs.forEach(input => {
            input.classList.remove('border-emerald-500', 'border-red-500');
            input.classList.add('border-border-hairline');
          });
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = defaultBtnText;
          }
          if (successAlert) {
            successAlert.classList.remove('hidden');
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 1000);
      }
    });
  });
});
