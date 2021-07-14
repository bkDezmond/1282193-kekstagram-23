import { isEscEvent, renderErrorTemplate } from './util.js';
import { sendData } from './api.js';
import { FILTER_CLASS_NAMES, removeAllClasses, effectsSlider } from './photosEffects.js';
import { photoPreview, scaleClickHandler } from './editPhotos.js';


const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const uploadCancel = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');

submitButton.addEventListener('click', () => {
  removeAllClasses(photoPreview, FILTER_CLASS_NAMES);
  effectsSlider.classList.add('visually-hidden');
  photoPreview.style.filter = 'none';
  scaleClickHandler(0);
});

const modalCloseHandler = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  removeAllClasses(photoPreview, FILTER_CLASS_NAMES);
  photoPreview.classList.add('effects__preview--none');
  effectsSlider.classList.add('visually-hidden');
  photoPreview.style.filter = 'none';
  scaleClickHandler(0);
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

const setUploadOverlaySubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => renderErrorTemplate(),
      new FormData(evt.target),
    );
  });
};

export { modalCloseHandler, modalOpenHandler, removeCommentInputHandler, removeHashtagInputHandler, setUploadOverlaySubmit, closeUploadOverlay, uploadInput, uploadCancel, uploadForm };
