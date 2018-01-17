import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savedArticle } from '../actions/saveActions';


// import ArticleCard from '../components/ArticleCard';
// import { Card } from 'semantic-ui-react';




// const Saved = (props) => {
//   console.log(props)
//   const articles = this.props.savedArticles.map((article, index) => <ArticleCard key={index} article={article}/>)
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



  render() {
    // debugger;
    return this.props.savedArticles.map((article) => {
       return (
          <div>
             <li className="list-saved-item" >
               <h3>
                 <span><em>{article.title}</em></span>
                 <span className="btn-group pull-right" >
                   <a href={article.article_url} target="_blank"><button className="btn btn-default ">View Article</button></a>            </span>
               </h3>
             </li>

           </div>
         )
       })

    // if (!this.props.savedArticles) {
    //   return(
    //
    //     <li className="list-group-item">
    //       <h3>
    //           <span><em>You dont have any Saved articles yet!</em></span>
    //       </h3>
    //     </li>
    //
    //     )
    //   }
    //
    //  else {
    //
    //    let articles = this.props.savedArticles.map((article, index) => {
    //    return (
    //        <div key={index}>
    //
    //          <li className="list-saved-item" >
    //            <h3>
    //              <span><em>{article.title}</em></span>
    //              <span className="btn-group pull-right" >
    //                <a href={article.article_url} target="_blank"><button className="btn btn-default ">View Article</button></a>            </span>
    //            </h3>
    //          </li>
    //
    //        </div>
    //      )
    //    })
    //  }
    // }
    }
  }

  function mapStateToProps(state) {
    return {
      savedArticles: state.savedArticles
    }
  }




export default connect(mapStateToProps, {savedArticle} )(Saved);
