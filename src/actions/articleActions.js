import fetch from 'isomorphic-fetch';

const API_KEY = process.env.REACT_APP_API_KEY


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


// Add image_url attribute
     // articles.map(article => {
     //   let imgObj = article.multimedia.find(media => media.format === "superJumbo");
     //   article.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
     // });

// export function fetchImages() {
//   return {
//     type: 'FETCH_IMAGES'
//   }
// }
//
// export function fetchedImages() {
//   return (dispatch) => {
//     return fetch()
//   }
// }

//RAILS API

// export const getArticles = () => {
//   return dispatch => {
//     return fetch(`${NYT_API_URL}/articles`)
//   }
// }
