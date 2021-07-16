import { isEscEvent } from './util.js';

const fullscreenPicture = document.querySelector('.big-picture');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeFullscreenButton = document.querySelector('.big-picture__cancel');
const body = document.body;

const showFullscreen = (comments, likes, url) => {
  body.classList.add('modal-open');
  fullscreenPicture.classList.remove('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  fullscreenPicture.querySelector('.comments-count').textContent = comments.length;
  fullscreenPicture.querySelector('.likes-count').textContent = likes;
  fullscreenPicture.querySelector('.big-picture__img img').src = url;
  fullscreenPicture.querySelector('.social__comments').content = comments;
  fullscreenPicture.querySelector('.social__caption').textContent;
};

const closeFullscreen = () => {
  fullscreenPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

closeFullscreenButton.addEventListener('click', closeFullscreen);

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullscreen();
  }
});

export { showFullscreen };
