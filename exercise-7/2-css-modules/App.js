import React from 'react';
import Exercise from './Exercise';
import styles from './App.module.css';

import classNames from 'classnames';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appTitle}>Exercise 7</h1>
        <h2 className={classNames(styles.subTitle, styles.emphasize)}>
          Styling - CSS Modules
        </h2>
      </header>
      <div className={styles.exercise}>
        <Exercise />
      </div>
    </div>
  );
}

export default App;
