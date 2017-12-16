const saveReducer = (
  state = {
    fetching: false,
    savedArticles:[],
    error: null
  }, action) => {

    switch (action.type) {
      case 'SAVE_ARTICLE_PENDING':
        return {
          ...state,
          fetching: true
        }

      case 'SAVE_IMAGE_FUFILLED':
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
        return {
          ...state, fetching: false
        }
      default:
        return state;
    }
  }
