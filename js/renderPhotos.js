// okay
import { showFullscreen } from './photoFullscreen.js';

const picturesElements = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content;
const filters = document.querySelector('.img-filters');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos
    .slice()
    .forEach(({ comments, likes, url, description }) => {
      const pictureTemplate = similarPictureTemplate.cloneNode(true);
      pictureTemplate.querySelector('.picture__comments').textContent = comments.length;
      pictureTemplate.querySelector('.picture__likes').textContent = likes;
      pictureTemplate.querySelector('.picture__img').src = url;
      pictureTemplate.querySelector('.picture__img').addEventListener('click', () => {
        showFullscreen(comments, likes, url, description);
      }); fragment.appendChild(pictureTemplate);
    });
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
  picturesElements.appendChild(fragment);
  filters.classList.remove('img-filters--inactive');
};

export { renderPhotos };
