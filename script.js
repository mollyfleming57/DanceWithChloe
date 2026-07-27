const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const signupBtn = document.getElementById('signupBtn');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  signupBtn.classList.toggle('active');
});