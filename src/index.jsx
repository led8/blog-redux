// React & Reux Modules //
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

// Assets //
import '../assets/stylesheets/application.scss';

// Reducers //
import postsReducer from './reducers/posts_reducer.js';

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

// Containers //
import PostsIndex from './containers/posts_index.jsx';
import PostShow from './containers/post_show.jsx';
import PostNew from './containers/post_new.jsx';


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
