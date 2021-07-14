import { closeUploadOverlay, modalCloseHandler, modalOpenHandler, uploadInput, uploadCancel, removeCommentInputHandler, removeHashtagInputHandler, setUploadOverlaySubmit } from './uploadOverlay.js';
import { addInputHandler, addCommentInputHandler, hashtagInput, commentInput } from './validation.js';
import { renderPhotoElement } from './renderPhotos.js';
import { isEscEvent } from './util.js';
import { getData } from './api.js';
import './editPhotos.js';
import './photosEffects.js';

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    modalCloseHandler();
  }
});

uploadCancel.addEventListener('click', modalCloseHandler);

uploadInput.addEventListener('click', modalOpenHandler);

commentInput.addEventListener('input', addCommentInputHandler);

commentInput.addEventListener('keydown', removeCommentInputHandler);

hashtagInput.addEventListener('input', addInputHandler);

hashtagInput.addEventListener('keydown', removeHashtagInputHandler);

setUploadOverlaySubmit(closeUploadOverlay);

getData((photosArray) => {
  renderPhotoElement(photosArray);
});

