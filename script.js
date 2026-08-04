document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Signup form - show/hide preferred day field
  const bookDanceSelect = document.getElementById('bookDance');
  const dayRequestGroup = document.getElementById('dayRequestGroup');

  if (bookDanceSelect) {
    bookDanceSelect.addEventListener('change', () => {
      if (bookDanceSelect.value === 'Yes') {
        dayRequestGroup.style.display = 'block';
      } else {
        dayRequestGroup.style.display = 'none';
      }
    });
  }
});