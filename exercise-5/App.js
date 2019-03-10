import React from 'react';
import './App.css';
import Exercise from './Exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Exercise 5</h1>
        <h2 className="sub-title">What can a component render?</h2>
      </header>
      <div className="exercise">
        <Exercise />
      </div>
    </div>
  );
}

export default App;
