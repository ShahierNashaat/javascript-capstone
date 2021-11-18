import { getComments, postComment } from './api-controller.js';
import { countComment } from './counter.js';

const commentSection = document.querySelector('.commentpop');
const bodyfix = document.querySelector('body');

const getCommentsHtml = (commentResult) => {
  let commentsHtml = `<h3>comments(${countComment(commentResult)})</h3>`;
  for (let i = 0; i < commentResult.length; i += 1) {
    commentsHtml += `<p>
      <span class='date'>${commentResult[i].creation_date}<span>
      <span class='comment-name'>${commentResult[i].username}: </span>
      <span class='comment-detail'>${commentResult[i].comment} </span>
      <p>`;
  }
  return commentsHtml;
};

const submitfunction = async (movies, index) => {
  const form = document.getElementById('comment-form');
  await postComment(movies[index].id, form.name.value, form.moviecomment.value);
  const commentResult = await getComments(movies[index].id);
  document.getElementsByClassName('add-comments')[0].innerHTML = getCommentsHtml(commentResult);
  form.name.value = '';
  form.moviecomment.value = '';
};

const commentPopup = (commentButton, movies) => {
  commentButton.forEach((button, index) => {
    button.addEventListener('click', async () => {
      commentSection.classList.add('show');
      bodyfix.classList.add('static');

      const commentResult = await getComments(movies[index].id);

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
        ${getCommentsHtml(commentResult)}
        </div>
        <form id="comment-form">
        <h2>Add your comment</h2>
        <div>
            <input type="text" id="name" placeholder="name" required />
        </div>
        <div>
        <textarea id="moviecomment" name="moviecomment" rows="4" cols="50" required></textarea>
        </div>
        <div class="button-flex">
            <button type="button" id="add">Add comment</button>
        </div>
    </form>
        </div>`;

      const addComment = document.getElementById('add');
      addComment.addEventListener('click', () => { submitfunction(movies, index); });

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