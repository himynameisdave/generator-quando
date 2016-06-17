import './css/exports/default.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

//  for debugging, strip from prod
window.getState = store.getState;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
