import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// Assets //
import '../assets/stylesheets/application.scss';

// Reducers //
import postsReducer from './reducers/posts_reducer.js';

const reducers = combineReducers({
  posts: postsReducer
});

// Containers //
import PostsIndex from './containers/posts_index.jsx';


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
