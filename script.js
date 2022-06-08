//Кнопка переключения темы
//start
const buttonSwitchTheme = document.querySelector('.switch__slider');

buttonSwitchTheme.addEventListener('click', () => {
  buttonSwitchTheme.classList.toggle('switch__slider_active');
  buttonSwitchTheme.classList.toggle('switch__slider_active::before');
})
//finish

//функционирование формы
//start
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
//finish

//Бесконечный слайдер картинок
//start
const slides = document.querySelectorAll('.gradient-road__image');
const counterSlide = slides.length;
const btnNext = document.querySelector('.gradient-road__button_right');
const btnPrev = document.querySelector('.gradient-road__button_left');


let counter = 0;
slides.forEach(item => {
  item.style.left = counter * 690 + 'px';
  counter++;
})

btnNext.addEventListener('click', nextSlide);

btnPrev.addEventListener('click', nextSlide);


function nextSlide(){
  if (this.classList.contains('gradient-road__button_right')) {
    next();
  }

  else if (this.classList.contains('gradient-road__button_left')) {
    prev();
  }
}

function next() {
  btnNext.removeEventListener('click', nextSlide);
  let slides2 = document.querySelectorAll('.gradient-road__image');
  let slider = document.querySelector('.gradient-road__images');
  slides2.forEach(item => {
    item.style.left = item.offsetLeft - 690 + 'px';
  })
  
  setTimeout(() => {
    let slide = slides2[0].cloneNode(true);
    slide.style.left = (slides2.length - 1) *690 + 'px';
    slider.append(slide);
    slides2[0].remove();
    btnNext.addEventListener('click', nextSlide);
  }, 1000); 
}

function prev() {
  btnPrev.removeEventListener('click', nextSlide);
  let slides3 = document.querySelectorAll('.gradient-road__image');
  let slider1 = document.querySelector('.gradient-road__images');

  let slide = slides3[slides3.length - 1].cloneNode(true);
  slide.style.left = -690 + 'px';
  slider1.insertBefore(slide, slides3[0]);
  slides3[slides3.length - 1].remove();
  slides3 = document.querySelectorAll('.gradient-road__image');
  slides3.forEach(item => {
    item.style.left = item.offsetLeft + 690 + 'px';
  })

  setTimeout(() => {
    btnPrev.addEventListener('click', nextSlide);
  }, 1000);
}

//finish