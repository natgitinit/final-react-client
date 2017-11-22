import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware
 } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import {WrapperApp} from './App';

const store = createStore(rootReducer, applyMiddleware(thunk)+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store} >
  <WrapperApp />
  </Provider>, document.getElementById('root')
)
