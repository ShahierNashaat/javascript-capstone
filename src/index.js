import './style.css';
import getMovies from './api-controller.js';

const commentSection = document.querySelector('.commentpop');
const bodyfix = document.querySelector('body');
const rederMovies = async (genresType) => {
  let movies = await getMovies();
  movies = movies.filter((item) => item.genres.indexOf(genresType) !== -1);
  const mainSection = document.querySelector('.main');
  mainSection.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    mainSection.innerHTML += `
        <div class="movie">
        <img src="${movies[i].image.medium}">
        <div class="name-add-like">
            <h2>${movies[i].name}</h2>
            <i class="far fa-heart fa-2x"></i>
        </div>
        <div>
            <p>5 likes</p>
        </div>
        <div class="comment-btn-div">
            <button>Comments</button>
        </div>
        </div>`;
  }

  const commentButton = document.querySelectorAll('.comment-btn-div button');
  const commentPopup = () => {
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
  commentPopup();
};

rederMovies('Action');

const links = document.querySelectorAll('header li');

const resetLinks = () => {
  for (let i = 0; i < links.length; i += 1) {
    links[i].classList.remove('active');
  }
};

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    rederMovies(links[i].textContent);
    resetLinks();
    links[i].classList.add('active');
  });
}