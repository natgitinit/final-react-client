import React from 'react'
import Saved from './components/Saved';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedArticle } from '../actions/saveActions';


class SavedArticles extends Component {



  const allArticles = props.savedArticle.map((article, index) =>
    <Article key={index} article={article}/> )

      return(
        <div className="saved-list">
          <div className="ui cards">
          <button className="ui teal button" onClick={this.handleClick.bind(this.handleDelete)}>Delete</button>
          {allArticles}
          </div>
        </div>
      )


  }

  const mapStateToProps = (state) => {
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
