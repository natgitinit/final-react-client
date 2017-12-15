import fetch from 'isomorphic-fetch';

const RAILS_API = process.env.REACT_APP_API_URL


export function savingArticle() {
  return {
    type: 'SAVING_ARTICLE'
  }
}

export function savedArticle() {
  return (dispatch) => {
    fetch(`${RAILS_API}/articles`)
    .then(res => { res.json() })
    .then(jsonObject => {
      dispatch({
        type: 'SAVED_ARTICLE',
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
