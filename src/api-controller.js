const getMovies = () => fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json());

const getlikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes')
  .then((response) => response.json());

const getComments = (id) => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments?item_id=${id}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    else {
      return [];
    }
  });

export { getMovies as default, getlikes, getComments };
