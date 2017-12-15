import React from 'react'
import Saved from './components/Saved';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedArticle } from '../actions/saveActions';


class SavedArticles extends Component {
// const SavedArticles = (props) => {
  console.log(props)

  const allArticles = props.savedArticle.map((article, index) =>
  <Article key={index} article={article}/> )

      return(
        <div className="saved-list">
          <div className="ui cards">
            <Saved />
            {allArticles}
          </div>
        </div>
      )


  }

  const mapStateToProps = (state) => {
    return {
      articles: state.saveReducer.savedArticles
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      savedArticle: bindActionCreators(savedArticle, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
