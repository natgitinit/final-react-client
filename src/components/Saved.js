import React, { Component } from 'react';


class Saved extends Component {


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

// const allArticles = this.savedArticle.map((article, index) =>
//   <Article key={index} article={article}/> )


// <a href={this.props.url} onClick={this.handleClick} target='_blank'>
//   <h1 className="title"> {this.props.title} </h1>
// </a>
