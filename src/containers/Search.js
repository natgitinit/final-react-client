import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQuery } from '../actions/searchActions';
// import SearchResults from '../components/SearchResults';
// import SearchNews from '../containers/SearchNews';


class Search extends Component {

  retrieveInput = (input) => {
    console.log(input);
  }

  render(){
    return(
      <SearchResults articles={this.props.articles} />
      <SearchNews color={this.retrieveInput}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    articles: state.searchReducer.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchQuery
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
