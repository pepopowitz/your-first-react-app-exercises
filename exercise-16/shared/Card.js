import React, { useContext } from 'react';
import classNames from 'classnames';

import ThemeContext from '../theme/context';

import styles from './Card.module.css';

export default function Card({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames(styles.card, styles[theme])}>{children}</div>
  );
}
