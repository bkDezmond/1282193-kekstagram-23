const picturesElements = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content;

const renderPhotoElement = (generatePhotoElement) => {
  const fragment = document.createDocumentFragment();

  generatePhotoElement.forEach(({ comments, likes, url }) => {
    const pictureTemplate = similarPictureTemplate.cloneNode(true);
    pictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    pictureTemplate.querySelector('.picture__likes').textContent = likes;
    pictureTemplate.querySelector('.picture__img').src = url;
    fragment.appendChild(pictureTemplate);
  });

  picturesElements.appendChild(fragment);
};

export { renderPhotoElement };
