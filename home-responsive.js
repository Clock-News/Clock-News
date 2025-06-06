const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isActive = navLinks.classList.contains('active');

  openIcon.style.display = isActive ? 'none' : 'block';
  closeIcon.style.display = isActive ? 'block' : 'none';
});
