import React, { Component } from 'react'
import Saved from './components/Saved';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedArticle } from '../actions/saveActions';
import { store } from '../index';


class SavedArticles extends Component {

  retrieveSaved = () => {
    savedArticle().then(res => {
      store.dispatch({
        type: 'SAVED_ARTICLE_FULFILLED',
        payload: res
      })
    })
  }

    render() {

      return(
        <div>

          <Saved articles={store.getState().saveReducer.savedArticles}/>

        </div>
      )
    }

  }

  const mapStateToProps = (state) => {
    debugger;
    return {
      savedArticles: state.saveReducer.savedArticles
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      savedArticle: bindActionCreators(savedArticle, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
