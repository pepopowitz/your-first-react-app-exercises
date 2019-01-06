import React from 'react';
import classNames from 'classnames';

import ThemeContext from '../theme/context';

import styles from './Page.module.css';

export default function Page({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={classNames(styles.page, styles[theme])}>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
