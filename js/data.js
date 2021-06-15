import {getRandomComments} from './comment.js';
import {getRandomNumber} from './util.js';
import {getPhotoSrc} from './source.js';

const TOTAL_PHOTOS = 25;

const getPhoto = (id) => ({
  id,
  url: getPhotoSrc(),
  description: 'description',
  likes: getRandomNumber(15, 200),
  comments: getRandomComments(),
});

const photosArray = new Array(TOTAL_PHOTOS).fill(null).map((value, index) => getPhoto(index + 1)).sort(() => Math.random() - 0.5);

photosArray;

export {getPhoto, photosArray};
