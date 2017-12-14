import React from 'react'
import ArticleList from './containers/ArticleList'

const ReadingList = (props) => {
  console.log(props)
  const allArticles = props.savedArticles.map((article, index) => <Article key={index} article={article}/>)

      return(
        <div className="reading-list">
          <div className="ui cards">
            {allArticles}
          </div>
        </div>
      )


  }

  export default ReadingList
