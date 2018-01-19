// const initialState = {
//   isLoading: false,
//   fetched: false,
//   savedArticles: [],
//   error: null
// }
//
// const saveReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case 'SAVE_ARTICLE_PENDING':
//     // debugger;
//       return {
//         ...state,
//         fetching: true
//       }
//
//     case 'SAVE_ARTICLE_FUFILLED':
//     debugger;
//       return {
//         ...state,
//         savedArticles: [...state.savedArticles, ...action.payload]
//        }
//      // case 'SAVE_ARTICLE_REJECTED':
//      //  return {
//      //    ...state,
//      //    fetching: false,
//      //    error: action.payload
//      //  }
//
//     default:
//       return state;
//   }
// }
//
// export default saveReducer;

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
      // debugger;
        return {
          ...state,
          // savedArticles: action.payload
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
