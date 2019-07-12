export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = 'REDUX-BLOG';

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

export function createPost(body, callback) {
  return fetch(`${ROOT_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback)
    .then((data) => {
      return {
        type: CREATE_POST,
        payload: data
      }
  });
}

export const FETCH_POST = "FETCH_POST";

export function fetchPost(id) {
  return fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_POST,
        payload: data
      }
  });
}

