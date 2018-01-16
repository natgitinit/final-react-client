import React, { Component } from 'react';


class Saved extends Component {



  render() {
    // debugger;

    if (this.props.savedArticles == "") {
      return(

        <li className="list-group-item">
          <h3>
              <span><em>You dont have any Saved articles yet!</em></span>
          </h3>
        </li>

        )
      }

     else {

       let articles = this.props.savedArticles.map((article, index) => {
       return (
           <div key={index}>

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
     }
    }

  }



export default Saved;
