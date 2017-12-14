export function favoriteReducer(state={
  fetching:false,
  favorites:[]
}, action) {

  switch (action.type) {
    case 'FETCHING_FAVORITES':
      return {
        ...state, fetching:true
      }

    case 'FETCHED_FAVORITES':
      return {
        ...state, fetching:false,
         favorites:action.payload
       }

    case 'DELETING_FAVORITE':
      return {
        ...state, fetching:false
      }
    default:
      return state;
  }
