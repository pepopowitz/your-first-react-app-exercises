import React from 'react';
import classNames from 'classnames';
// import theme from './theme/static';

import ThemeContext from './theme/context';
import ThemeSwitcher from './theme/Switcher';

import styles from './Header.css';

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={classNames(styles.appHeader, styles[theme])}>
          <h1 className={styles.appTitle}>Exercise 17</h1>
          <h2 className={styles.subTitle}>Testing Component Render</h2>
          <div className={styles.switcherWrapper}>
            <ThemeSwitcher />
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
