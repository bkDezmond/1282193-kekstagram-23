import { checkMaxLength } from './util.js';

const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_NAME_REG_EXP = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const addInputHandler = () => {
  hashtagInput.addEventListener('input', (evt) => {
    const tags = evt.target.value.split(' ');
    const isValid = tags.every((tag) => HASHTAG_NAME_REG_EXP.test(tag));
    if (tags.length > MAX_HASHTAGS) {
      evt.target.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    }
    else if (!isValid) {
      evt.target.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д.');
    }
    else {
      evt.target.setCustomValidity('');
    }
    evt.target.reportValidity();
  });
};

const addCommentInputHandler = () => {
  commentInput.addEventListener('input', (evt) => {
    const comments = evt.target.value;
    const commentLength = checkMaxLength(comments, MAX_COMMENT_LENGTH);
    if (!commentLength) {
      evt.target.setCustomValidity('длина комментария не может составлять больше 140 символов');
    }
    else {
      evt.target.setCustomValidity('');
    }
    evt.target.reportValidity();
  });
};

export { addInputHandler, addCommentInputHandler, hashtagInput, commentInput };