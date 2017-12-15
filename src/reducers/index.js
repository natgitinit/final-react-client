import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import searchReducer from './searchReducer';
import {saveReducer} from './saveReducer';

export default combineReducers({
  articlesReducer,
  searchReducer,
  saveReducer
});
