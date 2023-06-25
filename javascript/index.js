AOS.init();

import './modal.js';
import './swiper.js';

window.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('scroll', () => {
  let scrollPosition = document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  if (scrollPosition > 0) {
    header.classList.add('--active');
  } else {
    header.classList.remove('--active');
  }
  const videoBtn = document.querySelector('.section-about__button');
  const video = document.querySelector('#video');
  let isVideoLoaded = false;

  function playVideo() {
    if (!isVideoLoaded) {
      video.load();
      video.setAttribute('preload', 'metadata');
      video.addEventListener('loadedmetadata', () => {
        isVideoLoaded = true;
        video.play();
      });
    } else {
      video.play();
    }
    video.setAttribute('controls', '');
    videoBtn.classList.add('section-about__button_active');
  }

  function pauseVideo() {
    videoBtn.classList.remove('section-about__button_active');
    video.removeAttribute('controls');
  }

  videoBtn.addEventListener('click', () => {
    if (video.paused) {
      playVideo();
    } else {
      video.pause();
      pauseVideo();
    }
  });

  video.addEventListener('pause', pauseVideo);
});
