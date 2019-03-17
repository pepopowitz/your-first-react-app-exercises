import React, { useContext } from 'react';
import classNames from 'classnames';

import ThemeContext from '../theme/context';

import styles from './Page.module.css';

export default function Page({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.page, styles[theme])}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
