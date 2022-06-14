//Кнопка переключения темы
//start
const buttonsSwitchTheme = document.querySelectorAll('.switch__slider');
const theme = document.querySelector("#theme-link");

buttonsSwitchTheme.forEach(buttonSwitchTheme => {
  buttonSwitchTheme.addEventListener('click', () => {
    buttonsSwitchTheme.forEach(button => {
      button.classList.toggle('switch__slider_active');
      button.classList.toggle('switch__slider_active::before');
    })
    if (theme.getAttribute("href") == "./pages/index.css") {
      theme.href = "./pages/index_dark-theme.css";
    } else {
      theme.href = "./pages/index.css";
    }
  })
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
const textSlide = document.querySelectorAll('.gradient-road__title');
const subtextSlide = document.querySelectorAll('.gradient-road__subtitle');
const textCounter = textSlide.length;
let activeTextSlide = 0;

document.querySelector('.gradient-road__image').onload = () => {
  getWidth()
  init()
}

function getWidth() {
  let width = document.querySelector('.gradient-road__image').offsetWidth + 40;
  return width
}

function init() {
  let counter = 0;
  slides.forEach(item => {
    item.style.left = counter * getWidth() + 'px';
    counter++;
  })
  slidesIcon[activeIconIndex].style.left = 100 + 'px';
}

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
  slideText('next')
  let slides2 = document.querySelectorAll('.gradient-road__image');
  let slider = document.querySelector('.gradient-road__images');

  slides2.forEach(item => {
    item.style.left = item.offsetLeft - getWidth() + 'px';
  })
  
  setTimeout(() => {
    let slide = slides2[0].cloneNode(true);

    slide.style.left = (slides2.length - 1) * getWidth() + 'px';
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
  slideText('prev')
  let slides3 = document.querySelectorAll('.gradient-road__image');
  let slider1 = document.querySelector('.gradient-road__images');
  let slide = slides3[slides3.length - 1].cloneNode(true);

  slide.style.left = -getWidth() + 'px';
  slider1.insertBefore(slide, slides3[0]);
  slides3[slides3.length - 1].remove();
  slides3 = document.querySelectorAll('.gradient-road__image');

  slides3.forEach(item => {
    item.style.left = item.offsetLeft + getWidth() + 'px';
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

function slideText(direction) {
  deleClassActive()
  if (direction == 'next') {
    activeTextSlide++
    if (activeTextSlide === textCounter) {
      activeTextSlide = 0;
    }
  } else if (direction === 'prev') {
    activeTextSlide--;
    if (activeTextSlide < 0) {
      activeTextSlide = textCounter - 1;
    }
  }
  textSlide[activeTextSlide].classList.add('gradient-road__title_active');
  subtextSlide[activeTextSlide].classList.add('gradient-road__subtitle_active');
}

function deleClassActive() {
  textSlide.forEach(text => {
    text.classList.remove('gradient-road__title_active');
    
  })
  subtextSlide.forEach(text => {
    text.classList.remove('gradient-road__subtitle_active');
  })
}
//finish

//Слайдер велосипедов
//start
const btnList = document.querySelectorAll('.bicycle__menu-link');
const bikeList = document.querySelectorAll('.bicycle__list-card');
const bikeMenuItem = document.querySelectorAll('.bicycle__menu-item');
const bikeMenu = document.querySelector('.bicycle__menu');
let activeBike = bikeMenu.querySelector('.bicycle__menu-item_active');

bikeMenu.addEventListener('mouseenter', () => {
  bikeMenuItem.forEach(item => {
    item.classList.add('bicycle__menu-item_active');
  })
})

bikeMenu.addEventListener('click', () => {
  bikeMenuItem.forEach(item => {
    item.classList.add('bicycle__menu-item_active');
  })
})

bikeMenu.addEventListener('mouseleave', () => {
  bikeMenuItem.forEach(item => {
    if (item !== activeBike) {
      item.classList.remove('bicycle__menu-item_active')
    }
  })
})

btnList.forEach(btn => {
  btn.addEventListener('click', activeBtn);
})

function activeBtn() {
  removeClass();
  this.classList.add('bicycle__menu-link_active');
  if (this === btnList[0]) {
    bikeList[0].classList.add('bicycle__list-card_active');
    bikeMenuItem[0].classList.add('bicycle__menu-item_active');
    activeBike = bikeMenu.querySelector('.bicycle__menu-item_active');
  } else if (this === btnList[1]) {
    bikeList[1].classList.add('bicycle__list-card_active');
    bikeMenuItem[1].classList.add('bicycle__menu-item_active');
    activeBike = bikeMenu.querySelector('.bicycle__menu-item_active');
  } else if (this === btnList[2]) {
    bikeList[2].classList.add('bicycle__list-card_active');
    bikeMenuItem[2].classList.add('bicycle__menu-item_active');
    activeBike = bikeMenu.querySelector('.bicycle__menu-item_active');
  }
  bikeSliderActive = document.querySelector('.bicycle__list-card_active')
  bikeSlide = bikeSliderActive.querySelectorAll('.bicycle__item-card');
  bikeSlide[0].classList.add('bicycle__item-card_active');
} 

function removeClass() {
  btnList.forEach(btn => {
    btn.classList.remove('bicycle__menu-link_active');
  })
  bikeList.forEach(card => {
    card.classList.remove('bicycle__list-card_active');
  })
  bikeMenuItem.forEach(item => {
    item.classList.remove('bicycle__menu-item_active');
  })
}
//finish

//Слайдер велосипедов mobile
//start
let bikeSliderActive = document.querySelector('.bicycle__list-card_active')
let bikeSlide = bikeSliderActive.querySelectorAll('.bicycle__item-card');
const bikeDots = document.querySelectorAll('.bicycle__dot');

bikeDots.forEach(dot => {
  dot.addEventListener('click', changeSlideBike)
})

function changeSlideBike() {
  removeClassBike()
  this.classList.add('bicycle__dot_active');
  if (this === bikeDots[0]) {
    bikeSlide[0].classList.add('bicycle__item-card_active')
  }
  else if (this === bikeDots[1]) {
    bikeSlide[1].classList.add('bicycle__item-card_active')
  }
  else if (this === bikeDots[2]) {
    bikeSlide[2].classList.add('bicycle__item-card_active')
  }
}

function removeClassBike() {
  bikeSlide.forEach(slide => {
    slide.classList.remove('bicycle__item-card_active')
  })
  bikeDots.forEach(dot => {
    dot.classList.remove('bicycle__dot_active')
  })
}
//finish

//modal window

const buttonModal = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const body = document.querySelector('.page');

buttonModal.addEventListener('click', () => {
  buttonModal.firstElementChild.classList.toggle('header__button-line_active');
  modal.classList.toggle('modal_active');
  if (modal.classList.contains('modal_active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
})