import React, { Component } from 'react';
import 'isomorphic-fetch';
// import Home from '../components/Home';
import NewsArticles from '../components/NewsArticles';

const NYT_API_KEY = '88b8f68aa3304b9ea7f555bed50eeb87';

const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + `api-key=${NYT_API_KEY}&query=`;


class SearchNews extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      articles: []
    };
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // crossDomain : true,
    }).then(res => res.json())
    .then(res => this.setState({ articles: res.results }));
  }

  render() {
    return (
      <div className="searchable-art-articles">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Art News</label>
          <input
            id='search-input'
            type="text"
            style={{width: 300}}
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.articles.length > 0 && <h2>Articles By Search:</h2>}
        <NewsArticles articles={this.state.articles} />
      </div>
    );
  }
}

export default SearchNews;
