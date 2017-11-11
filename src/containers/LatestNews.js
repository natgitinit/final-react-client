import React, { Component } from 'react';
import 'isomorphic-fetch';
// import NewsArticles from './components/NewsArticles';

const NYT_API_KEY = '88b8f68aa3304b9ea7f555bed50eeb87';

const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestNews extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ articles: response.results}));
  }

  render() {
    return (
      <div className="latest-news">
        <h2>The Latest News:</h2>
        <LatestNews articles={this.state.articles}/>
      </div>
    );
  }
}

export default LatestNews;
