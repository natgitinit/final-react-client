import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleCard extends Component {


  generateArticleCards = () => {
    // debugger;
    return this.props.articles.map((source) => {
        return (
          <Card className="articleCard">
            <Image className="articlesImage" src={source.url}/>
            <Card.Content>
            <Card.Header>
              <Link className="sourceLink" to={source.url}>{source.title}</Link>
            </Card.Header>
            <Card.Meta>
              <div>Author: {source.byline}</div>
            </Card.Meta>
            <Card.Description> 
            {source.abstract}
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



//dumb component #2
// const ArticleCard = ({ article }) => (
//   <div className="ArticleCard">
//     <h3>{article.title}</h3>
//     <p>${article.abstract}</p>
//     <img className="ArticleImage" src={article.img_url} alt={article.title} />
//     <p>By: {article.byline}</p>
//   </div>
// )
//
// export default ArticleCard;
