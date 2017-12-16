import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class Saved extends Component {

  handleClick = params => {
    this.props.save(params)
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
      <Card>
        <div className="ui container center aligned">
          <button className="ui teal button" link={this.props.url} onClick={() => this.props.save(this.params)} target='_blank'>Save</button>
        </div>
      </Card>
    )
  }
}



export default Saved;

// <button className="btn btn-primary" onClick={this.handleClick.bind(this.handleDelete)}>Delete</button>
