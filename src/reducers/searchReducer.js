const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
  error: null
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_PENDING':
      return {...state, fetching: true}
    case 'FETCH_ARTICLES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        imgs: action.payload
      }
    case 'FETCH_ARTICLES_REJECTED':
      return {...state, fetching: false, error: action.payload}
    default:
      return state
  }
}
