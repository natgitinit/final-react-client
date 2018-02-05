const saveReducer = (
  state = {
    isLoading: false,
    savedArticles: [],
    saved: [],
  }, action) => {

    switch (action.type) {
      case 'SAVE_ARTICLE_PENDING':
        return {
          ...state,
          isLoading: true
        }

      case 'SAVE_ARTICLE_FUFILLED':
        return {
          ...state,
          savedArticles: [...state.savedArticles, action.payload]
        }

      case 'FETCHED_SAVED':
        return {
          ...state,
          saved: action.payload
        }

      case 'DELETE_ARTICLE':
        const deleteArticle = state.saved.filter(article => article.id !== action.id);
        return {
          deleteArticle
        }

      case 'UPVOTE_ARTICLE_FUFILLED':

        const saved = state.saved.map(article => {
          if (article.id === action.payload.id ) {
            return action.payload
          } else {
            return article
          }

        })
        
        //find a way to update state.saved array to replace the new object from payload with the one that is old in state.saved
        return {
          ...state,
          saved,
        }

      default:
        return state;

    }

};


export default saveReducer;
