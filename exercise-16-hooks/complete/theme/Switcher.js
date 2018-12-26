import React, { useContext } from 'react';

import ThemeContext from './context';

import styles from './Switcher.css';

export default function() {
  const { onThemeChanged } = useContext(ThemeContext);

  return (
    <button className={styles.switcher} onClick={onThemeChanged}>
      Change Theme
    </button>
  );
}
