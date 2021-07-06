import { isEscEvent } from './util.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const uploadCancel = document.querySelector('.img-upload__cancel');

const modalCloseHandler = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
};
const modalOpenHandler = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const removeCommentInputHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

const removeHashtagInputHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

export { modalCloseHandler, modalOpenHandler, removeCommentInputHandler, removeHashtagInputHandler, uploadInput, uploadCancel, uploadForm };
