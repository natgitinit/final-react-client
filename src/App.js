import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './containers/Search';
import Saved from './components/Saved';
import ArticleCard from './components/ArticleCard';
import * as actions from './actions/articleActions.js';
import { getSaved } from './actions/saveActions.js';
import { deleteArticle } from './actions/saveActions.js';
import { upVote } from './actions/saveActions.js';
import './App.css';


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
              <Route exact path="/saved" render={() => <Saved
                                                        savedArticles={this.props.savedArticles}
                                                        deleteArticle={this.props.deleteArticle}
                                                        getSaved={this.props.getSaved}
                                                        upVote={this.props.upVote}
                                                        upVoteCount={this.props.upvote_count} />} />
              <Route exact path="/search" component={Search} />
             </div>
          </Router>
          {this.props.articles ?
            <ArticleCard /> : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    savedArticles: state.saveReducer.saved,
    deleteArticle: state.saveReducer.deleteArticle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    getSaved: bindActionCreators(getSaved, dispatch),
    deleteArticle: bindActionCreators(deleteArticle, dispatch),
    upVote: bindActionCreators(upVote, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
