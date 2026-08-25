/* Mobile Navigation & Interactive Handlers for Yatin Sanjeev Kanekar Portfolio */
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
      }
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        const icon = toggleBtn.querySelector('.material-symbols-outlined');
        if (icon) { icon.textContent = 'menu'; }
      }
    });
  }
});
