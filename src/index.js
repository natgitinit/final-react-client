import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware
 } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>, document.getElementById('root')
)
