// Get the navigation bar and the links
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links a');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the "active" class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add the "active" class to the clicked link
    link.classList.add('active');

    // Get the target section and scroll to it
    const target = document.querySelector(link.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Check if the hero section is in view
  const hero = document.querySelector('.hero');
  if (scrollPosition < hero.offsetTop + hero.offsetHeight) {
    // Remove the "active" class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add the "active" class to the first link
    links[0].classList.add('active');
  }
});