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
const sliderIcon = document.querySelector('.gradient-road__icons');
const slidesIcon = document.querySelectorAll('.gradient-road__icon');
const iconCounter = slidesIcon.length;
let activeIconIndex = 0;

function init() {
  let counter = 0;
  slides.forEach(item => {
    item.style.left = counter * 690 + 'px';
    counter++;
  })
  slidesIcon[activeIconIndex].style.left = 100 + 'px';
}

init()

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
  btnPrev.removeEventListener('click', nextSlide);
  slideIcon('next')

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
    btnPrev.addEventListener('click', nextSlide);
  }, 1000); 
}

function prev() {
  btnNext.removeEventListener('click', nextSlide);
  btnPrev.removeEventListener('click', nextSlide);
  slideIcon('prev')
  
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
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', nextSlide);
  }, 1000);
}


function slideIcon(direction) {
  slidesIcon[activeIconIndex].style.left = -100 + 'px';
  if (direction === 'next') {
    activeIconIndex++
    if (activeIconIndex === iconCounter) {
      activeIconIndex = 0;
    }
  } else if (direction === 'prev') {
    activeIconIndex--
    if (activeIconIndex < 0) {
      activeIconIndex = iconCounter - 1;
    }
  }
  setTimeout(() => {
    slidesIcon[activeIconIndex].style.left = 100 + 'px'
  }, 500)
}
//finish