export function saveReducer(
  state = {
    fetching: false,
    savedArticles:[]
  }, action) {

    switch (action.type) {
      case 'SAVING_ARTICLE':
        return {
          ...state,
          fetching: true
        }

      case 'SAVED_ARTICLE':
        return {
          ...state,
          fetching: false,
           savedArticles: [...state.savedArticles, ...action.payload.results]
         }

      case 'DELETING_ARTICLE':
        return {
          ...state, fetching: false
        }
      default:
        return state;
    }
  }
