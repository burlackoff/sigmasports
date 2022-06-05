const buttonSlide = document.querySelector('.switch__slider');

buttonSlide.addEventListener('click', () => {
  buttonSlide.classList.toggle('switch__slider_active');
  buttonSlide.classList.toggle('switch__slider_active::before');
})