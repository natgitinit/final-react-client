const articlesReducer = (
  state = {
    isLoading: false,
    articles: [],
    images: []
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

      // case 'FETCHED_IMAGES':
      //   return {
      //     ...state,
      //     images: action.payload
      //   }

      }




};

export default articlesReducer;
