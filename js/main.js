const NAMES = ['Игорь', 'Елена', 'Олег', 'Мария', 'Евгений', 'Виктория'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const TOTAL_PHOTOS = 25;
const AVATAR_NUMBERS = [1, 2, 3 , 4, 5 , 6];

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
getRandomNumber(1, 25);

const getAvatar = () => {
  const randomIndex = getRandomNumber(1, AVATAR_NUMBERS.length);
  const avatarSrc = `img/avatar-${  AVATAR_NUMBERS[randomIndex]  }.svg`;
  return avatarSrc;
};

const getPhoto = () => {
  const photosSrc = `photos/${  getRandomNumber(1, 25)  }.svg`;
  return photosSrc;
};

const getRandomName = () => {
  const randomIndex = getRandomNumber(0, NAMES.length);
  return NAMES[randomIndex];
};

const getRandomComment = () => {
  const randomIndex = getRandomNumber(0, COMMENTS.length);
  return COMMENTS[randomIndex];
};

const getSomeComments = () => ({
  id: getRandomNumber(1, 25),
  avatar: getAvatar(),
  message: getRandomComment(),
  name: getRandomName(),
});

const createPhotos = () => ({
  id: getRandomNumber(1, 25),
  url: getPhoto(),
  description: 'description',
  likes: getRandomNumber(15, 200),
  comments: getSomeComments(),
});

const getPhotosArray = new Array(TOTAL_PHOTOS).fill(null).map(() => createPhotos());

getPhotosArray();
