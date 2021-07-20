const commentsList = document.querySelector('.social__comments');
const commentsData = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');


const renderComments = (comments, allCommentsLength) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach(({ avatar, message }) => {
    const commentData = commentsData.cloneNode(true);
    commentData.querySelector('.social__picture').src = avatar;
    commentData.querySelector('.social__text').textContent = message;
    fragment.appendChild(commentData);
  });
  commentsList.appendChild(fragment);
  const visibleCommentsCount = `${commentsList.children.length} из <span class="comments-count">${allCommentsLength}</span> комментариев`;
  commentCount.innerHTML = visibleCommentsCount;
};
export { renderComments };
