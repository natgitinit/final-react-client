import fetch from 'isomorphic-fetch';

const API_KEY = process.env.REACT_APP_API_KEY
// const BASE_URL = process.env.REACT_APP_API_URL


export function fetchingArticles() {
  return {
    type: 'FETCHING_ARTICLES'
  }
}

export function fetchedArticles(sourceName) {
  return (dispatch) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
    .then(resp => resp.json())
    .then(jsonObject => {
      dispatch({
        type: 'FETCHED_ARTICLES',
        payload: jsonObject
      })
    })
  }
}

//ASYNC ACTIONS

// export const getArticles = () => {
//   return dispatch => {
//     return fetch(`${NYT_API_URL}/articles`)
//   }
// }
