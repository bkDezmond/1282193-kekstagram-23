import { isEscEvent } from './util.js';
import { hashtagInput, commentInput } from './validation.js';

const uploadPopup = document.querySelector('.img-upload__overlay');
const openUploadPopup = document.querySelector('.img-upload__input');
const closeUploadPopup = document.querySelector('.img-upload__cancel');
const body = document.body;
const form = document.querySelector('.img-upload__form');

const modalCloseHandler = () => {
  uploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
};

openUploadPopup.addEventListener('click', () => {
  uploadPopup.classList.remove('hidden');
  body.classList.add('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    modalCloseHandler();
  }
});

closeUploadPopup.addEventListener('click', () => {
  modalCloseHandler();
});

commentInput.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
});

hashtagInput.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
});
