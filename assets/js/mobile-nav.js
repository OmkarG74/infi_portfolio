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

  // Touch / Click Support for Dropdowns on tablet & touch screens
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdownContainers.forEach(function(container) {
    const btn = container.querySelector('.nav-dropdown-btn');
    const dropMenu = container.querySelector('.dropdown-menu');

    if (btn && dropMenu) {
      btn.addEventListener('click', function(e) {
        if (window.innerWidth >= 1024) { // lg breakpoint
          const isOpen = dropMenu.classList.contains('opacity-100');
          // Close others
          dropdownContainers.forEach(function(other) {
            const otherMenu = other.querySelector('.dropdown-menu');
            if (otherMenu && other !== container) {
              otherMenu.classList.remove('opacity-100', 'translate-y-0', 'visible');
              otherMenu.classList.add('opacity-0', 'translate-y-2', 'invisible');
            }
          });
          if (!isOpen) {
            dropMenu.classList.remove('opacity-0', 'translate-y-2', 'invisible');
            dropMenu.classList.add('opacity-100', 'translate-y-0', 'visible');
          } else {
            dropMenu.classList.remove('opacity-100', 'translate-y-0', 'visible');
            dropMenu.classList.add('opacity-0', 'translate-y-2', 'invisible');
          }
        }
      });
    }
  });

  // Close desktop dropdowns on click outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-container')) {
      dropdownContainers.forEach(function(container) {
        const dropMenu = container.querySelector('.dropdown-menu');
        if (dropMenu) {
          dropMenu.classList.remove('opacity-100', 'translate-y-0', 'visible');
          dropMenu.classList.add('opacity-0', 'translate-y-2', 'invisible');
        }
      });
    }
  });
});

