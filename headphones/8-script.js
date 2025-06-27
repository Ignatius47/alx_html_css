document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-icon');
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu && header) {
    hamburger.addEventListener('click', function () {
      header.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        header.classList.remove('menu-open');
      });
    });

    // Hide menu on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        header.classList.remove('menu-open');
      }
    });
  }
});
