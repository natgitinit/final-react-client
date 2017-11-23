import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import ArticleCard from '../components/ArticleCard';
import { bindActionCreators } from 'redux';
import { fetchedArticles } from '../actions/articleActions';



class ArticleList extends Component {


    componentDidMount() {
      console.log("component did mount")
      this.props.fetchedArticles()
    }

  render() {
    return (
        <div classNam="art-stories">
          {this.props.articles.map((article) => {
            return (
              <div>
                <h2>  <a className="article-link" href={article.url}>
                     {article.title}
                </a></h2>
                <h4> {article.abstract} </h4>
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
  return { fetchedArticles: bindActionCreators( fetchedArticles, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
