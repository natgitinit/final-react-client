import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleCard from '../components/ArticleCard';
import { bindActionCreators } from 'redux';
import { fetchedArticles } from '../actions/articleActions';


const API_KEY = process.env.REACT_APP_API_KEY

const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?'
            + `api-key=${API_KEY}`;


class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      hasError: false,
      isLoading: false
    };
  }

    componentDidMount() {
      console.log("component did mount")
      // debugger;
      this.props.fetchedArticles()
    }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading articles.</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="latest-news">
        <h2>Articles:</h2>
            { this.props.articles.map((article) => {
              return (
            <li key= {article.id}>
                    {article.title}
            </li>
          )})}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // debugger;
  return {
    articles: state.articlesReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchedArticles: bindActionCreators( fetchedArticles, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
