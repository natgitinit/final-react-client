import React from 'react';
// import Home from './components/Home';

const Article = ({
  title,
  byline,
  abstract
}) => {
  return (
    <div key={title} className="article">
      <header>


        <span className="author">{byline}</span>
      </header>
      <blockquote>{abstract}</blockquote>
    </div>
  );
};


//DUMB COMPONENTS

const NewsArticles = ({ articles }) => <div className="article-list">{ articles.map(Article) }</div>

NewsArticles.defaultProps = {
  articles: []
};

export default NewsArticles;
