import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';


class Saved extends Component {

  handleOnClick = (params) => {
    this.props.deleteArticle(params)
    console.log(params)
    }

    componentDidMount = () => {
      this.props.getSaved()
    }


  generateSaved = () => {
    if (this.props.savedArticles){
    return this.props.savedArticles.map((article, index) => {
      return (
        <Card className="saved" key={index}>
          <a href={article.url} target="_blank">
            <button className="ui orange button">View Article</button>
          </a>

          <Card.Content>
          <Card.Header>
            <div className="title">
              <h3>{article.title}</h3>
            </div>
          </Card.Header>
          <Card.Meta>
            <div>Author: {article.byline}</div>
          </Card.Meta>
          <Card.Description>
          {article.abstract}
          </Card.Description>
          </Card.Content>

          <button className="ui teal button" onClick={() => this.handleOnClick(article)} target='_blank'>Delete</button>

        </Card>
      )
    })
    } else {
      this.props.getSaved();
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={3} size='medium'>
        {this.generateSaved()}
      </Card.Group>
    )
  }

}

export default Saved;
