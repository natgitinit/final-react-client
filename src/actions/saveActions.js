
const RAILS_API = process.env.REACT_APP_API_URL


export function savedArticle(article) {
  // debugger;
  return (dispatch) => {
    return fetch(`${RAILS_API}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    .then(res => res.json())
    .then(jsonObject => {
      dispatch({
        type: 'SAVE_ARTICLE_FUFILLED',
        payload: jsonObject
      })
    })
  }
}


export function getSaved() {
  // debugger;
  return (dispatch) => {
    return fetch(`${RAILS_API}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(jsonObject => {
      dispatch({
      type: 'FETCHED_SAVED',
      payload: jsonObject
      })
    })
  }
}


export function deleteArticle(article) {
  return (dispatch) => {
    return fetch(`${RAILS_API}/articles/${article.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(jsonObject => {
      dispatch({
        type: 'DELETE_ARTICLE',
        payload: jsonObject
      })
    })
  }
}


// export function deleteArticleSuccess() {
//   return {
//     type: 'DELETE_ARTICLE_SUCCESS'
//   }
// }
