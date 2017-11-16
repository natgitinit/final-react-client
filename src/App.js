import React, { Component } from 'react';
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
// import LatestNews from './containers/LatestNews';
import SearchNews from './containers/SearchNews';


export class App extends Component {

  componentDidMount() {
    console.log(this.props.actions.fetchedArticles());
    // if (this.props.articles.length === 0) {
    //   console.log('in component did mount')
    //   this.props.actions.fetchArticles()
    // }
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
          <SearchNews />
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
