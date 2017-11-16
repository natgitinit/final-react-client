// import React, { Component } from 'react';
// //add imports
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Categories from './components/Categories';
// import About from './components/About';
// import NewsArticles from './components/NewsArticles';
// import LatestNews from './containers/LatestNews';
// import SearchNews from './containers/SearchNews';
//
// export class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="app">
//         <div className="navbar">
//             <NavBar />
//          </div>
//          <Route exact path="/" component={Home} />
//          <Route exact path="/about" component={About} />
//          <Route exact path="/articleegories" component={Categories} />
//          <NewsArticles />
//          <SearchNews />
//         </div>
//       </Router>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import ArticleList from './articleList'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/articleActions.js'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import LatestNews from './containers/LatestNews';
import SearchNews from './containers/SearchNews';


export class App extends Component {

  componentDidMount() {
    if (this.props.articles.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchArticles()
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
             <div className="app">
             <div className="navbar">
                 <NavBar />
              </div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/articleegories" component={Categories} />
             </div>
          </Router>
          <LatestNews />
          <SearchNews />
        // <articleList articles={this.props.articles} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {articles: state.articles}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
