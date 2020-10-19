import $ from 'jquery';
import slick from 'slick-carousel';

const sliderCounter = document.querySelector('.advantages__slider-counter');
const advantagesList = document.querySelector('.advantages__list');

const sliderOptions = {
  infinite: false,
  arrows: true,
  dots: false,
  mobileFirst: false,
  prevArrow: '.advantages__button--prev',
  nextArrow: '.advantages__button--next',
};

const getSlideIndex = () => {
  const activeSlide = advantagesList.querySelector('.slick-current');

  return activeSlide.getAttribute('data-slick-index');
};

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

const setCounter = () => {
  const index = +getSlideIndex() + 1;
  const output = zeroPad(index, 2);

  sliderCounter.innerHTML = output;
};

export const initSlider = () => {
  $('.advantages__list').slick(sliderOptions);
  $('.advantages__list').on('afterChange', function (evt, slick, direction) {
    setCounter();
  });
};

