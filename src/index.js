// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import RecentMovieReviews from './components/RecentMovieReviews';
// import Search from './components/Search';
//
// ReactDOM.render(
//   <div className="app">
//     <Search />
//     <RecentMovieReviews />
//   </div>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import {WrapperApp} from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
  <WrapperApp />
  </Provider>, document.getElementById('root')
)
