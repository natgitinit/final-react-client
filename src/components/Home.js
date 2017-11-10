import React, { Component } from 'react';
import 'isomorphic-fetch';


// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// };
//
// export default Home;

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;
//
const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?'
            + `api-key=${NYT_API_KEY}`;


class Home extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }


  render() {
    return (
      <div className="latest-news">
        <h2> The Latest News</h2>
      </div>
    );
  }
}

export default Home;
