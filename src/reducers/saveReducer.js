const initialState = {
  isLoading: false,
  fetched: false,
  savedArticles: [],
  error: null
}

const saveReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SAVE_ARTICLE_PENDING':
    debugger;
      return {
        ...state,
        fetching: true
      }

    case 'SAVE_ARTICLE_FUFILLED':
    // debugger;
      return {
        ...state,
        fetching: false,
        savedArticles: [...state.savedArticles, ...action.payload]
       }
     case 'SAVE_ARTICLE_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default saveReducer;
