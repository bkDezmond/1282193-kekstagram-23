const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;

const checkMaxLength = (line, maxLength) => line.length <= maxLength;

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const renderErrorTemplate = () => {
  const errorFragment = document.createDocumentFragment();
  const errorFragmentTemplate = errorTemplate.cloneNode(true);
  errorFragment.append(errorFragmentTemplate);

  const closeError = errorFragment.querySelector('.error__button');
  const errorHandler = () => {
    const success = document.querySelector('.success');
    success.remove();
  };

  document.addEventListener('click', (evt) => {
    if (evt.target.className === 'success') {
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
    const success = document.querySelector('.success');
    success.remove();
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
