
const RAILS_API = process.env.REACT_APP_API_URL


export function savedArticle() {
  debugger;
  return (dispatch) => {
    fetch(`${RAILS_API}/articles`)
    .then(res => { res.json() })
    .then(jsonObject => {
      dispatch({
        type: 'SAVE_ARTICLE',
        payload: jsonObject
      })
    })
  }
}

export function deleteArticle(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETING_ARTICLE'
    })
    return fetch(`${RAILS_API}/articles/${id}`, {
      method: 'DELETE'
    })
  }
}
