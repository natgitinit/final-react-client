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

        case 'SAVE_ARTICLE':
          return {
            ...state,
            savedArticles: [...state.articles, ...action.payload ]
          }

        // case 'DELETE_SAVED':
        //   const newState = Object.assign([], state);
        //   const indexOfArticle = state.findIndex(article => {
        //     return article.id == action.article.id
        //   })

      default:
        return state;


    }

};

export default articlesReducer;
