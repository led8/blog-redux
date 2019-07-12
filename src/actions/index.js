export const FETCH_POSTS = "FETCH_POSTS"

export function fetchPosts() {
  return fetch('http://reduxblog.herokuapp.com/api/posts')
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_POSTS,
        payload: data
      }
  });
}
