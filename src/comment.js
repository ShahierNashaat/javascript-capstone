const commentSection = document.querySelector('.commentpop');
const bodyfix = document.querySelector('body');

const commentPopup = (commentButton, movies) => {
  commentButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      commentSection.classList.add('show');
      bodyfix.classList.add('static');

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