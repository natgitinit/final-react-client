import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleCard extends Component {


  generateArticleCards = () => {
    // debugger;
    return this.props.articles.map((article) => {
        return (
          <Card className="articleCard">
          <a href={article.url} class="ui medium image">
            <img src="//placehold.it/300/2255EE"/>
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
          </Card>

        )
    })
  }
  render() {
    return (
      <Card.Group itemsPerRow={3} size='medium'>
        {this.generateArticleCards()}
      </Card.Group>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles
  }
}

export default connect(mapStateToProps)(ArticleCard)
