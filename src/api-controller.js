const getMovies = () => fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json());

const getlikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes')
  .then((response) => response.json());

export { getMovies as default, getlikes };
