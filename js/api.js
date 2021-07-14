import { renderErrorTemplate, renderSuccessTemplate } from './util.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photosArray) => {
      onSuccess(photosArray);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      renderSuccessTemplate();
    } else {
      renderErrorTemplate();
    }
  })
    .catch(() => {
      renderErrorTemplate();
    });
};

export { getData, sendData };
