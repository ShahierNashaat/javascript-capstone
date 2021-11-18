const getMovies = () => fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json());

const getlikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes')
  .then((response) => response.json());

const getComments = (id) => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments?item_id=${id}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    return [];
  });

const postLike = (id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes', {
  method: 'POST',
  body: JSON.stringify({
    item_id: id,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.text());

const postComment = (id, name, comment) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments', {
  method: 'POST',
  body: JSON.stringify({
    item_id: id,
    username: name,
    comment,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json()).then((json) => console.log(json));

export {
  getMovies as default, getlikes, getComments, postLike, postComment,
};
