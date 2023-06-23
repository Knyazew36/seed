AOS.init();


window.addEventListener('scroll', () => {
  let scrollPosition = document.documentElement.scrollTop
  const header = document.querySelector('.header__top')
  if (scrollPosition > 0) {
    header.classList.add('header__top-active')
  } else {
    header.classList.remove('header__top-active')
  }
})
