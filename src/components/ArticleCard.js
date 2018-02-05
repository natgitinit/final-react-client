import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { savedArticle } from '../actions/saveActions';

class ArticleCard extends Component {

  handleClick = params => {
      this.props.dispatch(savedArticle(params))
      console.log(params)
    }


  generateArticleCards = () => {
    return this.props.articles.map((article, index) => {
      let imgResult = article.multimedia[3]
        if(imgResult) {
        return (
          <Card className="articleCard" key={index}>
          <a href={article.url} target="_blank" className="ui medium image">
            <img src={ imgResult.url } alt="article-url" className="image"/>
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

            <button className="ui teal button" onClick={() => this.handleClick(article)} target='_blank'>Save</button>

          </Card>
        )
      } else {
        return
      }
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


export default connect(mapStateToProps)(ArticleCard);
