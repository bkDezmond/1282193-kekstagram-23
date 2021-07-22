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

  document.body.append(errorFragment);

  const removeErrorModalHandler = (evt) => {
    if (evt.target.className === 'error') {
      document.removeEventListener('click', removeErrorModalHandler);
      const errorModal = document.querySelector('.error');
      errorModal.remove();
    }
  };

  document.addEventListener('click', removeErrorModalHandler);

  closeError.addEventListener('click', () => {
    const errorModal = document.querySelector('.error');
    errorModal.remove();
  });
};

const renderSuccessTemplate = () => {
  const successFragment = document.createDocumentFragment();
  const successFragmentTemplate = successTemplate.cloneNode(true);
  successFragment.append(successFragmentTemplate);

  const closeSuccess = successFragment.querySelector('.success__button');

  document.body.append(successFragment);

  const removeSuccessModalHandler = (evt) => {
    if (evt.target.className === 'success') {
      document.removeEventListener('click', removeSuccessModalHandler);
      const successModal = document.querySelector('.success');
      successModal.remove();
    }
  };

  document.addEventListener('click', removeSuccessModalHandler);

  closeSuccess.addEventListener('click', () => {
    const successModal = document.querySelector('.success');
    successModal.remove();
  });
};

export { renderErrorTemplate, renderSuccessTemplate, isEscEvent, checkMaxLength };
