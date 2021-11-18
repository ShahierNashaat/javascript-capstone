const countMovies = (movies, genresType) => {
  const selectedMovies = movies.filter((item) => item.genres.indexOf(genresType) !== -1);
  return selectedMovies.length;
};

export { countMovies as default };