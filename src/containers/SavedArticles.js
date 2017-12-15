import React from 'react'
// import ArticleList from './containers/ArticleList'
import Saved from './components/Saved';
import SavedArticles from '../actions/saveActions';

const SavedArticles = (props) => {
  console.log(props)

  componentDidMount() {
    console.log("component did mount")
    this.props.savedArticle()
  }

  const allArticles = props.savedArticle.map((article, index) => <Article key={index} article={article}/>)
      return(
        <div className="reading-list">
          <div className="ui cards">
          <Saved />
            {allArticles}
          </div>
        </div>
      )


  }

  const mapStateToProps = (state) => {
    return {
      articles: state.articlesReducer.articles
    }
  }

  export default SavedArticles
