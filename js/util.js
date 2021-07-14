const checkMaxLength = (line, maxLength) => line.length <= maxLength;

checkMaxLength(1, 1);

const getRandomNumber = (minNumber, maxNumber) => {
  if (maxNumber < minNumber) {
    throw new Error('Максимальное значение диапазона не может быть меньше минимального');
  }
  if (minNumber >= 0 && maxNumber >= 0) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  throw new Error('Диапазон может быть только положительный, включая ноль');
};

const getRandomItem = (array) => {
  const randomIndex = getRandomNumber(0, array.length);
  return array[randomIndex];
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const errorTemplate = document.querySelector('#error').content;

const renderErrorTemplate = () => {
  const errorFragment = document.createDocumentFragment('div');
  const errorFragmentTemplate = errorTemplate.cloneNode(true);
  errorFragment.append(errorFragmentTemplate);

  document.body.append(errorFragment);
};

const successTemplate = document.querySelector('#success').content;

const renderSuccessTemplate = () => {
  const successFragment = document.createDocumentFragment('div');
  const successFragmentTemplate = successTemplate.cloneNode(true);
  successFragment.append(successFragmentTemplate);

  document.body.append(successFragment);
};

export { renderErrorTemplate, renderSuccessTemplate, getRandomItem, getRandomNumber, isEscEvent, checkMaxLength };
