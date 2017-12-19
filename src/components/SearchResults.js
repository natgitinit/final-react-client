import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
// import SearchNews from '../containers/SearchNews';
// import { allArticles } from '../reducers/searchReducer';

class SearchResults extends Component {

  render() {
    var result = this.props.articles.map((article) => (
      <Card.Group itemsPerRow={1} size='medium' stackable={true}>
        <Card className="search-card">
          <Card.Header>
            <a href={article.web_url} target="_blank" className="ui medium image">
            <h3> {article.snippet} </h3>
            </a>
          </Card.Header>
        </Card>
      </Card.Group>
    ))
    return (
      <div className="ui container center aligned">
        <div className='results-list'>
          {result}
        </div>
      </div>
    );
  }
}

export default SearchResults;
