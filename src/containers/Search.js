import React, { Component } from 'react';
import { searchQuery } from '../actions/searchActions';
import SearchResults from '../components/SearchResults';
import SearchNews from '../components/SearchNews';
import { store } from '../index';


class Search extends Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  retrieveInput = (input) => {
    searchQuery(input).then(res => {
      store.dispatch({
        type: 'FETCH_ARTICLES_FULFILLED',
        payload: res
      })
    })
  }

  render(){
    return(
      <div>
      <SearchNews color={this.retrieveInput}/>
      <SearchResults articles={store.getState().searchReducer.articles}/>
      </div>
    )
  }

}
export default Search
