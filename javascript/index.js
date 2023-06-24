AOS.init();

import './modal.js';
window.addEventListener('scroll', () => {
  let scrollPosition = document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  if (scrollPosition > 0) {
    header.classList.add('--active');
  } else {
    header.classList.remove('--active');
  }
});
