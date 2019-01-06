import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Friends from './friends/Friends.entry';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <h1 className={styles.appTitle}>Exercise 11</h1>
            <h2 className={styles.subTitle}>React Router</h2>
          </header>
          <div className={styles.exercise}>
            <Route path="/" exact component={Friends} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
