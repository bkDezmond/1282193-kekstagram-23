const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;

getRandomNumber();

const checkMaxLength = (line, maxLength) => line.length <= maxLength;
checkMaxLength();

