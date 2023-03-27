// Initialize all tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Initialize lightbox
const tobii = new Tobii();



/* make the Nav-item active when click, ( let user know which pages he's in ) */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');


  navLinks.forEach((navLink) => {
    if (navLink.href === window.location.href) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }

    navLink.addEventListener('click', (event) => {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      event.target.classList.add('active');
    });
  });
});

