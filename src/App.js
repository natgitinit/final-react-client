import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import ArticleCard from './components/ArticleCard';
import * as actions from './actions/articleActions.js';
import ArticleList from './containers/ArticleList';
// import SearchNews from './containers/SearchNews';


export class App extends Component {

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
              <Route exact path="/categories" component={Categories} />
             </div>
          </Router>
          {this.props.articles ?
            <ArticleCard /> : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  // debugger;
  return {articles: state}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch)}
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
