import React, { Component } from 'react';
// import { searchQuery } from '../actions/searchActions';

class SearchNews extends Component {
    state = {
      input: ''
    }

    handleSubmit = event => {
      //debugger
      event.preventDefault();
      this.props.color(this.state.input)
      // this.props.searchQuery(this.state.input)
      this.setState({
        input: ''
      })
    }

    handleSearchInputChange = event => {

      this.setState({
        input: event.target.value
      });
    }

  render() {
    return (
        <div className="panel panel-default">
              <div className="panel-heading">
                <h1 className="panel-title"><strong><i className="" aria-hidden="true"></i>  Search News Articles </strong></h1>
              </div>

              <div className="search-box">

            <form onSubmit={this.handleSubmit}>

                <input
                  id='search-input'
                  type="text"
                  style={{width: 250}}
                  value={this.state.input}
                  onChange={this.handleSearchInputChange}
                  />

                  <button type="submit"><i className="search icon"></i></button>



            </form>
          </div>
        </div>

    );
  }
}



export default SearchNews;
