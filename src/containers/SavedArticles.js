import React, { Component } from 'react'
import Saved from '../components/Saved';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedArticle } from '../actions/saveActions';
import { store } from '../index';


class SavedArticles extends Component {

  handleClick = params => {
    this.props.savedArticle(params)
  }


  getSaved = () => {
    savedArticle().then(res => {
      store.dispatch({
        type: 'SAVED_ARTICLE_FUFILLED',
        payload: res
      })
    })
  }


    render() {

      return(
        <div>

          <Saved articles={store.getState().saveReducer.savedArticle}/>

        </div>
      )
    }

  }

  export default SavedArticles

  // const mapStateToProps = (state) => {
  //
  //   return {
  //     savedArticles: state.saveReducer.savedArticle
  //   }
  // }
  //
  // function mapDispatchToProps(dispatch) {
  //   return {
  //     savedArticle: bindActionCreators(savedArticle, dispatch)
  //   }
  // }
  //
  // export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
