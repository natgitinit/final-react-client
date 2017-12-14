const baseUrl = process.env.REACT_APP_API

export function fetchFavorites(){
  return function (dispatch){
    dispatch({type:'FETCHING_FAVORITES'})
    fetch(`${baseUrl}/user_favorites`)
    .then(res => res.json())
    .then(json => {
      dispatch({type:'FETCHED_FAVORITES', payload:json})
    })
  }
}

export function deleteFavorite(id){
  return function (dispatch){
    dispatch({type:'DELETING_FAVORITE'})
    return fetch(`${baseUrl}/user_favorites/${id}`, {
      method:'DELETE'
    })
  }
}
