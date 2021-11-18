const getMovies = () => {
  const movies = [
    {
      id: 1,
      genres: ['Action'],
    },
    {
      id: 2,
      genres: ['Comedy'],
    },
    {
      id: 3,
      genres: ['Drama'],
    },
  ];
  return movies;
};

export { getMovies as default };