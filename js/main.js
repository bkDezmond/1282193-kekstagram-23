// const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const checkMaxLength = (line, maxLength) => line.length <= maxLength;

checkMaxLength();

const getRandomNumber = (minNumber, maxNumber) => {
  if (minNumber < 0 || maxNumber < 0) {
    throw new Error('Диапазон может быть только положительный, включая ноль');
  }
  if (maxNumber <= minNumber) {
    const rand = minNumber + maxNumber;
    return rand;
  }
  else {
    const rand = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return Math.floor(rand);}
};
getRandomNumber(0, 10);
