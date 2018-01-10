
const RAILS_API = process.env.REACT_APP_API_URL



export function savedArticle(article) {
  // debugger; 
  // return (dispatch) => {
    fetch(`${RAILS_API}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    // .then(resp => {debugger})
//     .then(jsonObject => {
//       dispatch({
//         type: 'SAVE_ARTICLE',
//         payload: jsonObject
//       })
//     })
}
