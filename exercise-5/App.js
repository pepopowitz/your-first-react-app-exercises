import React, { Component } from 'react';
import './App.css';
import Exercise from './Exercise';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exercise 5</h1>
          <h2 className="sub-title">JSX Fundamentals</h2>
        </header>
        <Exercise />
      </div>
    );
  }
}

export default App;
