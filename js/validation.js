// okay
import { checkMaxLength } from './util.js';

const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_NAME_REG_EXP = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;

const changeColorOnNotValid = (element) => {
  element.style.borderColor = 'red';

};

const changeColorOnValid = (element) => {
  element.style.borderColor = 'black';
};

const hashTagInputHandler = (evt) => {
  const tags = evt.target.value.split(' ');
  const isValid = tags.every((tag) => HASHTAG_NAME_REG_EXP.test(tag));
  if (tags.length > MAX_HASHTAGS) {
    evt.target.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    changeColorOnNotValid(evt.target);
  }
  else if (evt.target.value === '') {
    evt.target.setCustomValidity('');
    changeColorOnValid(evt.target);
  }
  else if (!isValid) {
    evt.target.setCustomValidity('Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д.');
    changeColorOnNotValid(evt.target);
  }
  else if (tags.some((value, index, arr) => arr.indexOf(value) !== index)) {
    evt.target.setCustomValidity('Хэштеги не должны повторяться');
    changeColorOnNotValid(evt.target);
  }
  else {
    evt.target.setCustomValidity('');
    changeColorOnValid(evt.target);
  }
  evt.target.reportValidity();
};

const commentInputHandler = (evt) => {
  const comment = evt.target.value;
  const isValidLength = checkMaxLength(comment, MAX_COMMENT_LENGTH);
  if (!isValidLength) {
    evt.target.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    changeColorOnNotValid(evt.target);
  }
  else {
    evt.target.setCustomValidity('');
    changeColorOnValid(evt.target);
  }
  evt.target.reportValidity();
};

export { hashTagInputHandler, commentInputHandler };
