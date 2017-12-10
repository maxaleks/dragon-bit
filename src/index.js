import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import reducers from './reducers';
import getRoutes from './routes';
import { appStart } from './actions';

const middleware = [thunk];

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(...middleware),
);

window.onload = function() {
  store.dispatch(appStart(() => {
    ReactDOM.render(
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <BrowserRouter>
          {getRoutes(store)}
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  }));
};
