// okay
import { isEscEvent, renderErrorTemplate, renderSuccessTemplate } from './util.js';
import { sendData } from './api.js';
import { clearEffects } from './photoEffects.js';
import { clearScale } from './photoScale.js';
import { hashTagInputHandler, commentInputHandler } from './validation.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const uploadCancel = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

submitButton.addEventListener('click', () => {
  clearEffects();
  clearScale();
});

const modalCloseHandler = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  clearEffects();
  clearScale();
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

const closeUploadOverlay = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      closeUploadOverlay();
      renderSuccessTemplate();
    },
    () => renderErrorTemplate(),
    new FormData(evt.target),
  );
});

uploadCancel.addEventListener('click', modalCloseHandler);

uploadInput.addEventListener('click', modalOpenHandler);

commentInput.addEventListener('input', commentInputHandler);

commentInput.addEventListener('keydown', removeCommentInputHandler);

hashtagInput.addEventListener('input', hashTagInputHandler);

hashtagInput.addEventListener('keydown', removeHashtagInputHandler);

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    modalCloseHandler();
  }
});
