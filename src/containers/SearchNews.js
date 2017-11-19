import React, { Component } from 'react';
import 'isomorphic-fetch';
import NewsArticles from '../components/NewsArticles';

const BASE_URL = process.env.REACT_APP_NYT_SEARCH
const API_KEY = process.env.REACT_APP_API_KEY

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
