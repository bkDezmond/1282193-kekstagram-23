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
  body.classList.add('modal-open');
  fullscreenPicture.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  fullscreenPicture.querySelector('.comments-count').textContent = comments.length;
  fullscreenPicture.querySelector('.likes-count').textContent = likes;
  fullscreenPicture.querySelector('.big-picture__img img').src = url;
  fullscreenPicture.querySelector('.social__caption').textContent = description;
  renderComments(comments.slice(0, COMMMENTS_STEP), comments.length);
  const showComments = () => {
    const commentsCount = commentsContainer.children.length;
    renderComments(comments.slice(0, commentsCount + COMMMENTS_STEP), comments.length);
    const newCommentsCout = commentsContainer.children.length;
    if (comments.length === newCommentsCout) {
      commentsLoader.classList.add('hidden');
    }
  };

  commentsLoader.addEventListener('click', showComments);
  const closeFullscreen = () => {
    fullscreenPicture.classList.add('hidden');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsLoader.removeEventListener('click', showComments);
  };

  closeFullscreenButton.addEventListener('click', closeFullscreen, { once: true });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeFullscreen();
    }
  }, { once: true });
};

export { showFullscreen };
