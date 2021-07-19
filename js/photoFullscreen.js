import { isEscEvent } from './util.js';
import { renderComments } from './renderComments.js';

const fullscreenPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeFullscreenButton = document.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const body = document.body;
const COMMMENTS_STEP = 5;
const showFullscreen = (comments, likes, url, description) => {
  commentsContainer.innerHTML = '';
  body.classList.add('modal-open');
  fullscreenPicture.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  fullscreenPicture.querySelector('.comments-count').textContent = comments.length;
  fullscreenPicture.querySelector('.likes-count').textContent = likes;
  fullscreenPicture.querySelector('.big-picture__img img').src = url;
  fullscreenPicture.querySelector('.social__caption').textContent = description;
  fullscreenPicture.querySelector('.social__comments').content = renderComments(comments.slice(0, COMMMENTS_STEP));
  commentsLoader.addEventListener('click', () => {
    const commentsCount = commentsContainer.children.length;
    renderComments(comments.slice(commentsCount, commentsCount + COMMMENTS_STEP));
  });
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
