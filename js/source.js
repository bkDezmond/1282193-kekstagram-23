import { getRandomNumber } from './util.js';

const AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6];

const getAvatarSrc = () => {
  const randomIndex = getRandomNumber(0, AVATAR_NUMBERS.length);
  const avatarSrc = `img/avatar-${AVATAR_NUMBERS[randomIndex]}.svg`;
  return avatarSrc;
};

const getPhotoSrc = () => {
  const photosSrc = `photos/${getRandomNumber(1, 25)}.jpg`;
  return photosSrc;
};

export { getAvatarSrc, getPhotoSrc };
