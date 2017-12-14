import fetch from 'isomorphic-fetch';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API_URL


export function fetchingArticles() {
  return {
    type: 'FETCHING_ARTICLES'
  }
}

export function fetchedArticles() {
  return (dispatch) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
    .then(resp => resp.json())
    // .then(resp => { debugger })
    .then(jsonObject => {
      dispatch({
        type: 'FETCHED_ARTICLES',
        payload: jsonObject
      })
    })
  }
}

export function saveArticle() {
  return {
    type: 'SAVING_ARTICLE'
  }
}

export function savedArticles() {
  return (dispatch) => {
    return fetch(`${BASE_URL}/articles`)
    .then(resp => resp.json())
    .then(jsonObject => {
      dispatch({
        type: 'SAVE_ARTICLE',
        payload: jsonObject
      })
    })
  }
}

// export function deleteSaved() {
//   return(dispatch) => {
//     return fetch(`${BASE_URL}/articles/${article.id}`), {
//       method: 'DELETE'
//     };
//     //catch error
//   }
// }
