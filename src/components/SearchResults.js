import React, {Component} from 'react';
import SearchNews from '../containers/SearchNews';
// import { allArticles } from '../reducers/searchReducer';

const SearchResults = (props) => {
  // debugger;
  return (
    <div>
      <h1>By Keyword </h1>
      <div className="right menu">
        <div className="item">
        <SearchNews />

        </div>
     </div>
    </div>
  );
};

// class SearchResults extends Component {
//
//   render() {
//     return (
//       <div className="search-results">
//       <SearchNews/>
//         <li>
//           {this.props.articles}
//         </li>
//       </div>
//     )
//   }
// }
//
export default SearchResults;
