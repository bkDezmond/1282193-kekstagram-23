// okay
const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить данные');
      }
      return response.json();
    })
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить данные');
      } else {
        onSuccess();
      }
    })
    .catch(onFail);
};

export { getData, sendData };
