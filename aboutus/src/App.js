import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <div className="title">
          <img src={require('./title.jpg')} />

          <h1>WHO WE ARE?</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
