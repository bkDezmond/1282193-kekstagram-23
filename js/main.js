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
getRandomNumber(0, 10);
