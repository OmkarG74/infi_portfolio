/* ==========================================================================
   MAIN JS — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-loaded');

  // 1. Sticky Navbar Scroll Effect
  const navbarWrapper = document.querySelector('.navbar-custom-wrapper');
  if (navbarWrapper) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbarWrapper.classList.add('scrolled');
      } else {
        navbarWrapper.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Active Link Highlighting based on current URL path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link, .dropdown-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggleBtn = parentDropdown.querySelector('.dropdown-toggle');
        if (toggleBtn) toggleBtn.classList.add('active');
      }
    }
  });

  // 3. Scroll Reveal Animations via Intersection Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '50px 0px 0px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => {
      el.classList.add('is-visible');
      el.classList.add('is-revealed');
    });
  }

  // 4. Animated Number Counters
  const counterElements = document.querySelectorAll('.counter-value');
  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-count'), 10);
          const prefix = target.getAttribute('data-prefix') || '';
          const suffix = target.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * endValue);
            target.textContent = `${prefix}${currentValue}${suffix}`;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              target.textContent = `${prefix}${endValue}${suffix}`;
            }
          };

          window.requestAnimationFrame(step);
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.1 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // 5. Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('visible');
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
