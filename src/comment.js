import { getComments } from './api-controller.js';

const commentSection = document.querySelector('.commentpop');
const bodyfix = document.querySelector('body');

const getCommentsHtml = (commentResult) => {
  let commentsHtml = ``;
  for(let i = 0; i < commentResult.length; i += 1) {
    commentsHtml += `<p>
    <span class='date'>${commentResult[i].creation_date}<span>
    <span class='comment-name'>${commentResult[i].username}: </span>
    <span class='comment-detail'>${commentResult[i].comment} </span>
    <p>`;
  }
  return commentsHtml;
}

const commentPopup = (commentButton, movies) => {
  commentButton.forEach((button, index) => {
    button.addEventListener('click', async () => {
      commentSection.classList.add('show');
      bodyfix.classList.add('static');

      const commentResult = await getComments(movies[index].id);
      console.log(commentResult);
      
      commentSection.innerHTML = `<div class='comment-js'>
        <div class='name-closeicon'>
        <h2>${movies[index].name}</h2>
        <i class="fa fa-times"></i>
        </div>
        <div class='comment-img'><img src='${movies[index].image.original}'></div>
        <div class='summary'>${movies[index].summary}</div>
        <ul>
        <li>Genre: ${movies[index].genres.join(',')}</li>
        <li>tvmaze: <a href="${movies[index].url}" target="_blank">details about show</a></li>
        <li>rating: ${movies[index].rating.average}</li>
        </ul>
        <div class='add-comments'>
        <h3>comments(${commentResult.length})</h3>
        ${getCommentsHtml(commentResult)}
        </div>

        </div>`;

      const closeComment = document.querySelector('.fa-times');
      const closebtn = () => {
        commentSection.classList.remove('show');
        bodyfix.classList.remove('static');
      };
      closeComment.addEventListener('click', closebtn);
    });
  });
};

export { commentPopup as default };