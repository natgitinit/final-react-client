import React, { Component } from 'react';
//add imports
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories'
import About from './components/About'

export class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
