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

export function fetchedImages() {
  return function(dispatch) {
    fetch(`${BASE_URL}/images`)
    .then(resp => resp.json())
    .then(jsonObject => {
      dispatch({
        type: 'FETCHED_IMAGES',
        payload: jsonObject
      })
    })
  }
}
