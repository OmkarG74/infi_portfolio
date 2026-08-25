/* ==========================================================================
   TAB FILTERS JS — YATIN SANJEEV KANEKAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length === 0 || filterItems.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      filterItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue || itemCategory.includes(filterValue)) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
