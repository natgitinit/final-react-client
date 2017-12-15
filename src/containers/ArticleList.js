import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import { bindActionCreators } from 'redux';
import { fetchedArticles } from '../actions/articleActions';
// import { savedArticle } from '../actions/saveActions';



class ArticleList extends Component {

    handleClick = params => {
     this.props.savedArticle(params)
     this.handleClick = this.handleClick.bind(this);

   }

    componentDidMount() {
      console.log("component did mount")
      this.props.fetchedArticles()
    }

  render() {
    return (
      <div className="art-stories">
        {this.props.articles.map((article) => {
          return (
            <div>
            <ArticleCard />

            </div>
          )
        })}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchedArticles: bindActionCreators(fetchedArticles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
