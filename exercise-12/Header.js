import React from 'react';
import classNames from 'classnames';
import theme from './theme/static';

import ThemeSwitcher from './theme/Switcher';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={classNames(styles.appHeader, styles[theme])}>
      <h1 className={styles.appTitle}>Exercise 15</h1>
      <h2 className={styles.subTitle}>React Context</h2>
      <div className={styles.switcherWrapper}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
