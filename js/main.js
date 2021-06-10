const NAMES = ['Игорь', 'Елена', 'Олег', 'Мария', 'Евгений', 'Виктория'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const TOTAL_PHOTOS = 25;
const AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6];
const UNIQUE_IDS = new Array(100).fill(null).map((value, i) => i + 1).sort(() => Math.random() - 0.5);

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

const getAvatarSrc = () => {
  const randomIndex = getRandomNumber(0, AVATAR_NUMBERS.length);
  const avatarSrc = `img/avatar-${AVATAR_NUMBERS[randomIndex]}.svg`;
  return avatarSrc;
};

const getPhotoSrc = () => {
  const photosSrc = `photos/${getRandomNumber(1, 25)}.svg`;
  return photosSrc;
};

const getRandomItem = (array) => {
  const randomIndex = getRandomNumber(0, array.length);
  return array[randomIndex];
};

const getRandomComment = (id) => ({
  id,
  avatar: getAvatarSrc(),
  message: getRandomItem(COMMENTS),
  name: getRandomItem(NAMES),
});

const getRandomComments = () => {
  const randomCount = getRandomNumber(0, 5);
  const uniqueIds = UNIQUE_IDS.splice(0, randomCount);
  return uniqueIds.map((id) => getRandomComment(id));
};

const getPhoto = (id) => ({
  id,
  url: getPhotoSrc(),
  description: 'description',
  likes: getRandomNumber(15, 200),
  comments: getRandomComments(),
});

const photosArray = new Array(TOTAL_PHOTOS).fill(null).map((value, index) => getPhoto(index + 1)).sort(() => Math.random() - 0.5);

photosArray;
