document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

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

  // Gallery lightbox (handles both photos and videos)
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.tagName === 'VIDEO') {
        lightboxVideo.src = item.src;
        lightboxVideo.style.display = 'block';
        lightboxImg.style.display = 'none';
        lightboxVideo.play();
      } else {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
      }
      lightbox.classList.add('active');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
    lightboxVideo.src = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

});