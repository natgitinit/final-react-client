import React, { Component } from 'react';


class Saved extends Component {

  // handleOnClick = params => {
  //   console.log(this)
  //   this.props.save(params)
  // }

  handleClick = () => {
    this.props.save.dispatch({
      type: 'SAVE_ARTICLE_FUFILLED'
    })
  }
  // handleDelete = params => {
  //   this.props.delete(params)
  // }

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
          <button className="ui teal button" link={this.props.url} onClick={() => this.handleClick.bind(this)} target='_blank'>Save</button>
        </div>
    )
  }
}



export default Saved;
