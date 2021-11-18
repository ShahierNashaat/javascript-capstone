const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
}

const getlikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes');
  const data = await response.json();
  return data;
}

const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments?item_id=${id}`);
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  return data;
}

const postLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.text();
  return data;
}

const postComment = async (id, name, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.text();
  return data;
}

export {
  getMovies as default, getlikes, getComments, postLike, postComment,
};
