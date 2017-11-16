const articlesReducer = (state = {loading: false, articles: []}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return {loading: false, articles: action.payload.data}
    default:
      return state;
    }
};

export default articlesReducer;
