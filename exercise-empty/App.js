import React, { Component } from 'react';
import './App.css';
import Exercise from './Exercise';
import ExerciseFinished from './ExerciseFinished';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exercise number???</h1>
          <h2 className="sub-title">title???</h2>
        </header>
        <ExerciseFinished />
      </div>
    );
  }
}

export default App;
