import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard';
import { Card } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { savedArticle } from '../actions/saveActions';


// const Saved = (props) => {
//   debugger;
//   const articles = props.savedArticles.map((article, index) => {article.title})
//
//       return(
//         <div className="save-list">
//           <div className="ui cards">
//             {articles}
//           </div>
//         </div>
//       )
//
//
//   }
//
//   export default Saved;

class Saved extends Component {

  generateSaved = () => {
    return this.props.savedArticles.map((article, index) => {
      return (
        <Card className="saved" key={index}>
          <a href={article.url} target="_blank"><button className="btn btn-default ">View Article</button></a>


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
    })
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

// return (
// <div key={index}>
//   <li className="list-group-item" >
//
//      <h3>
//        <span><em>{article.title}</em></span>
//        <span className="btn-group pull-right" >
//          <a href={article.url} target="_blank"><button className="btn btn-default ">View Article</button></a>
//          <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
//        </span>
//      </h3>
//      <p>Date Published: {article.date}</p>
//
//    </li>
//
//  </div>
// )
