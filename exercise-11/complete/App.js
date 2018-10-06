import React, { Component } from 'react';
import Exercise from './Exercise';
import styles from './App.css';

import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Exercise 11</h1>
          <h2 className={classNames(styles.subTitle, styles.emphasize)}>CSS Modules</h2>
        </header>
        <div className={styles.exercise}>
          <Exercise />
        </div>
      </div>
    );
  }
}

export default App;