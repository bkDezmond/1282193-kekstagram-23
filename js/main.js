import { modalCloseHandler, modalOpenHandler, uploadInput, uploadCancel } from './uploadOverlay.js';
import { addInputHandler, addCommentInputHandler, hashtagInput, commentInput } from './validation.js';
import { renderPhotos } from './renderPhotos.js';
import { isEscEvent } from './util.js';

renderPhotos();

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    modalCloseHandler();
  }
});

uploadCancel.addEventListener('click', (modalCloseHandler));

uploadInput.addEventListener('click', (modalOpenHandler));

commentInput.addEventListener('input', (addCommentInputHandler));

hashtagInput.addEventListener('input', (addInputHandler));
