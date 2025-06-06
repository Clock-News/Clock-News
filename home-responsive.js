const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const openIcon = document.getElementById('openIcon');
  const closeIcon = document.getElementById('closeIcon');

  menuToggle.addEventListener('click', () => {
    // Show or hide menu
    navLinks.classList.toggle('show-menu');

    // Swap icons
    const isMenuOpen = navLinks.classList.contains('show-menu');
    openIcon.style.display = isMenuOpen ? 'none' : 'block';
    closeIcon.style.display = isMenuOpen ? 'block' : 'none';
  });
