import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  if (action.type == FETCH_POSTS) {
    return action.payload;
  }
  else {
    return state;
  }

  if (action.type == FETCH_POSTS) {
    return action.payload;
  }
  else {
    return state;
  }
}
