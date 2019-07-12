export const FETCH_POSTS = "FETCH_POSTS"
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '123'

export function fetchPosts() {
  return fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_POSTS,
        payload: data
      }
  });
}

export const FETCH_POST = "FETCH_POST"

export function fetchPost() {
  return fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_POST,
        payload: data
      }
  });
}
