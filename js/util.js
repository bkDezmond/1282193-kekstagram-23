const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;

const checkMaxLength = (line, maxLength) => line.length <= maxLength;

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const renderErrorTemplate = (error) => {
  const errorFragment = document.createDocumentFragment();
  const errorFragmentTemplate = errorTemplate.cloneNode(true);
  if (error) {
    errorFragmentTemplate.querySelector('.error__title').textContent = 'Не удалось загрузить данные';
    errorFragmentTemplate.querySelector('.error__button').textContent = 'Ок';
  }

  errorFragment.append(errorFragmentTemplate);

  const closeError = errorFragment.querySelector('.error__button');
  const errorHandler = () => {
    const errorModal = document.querySelector('.error');
    errorModal.remove();
  };

  document.addEventListener('click', (evt) => {
    if (evt.target.className === 'error') {
      errorHandler();
    }
  });

  closeError.addEventListener('click', errorHandler);
  document.body.append(errorFragment);
};

const renderSuccessTemplate = () => {
  const successFragment = document.createDocumentFragment();
  const successFragmentTemplate = successTemplate.cloneNode(true);
  successFragment.append(successFragmentTemplate);

  const closeSuccess = successFragment.querySelector('.success__button');
  const successHandler = () => {
    const successModal = document.querySelector('.success');
    successModal.remove();
  };

  document.addEventListener('click', (evt) => {
    if (evt.target.className === 'success') {
      successHandler();
    }
  });

  closeSuccess.addEventListener('click', successHandler);
  document.body.append(successFragment);

};

export { renderErrorTemplate, renderSuccessTemplate, isEscEvent, checkMaxLength };
