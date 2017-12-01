import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Grid, Segment } from 'semantic-ui-react';

import ArticleCard from '../components/ArticleCard';
import { bindActionCreators } from 'redux';
import { fetchedArticles } from '../actions/articleActions';



class ArticleList extends Component {


    componentDidMount() {
      console.log("component did mount")
      this.props.fetchedArticles()
    }

  render() {
    // debugger;
    return (
      <div classNam="art-stories">
        {this.props.articles.map((article) => {
          return (
            <ArticleCard />
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
