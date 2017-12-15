const NYT_API_KEY = process.env.REACT_APP_API_KEY

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
                 + `api-key=${NYT_API_KEY}&q=`;


  export function searchQuery(query) {
    return (dispatch) => {
      return fetch(BASE_URL.concat(this.state.searchTerm))
      // .then(resp => {debugger})
      .then(jsonObject => {
        dispatch({
          type: 'SEARCH_ARTICLES',
          payload: jsonObject
        })
      })
    }
  }
