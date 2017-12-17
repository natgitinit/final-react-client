const initialState = {
  isLoading: false,
  fetched: false,
  savedArticles: [],
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SAVE_ARTICLE_PENDING':
      return {
        ...state,
        fetching: true
      }

    case 'SAVE_ARTICLE_FUFILLED':
      return {
        ...state,
        fetching: false,
         savedArticles: [...state.savedArticles, ...action.payload.results]
       }
     case 'SAVE_ARTICLE_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case 'DELETING_ARTICLE':
    const articles = state.articles.filter(article => article.id !== action.id);
      return {
        ...state, fetching: false
      }
    default:
      return state;
  }
}
