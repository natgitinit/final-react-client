const saveReducer = (
  state = {
    isLoading: false,
    savedArticles: []
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

      case 'DELETE_ARTICLE':
        const articles = state.savedArticles.filter(article => article.id !== action.id);
        return {
          articles
        };

      default:
        return state;

    }

};

export default saveReducer;
