import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleCard extends Component {


  generateArticleCards = () => {
    return this.props.articles.map((article) => {
      return article.articles.map((article) => {
        return (
          <Card className="articleCard">
            <Image className="articlesImage" src={article.image_url}/>
            <Card.Content>
            <Card.Header>
              <Link className="articleLink" to={article.url}>{article.title}</Link>
            </Card.Header>
            <Card.Meta>
              <div>Author: {article.byline}</div>
            </Card.Meta>
            <Card.Abstract>
              {article.abstract}
            </Card.Abstract>
            </Card.Content>
          </Card>
        )
      })
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
    articles: state.news.articles
  }
}

export default connect(mapStateToProps)(ArticleCard)

//dumb component to list Articles
// const Article = ({
//   title,
//   byline,
//   abstract,
//   image_url
// }) => {
//   return (
//     <div key={title} className="article">
//       <header>
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{abstract}</blockquote>
//     </div>
//   );
// };
//
// const Articles = ({ articles }) => <div className="article-list">{ articles.map(Article) }</div>
//
// Articles.defaultProps = {
//   articles: []
// };
//
// export default ArticleCard;



//dumb component #2
// const ArticleCard = ({ article }) => (
//   <div key={article.id} className="ArticleCard">
//     <h3>{article.title}</h3>
//     <p>${article.abstract}</p>
//     <img className="ArticleImage" src={article.img_url} alt={article.title} />
//     <p>By: {article.byline}</p>
//   </div>
// )
//
// export default ArticleCard;
