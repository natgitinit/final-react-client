const articlesReducer = (
  state = {
    isLoading: false,
    articles: []
  }, action) => {

    switch (action.type) {
      case 'FETCHING_ARTICLES':
        return {
          ...state,
          isLoading: true
        }

      case 'FETCHED_ARTICLES':
        return {
          ...state,
          articles: [...state.articles, ...action.payload.results]
        }
      default:
        return state;


    }

};

export default articlesReducer;
