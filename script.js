const buttonSlide = document.querySelector('.switch__slider');

buttonSlide.addEventListener('click', () => {
  buttonSlide.classList.toggle('switch__slider_active');
  buttonSlide.classList.toggle('switch__slider_active::before');
})

const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const buttonForm = document.querySelector('.form__button');


formInput.onfocus = () => {
  buttonForm.classList.add('form__button_active');
}

formInput.onblur = () => {
  buttonForm.classList.remove('form__button_active');
}

form.onsubmit = (event) => {
  event.preventDefault();
  formInput.value = 'Круто!';
  formInput.setAttribute("disabled", "disabled");
  formInput.style.cursor = "auto";
  buttonForm.classList.remove('form__button_active');  
}

buttonForm.onmousedown = (event) => {
  if (document.activeElement === formInput) {
    event.preventDefault();
  }
};