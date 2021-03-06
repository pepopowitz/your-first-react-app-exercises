import React from 'react';
import classNames from 'classnames';
import theme from '../theme/static';

import styles from './Page.module.css';

export default function Page({ children }) {
  return (
    <div className={classNames(styles.page, styles[theme])}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
