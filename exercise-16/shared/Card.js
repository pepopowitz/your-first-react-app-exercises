import React from 'react';
import classNames from 'classnames';
import theme from '../theme/static';

import styles from './Card.module.css';

export default function Card({ children }) {
  return (
    <div className={classNames(styles.card, styles[theme])}>{children}</div>
  );
}
