
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

export function deleteArticle(article) {
  return (dispatch) => {
    return fetch(`${RAILS_API}/articles/${article.id}`, {
      method: 'DELETE',
      body: JSON.stringify(article)
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
