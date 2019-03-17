import React, { useContext } from 'react';
import classNames from 'classnames';

import ThemeContext from './theme/context';
import ThemeSwitcher from './theme/Switcher';

import styles from './Header.module.css';

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={classNames(styles.appHeader, styles[theme])}>
      <h1 className={styles.appTitle}>Exercise 17</h1>
      <h2 className={styles.subTitle}>Testing Component Render</h2>
      <div className={styles.switcherWrapper}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
