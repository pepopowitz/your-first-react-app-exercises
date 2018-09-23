import React, { Component } from 'react';
import Exercise from './Exercise';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Exercise 11</h1>
          <h2 className={styles.subTitle}>CSS Modules</h2>
        </header>
        <div className="styles.exercise">
          <Exercise />
        </div>
      </div>
    );
  }
}

export default App;