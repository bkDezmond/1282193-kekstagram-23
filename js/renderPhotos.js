// okay
import { showFullscreen } from './photoFullscreen.js';
const picturesElements = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content;

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ comments, likes, url, description }) => {
    const pictureTemplate = similarPictureTemplate.cloneNode(true);
    pictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    pictureTemplate.querySelector('.picture__likes').textContent = likes;
    pictureTemplate.querySelector('.picture__img').src = url;
    pictureTemplate.querySelector('.picture__img').addEventListener('click', () => {
      showFullscreen(comments, likes, url, description);
    }); fragment.appendChild(pictureTemplate);
  });

  picturesElements.appendChild(fragment);
};

export { renderPhotos };
