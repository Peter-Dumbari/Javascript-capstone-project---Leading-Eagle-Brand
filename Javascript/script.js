const barcontainer = document.querySelector('.baricon');
const navLinks = document.querySelectorAll('.nav-link');

function barstogglers() {
  barcontainer.classList.toggle('change');
}

function toggleNavMenu() {
  const menu = document.querySelector('.nav-items');
  barcontainer.addEventListener('click', barstogglers);
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
  } else if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'none';
  }
}
// Function to remove active class from all nav-links
function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
}

// Loop through nav-links and add click event listener
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeActiveClass(); // Remove active class from any previously clicked nav-link
    link.classList.add('active'); // Add active class to clicked nav-link
  });
});

function addNavMenuToggleListener() {
  const toggleButton = document.querySelector('#nav-toggler');
  toggleButton.addEventListener('click', toggleNavMenu);
}

function removeNavMenuToggleListener() {
  const toggleButton = document.querySelector('#nav-toggler');
  toggleButton.removeEventListener('click', toggleNavMenu);
}

function checkScreenSize() {
  const toggleButton = document.querySelector('#nav-toggler');
  if (window.innerWidth <= 768) {
    toggleButton.addEventListener('click', addNavMenuToggleListener);
  } else {
    toggleButton.removeEventListener('click', removeNavMenuToggleListener);
    const navMenu = document.querySelector('.nav-items');
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  }
}

const navlinks = document.querySelectorAll('.nav-link');

function navlinkautoremover() {
  const menu = document.querySelector('.nav-items');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    barstogglers();
  }
}
navlinks.forEach((navlink) => {
  navlink.addEventListener('click', navlinkautoremover);
});
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
