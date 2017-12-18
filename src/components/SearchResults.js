import React, {Component} from 'react';
// import SearchNews from '../containers/SearchNews';
// import { allArticles } from '../reducers/searchReducer';

class SearchResults extends Component {

  render() {
    this.props.articles.map((article) => {
      <h1>{article.url}</h1>
    })

    return (
      <div className='results-list'>

      </div>
    );
  }
}


export default SearchResults;
