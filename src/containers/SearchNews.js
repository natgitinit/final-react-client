import React, { Component } from 'react';
import ArticleList from '../containers/ArticleList';

// const BASE_URL = process.env.REACT_APP_NYT_SEARCH
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

const NYT_API_KEY = process.env.REACT_APP_API_KEY

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

  fetch(BASE_URL.concat(this.state.searchTerm))
  .then(res => res.json())
  .then(res => this.setState({ reviews: res.results }));
}


  render() {
    return (
      <div className="searchable-articles">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search News</label>
          <input
            id='search-input'
            type="text"
            style={{width: 250}}
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.articles.length > 0 && <h2>Articles By Search:</h2>}
      </div>
    );
  }
}

export default SearchNews;
