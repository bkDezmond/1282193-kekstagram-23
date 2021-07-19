const commentsList = document.querySelector('.social__comments');
const commentsData = document.querySelector('.social__comment');

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach(({ avatar, message }) => {
    const commentData = commentsData.cloneNode(true);
    commentData.querySelector('.social__picture').src = avatar;
    commentData.querySelector('.social__text').textContent = message;
    fragment.appendChild(commentData);
  });
  commentsList.appendChild(fragment);
};
export { renderComments };
