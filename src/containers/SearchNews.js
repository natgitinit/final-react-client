import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQuery } from '../actions/searchActions';
import SearchResults from '../components/SearchResults';

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

    handleSearchInputChange = event => {

      this.setState({
        input: event.target.value
      });
      console.log(this.state.input)
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
            value={this.state.input}
            onChange={this.handleSearchInputChange}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.searchReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
      searchQuery: bindActionCreators(searchQuery, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchNews);
