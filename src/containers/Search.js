import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQuery } from '../actions/searchActions';
import SearchResults from '../components/SearchResults';
import SearchNews from '../containers/SearchNews';


class Search extends Component {

  retrieveInput = (input) => {
    // console.log('new york');
    searchQuery(input)
  }

  render(){
    return(
      <div>
      <SearchResults articles={this.props.retrievedArticle} />
      <SearchNews color={this.retrieveInput}/>
      </div>
    )
  }

}
// export default Search

// function search () {
//   console.log('HI')
// }
//
// function retrieveInput(input){
//   console.log(input)
// }



const mapStateToProps = (state) => {
  // debugger;
  return {
    retrievedArticle: state.searchReducer.articles
  }
}

 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     searchQuery
   }, dispatch)
 }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
