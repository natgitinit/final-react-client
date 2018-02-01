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

      // case 'DELETE_ARTICLE_SUCCESS':
      //   return {
      //     ...state
      //   }

      default:
        return state;

    }

};

export default saveReducer;
