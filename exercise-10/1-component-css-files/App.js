import React, { Component } from 'react';
import './App.css';
import Exercise from './Exercise';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exercise 10</h1>
          <h2 className="sub-title">Styling - Component CSS Files</h2>
        </header>
        <div className="exercise">
          <Exercise />
        </div>
      </div>
    );
  }
}

export default App;
