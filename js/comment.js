import { getRandomItem, getRandomNumber } from './util.js';
import { getAvatarSrc } from './source.js';

const UNIQUE_IDS_COUNT = 100;
const NAMES = ['Игорь', 'Елена', 'Олег', 'Мария', 'Евгений', 'Виктория'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const UNIQUE_IDS = new Array(UNIQUE_IDS_COUNT).fill(null).map((value, i) => i + 1).sort(() => Math.random() - 0.5);

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

export { getRandomComments, getRandomComment };

// через slice
