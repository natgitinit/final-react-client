import React from 'react';
import ArticleList from '../containers/ArticleList';
// import ArticleCard from '../components/ArticleCard';

const Home = () => {

    return (
      <div className="home">
        <h1>The Latest News</h1>
        <ArticleList />
      </div>
    );
  }

export default Home;
