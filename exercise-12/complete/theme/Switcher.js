import React, { useContext } from 'react';

import ThemeContext from '../theme/context';

import styles from './Switcher.module.css';

export default function() {
  const value = useContext(ThemeContext);

  return (
    <button className={styles.switcher} onClick={value.onThemeChanged}>
      Change Theme
    </button>
  );
}
