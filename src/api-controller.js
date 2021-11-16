const getMovies = () => fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json());

export { getMovies as default };
