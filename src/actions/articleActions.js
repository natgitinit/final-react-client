
const API_KEY = process.env.REACT_APP_API_KEY


export function fetchingArticles() {
  return {
    type: 'FETCHING_ARTICLES'
  }
}

export function fetchedArticles() {
  return (dispatch) => {
    return fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?api-key=${API_KEY}`)
    .then(resp => resp.json())
    .then(jsonObject => {
      dispatch({
        type: 'FETCHED_ARTICLES',
        payload: jsonObject
      })
    })
  }
}
