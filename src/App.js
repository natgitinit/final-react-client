import React, { Component } from 'react';
import Artists from './components/Artists';
import ArtistService from './services/ArtistService'
import './App.css';

// let artists = [
//   { name: 'Andy Warhol', id: 1 },
//   { name: 'Jackson Pollock', id: 2}
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      artists: []
    }
  }

  //make API call
  componentDidMount() {
    ArtistService.fetchArtists().then(artists => this.setState({ artists }))
  }


  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/*<Navbar />*/}
        </div>
      <div className="sidebar">
        <Artists artists={this.state.artists} />
      </div>
      <div className="main-content">
        {/*<Artist />*/}
      </div>
      </div>
    );
  }
}

export default App;
