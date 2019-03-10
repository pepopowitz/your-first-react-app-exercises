import React from 'react';

import ThemeContext from './context';

import styles from './Switcher.module.css';

export default function() {
  return (
    <ThemeContext.Consumer>
      {({ theme, onThemeChanged }) => (
        <button className={styles.switcher} onClick={onThemeChanged}>
          Change Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
