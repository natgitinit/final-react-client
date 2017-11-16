import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_RAILS_URL;
const API_KEY = process.env.REACT_APP_API_KEY
const NYT_BASE_URL = process.env.REACT_APP_NYT_URL;

export function fetchArticles() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ARTICLES' });
    return fetch(NYT_BASE_URL + `?api-key=` + API_KEY)
      .then(response => response.json())
      .then(jsonResponse => dispatch({ type: 'FETCH_ARTICLES', payload: jsonResponse.articles}));
    };
  }

// fetch(`${NYT_BASE_URL}?api-key=${API_KEY}`);

// export function fetchedImages() {
//   return function(dispatch) {
//     fetch(`${BASE_URL}/images`)
//     .then(resp => resp.json())
//     .then(jsonObject => {
//       dispatch({
//         type: 'FETCHED_IMAGES',
//         payload: jsonObject
//       })
//     })
//   }
// }
//
// export function fetchingArticles() {
//   return {
//     type: 'FETCHING_ARTICLES'
//   }
// }
//
// export function fetchedArticles(sourceName) {
//   return function(dispatch) {
//     fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API_KEY}&query=`)
//     .then(resp => resp.json())
//     .then(jsonObject => {
//       dispatch({
//         type: 'FETCHED_ARTICLES',
//         payload: jsonObject
//       })
//     })
//   }
// }
