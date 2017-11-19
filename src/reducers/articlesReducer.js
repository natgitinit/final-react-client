const articlesReducer = (state = {
  loading: false,
  articles: [],
  images: []
}, action) => {

  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {
        ...state,
        isLoading: true
      }
      
    case 'FETCHED_IMAGES':
    return {
      ...state,
      images: action.payload
    }

    case 'FETCHED_ARTICLES':
      return {
        ...state,
        articles: [...state.articles, action.payload]
      }
    default:
      return state;
    }
};

export default articlesReducer;
