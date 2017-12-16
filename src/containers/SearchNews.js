import React, { Component } from 'react';
// import ArticleList from '../containers/ArticleList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/searchActions';

  class SearchNews extends Component {
    state = {
      input: ''
    }

      handleSubmit = event => {
        event.preventDefault();
        console.log(this)
        this.props.searchQuery(this.state.input)
        this.setState({
          input: ''
        })
    }

    handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });


  render() {
    return (
      <div className="searchable-articles">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search News</label>
          <input
            id='search-input'
            type="text"
            style={{width: 250}}
            onChange={this.handleSearchInputChange}
            value={this.state.input}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log('map dispatch to props')
  return bindActionCreators(actions, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchNews);

// {this.state.articles.length > 0 && <h2>Articles By Search:</h2>}
