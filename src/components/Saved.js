import React, { Component } from 'react';


class Saved extends Component {


  handleClick = () => {
    this.props.save.dispatch({
      type: 'SAVE_ARTICLE_FUFILLED'
    })
  }

  params = {
    article: {
      title: this.props.title,
      category: this.props.category,
      article_url: this.props.url,
      abstract: this.props.abstract,
      byline: this.props.byline
    }
  }

  render() {
    return (
        <div className="ui container center aligned">
          <button className="ui teal button" onClick={this.handleClick} target='_blank'>Save</button>
        </div>
    )
  }
}



export default Saved;
