import { renderPhotos } from './renderPhotos.js';
import { getData } from './api.js';
import { renderErrorTemplate } from './util.js';
import { debounce } from './utils/debounce.js';

const NUMBER_OF_UNIQUE_PHOTOS = 10;
const filterButtonsForm = document.querySelector('.img-filters__form');
const DEBOUNCE_TIME = 500;

const filterHandler = (evt) => {
  const currentButtons = document.querySelectorAll('.img-filters__button');
  currentButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');
  getData((photos) => {
    if (evt.target.id === 'filter-default') {
      renderPhotos(photos);
    }
    else if (evt.target.id === 'filter-random') {
      renderPhotos(photos.sort(() => Math.random() - 0.5).slice(0, NUMBER_OF_UNIQUE_PHOTOS));
    }
    else if (evt.target.id === 'filter-discussed') {
      renderPhotos(photos.sort((max, min) => min.comments.length - max.comments.length));
    }
  }, renderErrorTemplate);
};

filterButtonsForm.addEventListener('click', debounce(filterHandler, DEBOUNCE_TIME));
