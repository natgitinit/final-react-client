import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleCard from '../components/ArticleCard';
import { fetchedArticles } from '../actions/articleActions';


const API_KEY = process.env.REACT_APP_API_KEY

const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?'
            + `api-key=${API_KEY}`;


class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      hasError: false,
      loading: false
    };
  }

  // componentDidMount() {
  //   console.log(this.props.actions.fetchedArticles());
  //   if(this.props.articles) {
  //     console.log("in component did mount");
  //     this.props.actions.fetchArticles()
  //   }
  // }
    componentWillMount() {
      console.log("component will mount")
      // debugger;
      // this.props.fetchedArticles()
    }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading articles.</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="latest-news">
        <h2>Articles:</h2>
          { this.state.articles.map((article) => (
            <li key={article.id}>
                    {article.title}
            </li>
          ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}


export default connect(mapStateToProps, { fetchedArticles})(ArticleList);

// class ArticleList extends Component {
//
//   componentDidMount() {
//     console.log("component did mount")
//     this.props.fetchedArticles()
//   }
//
//   render() {
//     return (
//       <div className="ArticlesContainer">
//        <h1>Latest News</h1>
//        {this.props.articles.map(article => <ArticleCard key={article.id} article={article} />)}
//      </div>
//     );
//   }
// }
//
//
// const mapStateToProps = (state) => {
//   return ({
//     articles: state.articles
//   })
// }
//
// export default connect(mapStateToProps, { fetchedArticles })(ArticleList);
