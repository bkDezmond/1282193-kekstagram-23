import { modalCloseHandler, modalOpenHandler, uploadInput, uploadCancel, removeCommentInputHandler, removeHashtagInputHandler } from './uploadOverlay.js';
import { addInputHandler, addCommentInputHandler, hashtagInput, commentInput } from './validation.js';
import { renderPhotos } from './renderPhotos.js';
import { isEscEvent } from './util.js';
import './editPhotos.js';
import './photosEffects.js';

renderPhotos();

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
